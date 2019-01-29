import {
  Component,
  OnInit,
  HostBinding,
  Input,
} from '@angular/core';

import { Pagination } from '../../../tui';
import {
  LogListService,
  Operation,
  OperationResponse,
} from './log-list.service';

const LOG_PAGE_SIZE = 20;

@Component({
  selector: 'tdc-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.sass'],
})
export class LogListComponent implements OnInit {
  @HostBinding('class.tcc-log-list') host = true;
  @Input() projectId: number;

  operations: Operation[] = [];
  pagination: Pagination = {
    page: 1,
    size: LOG_PAGE_SIZE,
    total: 0,
  };
  displayCount = 0;
  loading = false;

  constructor(
    private service: LogListService,
  ) { }

  ngOnInit() {
    this.fetchOperations(this.pagination);
  }

  fetchOperations(pagination: Pagination) {
    this.loading = true;

    this.service.getLogs(pagination.page, pagination.size, this.projectId)
    .subscribe((result: OperationResponse) => {
      if (result) {
        this.operations = this.operations.concat(result.data);
        this.pagination = result.pagination;
        this.displayCount += result.data.length;
      }
      this.loading = false;
    });
  }

  get hasMore() {
    return this.displayCount < this.pagination.total;
  }

  showMoreOperations() {
    if (this.hasMore) {
      this.pagination.page ++;
      this.fetchOperations(this.pagination);
    }
  }
}
