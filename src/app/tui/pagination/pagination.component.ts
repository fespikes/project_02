import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  OnDestroy,
} from '@angular/core';

import { Subject } from 'rxjs/Rx';

interface PaginationState {
  currentPage: number;
  pageSize: number;
  mute?: boolean;
}

export class Pagination {
  page = 1;
  size = 5;
  total = 0;
}

@Component({
  selector: 'tcc-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass'],
})
export class PaginationComponent implements OnInit, OnDestroy {
  @HostBinding('class.tcc-pagination') hostClass = true;
  @Output() paginationChange = new EventEmitter<Pagination>();
  @Input() set pagination(pagination: Pagination) {
    this.pageSize = pagination.size;
    this.totalData = pagination.total;
    this._currentPage = pagination.page;
    this.totalPage = this.calcTotalPage(this.totalData, this.pageSize);
    // 任何输入只渲染分页组件，不触发分页事件
    this.triggerPaginationChange(true);
  }

  private ngUnsubscribe = new Subject<any>();
  pageSize: number;
  totalData: number;
  sizes = [5, 10, 20];
  pages: any[];
  searchPage: number;
  _currentPage: number;
  totalPage: number;
  stateSubject = new Subject<PaginationState>();

  get currentPage() {
    return this._currentPage || 1;
  }

  set currentPage(currentPage: number) {
    if (currentPage > 0 && currentPage <= this.totalPage) {
      this._currentPage = currentPage;
      this.triggerPaginationChange();
    }
  }

  constructor() {
    this.pageSize = this.pageSize || this.sizes[1];
  }

  ngOnInit() {
    this.stateSubject.asObservable()
    .debounceTime(100)
    .filter(state => !state.mute)
    .distinctUntilChanged((previous, next) => {
      return previous.currentPage === next.currentPage &&
        previous.pageSize === next.pageSize;
    })
    .takeUntil(this.ngUnsubscribe)
    .subscribe((changes: PaginationState) => {
      this.paginationChange.emit({
        page: changes.currentPage,
        size: changes.pageSize,
        total: this.totalData,
      });
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  isOmit(page) {
    return typeof page !== 'number';
  }

  // 页码输入框会传入string
  goPage(page: number | string) {
    this.currentPage = +page;
  }

  next() {
    this.currentPage += 1;
  }

  prev() {
    this.currentPage -= 1;
  }

  pageSizeChange() {
    this.totalPage = this.calcTotalPage(this.totalData, this.pageSize);
    this.currentPage = 1;
    this.triggerPaginationChange();
  }

  triggerPaginationChange(mute = false) {
    this.renderPages();
    this.stateSubject.next({
      currentPage: this.currentPage,
      pageSize: this.pageSize,
      mute,
    });
  }

  renderPages() {
    if (!this.pageSize || !this.totalPage || !this.currentPage) {
      this.pages = [];
      return;
    }

    const { lowerBound, upperBound } = this.calcBound(this.currentPage, this.totalPage);
    this.pages = this.calcPages(lowerBound, upperBound, this.totalPage);
    return this.pages;
  }

  calcTotalPage(total: number, pageSize: number) {
    let totalPage = Math.floor(total / pageSize);
    totalPage += (total % pageSize ? 1 : 0);
    return totalPage;
  }

  calcBound(currentPage: number, totalPage: number) {
    const maxShow = 5;
    const range = Math.floor(maxShow / 2);
    let lowerBound = currentPage - range;
    let upperBound = currentPage + range;

    if (lowerBound <= 0) {
      lowerBound = 1;
      upperBound = (lowerBound + maxShow) < totalPage ? (lowerBound + maxShow - 1) : totalPage;
    } else if (upperBound > totalPage) {
      upperBound = totalPage;
      lowerBound = (upperBound - maxShow) < 1 ? 1 : (upperBound - maxShow + 1);
    }
    return {lowerBound, upperBound};
  }

  calcPages(lowerBound: number, upperBound: number, totalPage: number) {
    let pages = [];
    for (let i = lowerBound; i <= upperBound; i ++) {
      pages.push(i);
    }

    if (pages[0] > 2) {
      pages = [1, 'omit', ...pages];
    } else if (pages[0] === 2) {
      pages = [1, ...pages];
    }

    if (pages[pages.length - 1] < totalPage - 1) {
      pages = [...pages, 'omit', totalPage];
    } else if (pages[pages.length - 1] === totalPage - 1) {
      pages = [...pages, totalPage];
    }
    return pages;
  }
}
