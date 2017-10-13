import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Pagination } from '../../tui';

@Component({
  templateUrl: './ga-pagination.component.html',
  styleUrls: ['./ga-pagination.component.sass'],
})
export class GaPaginationComponent implements OnInit {
  pagination: Pagination = new Pagination();

  constructor() { }

  ngOnInit() {
    this.fetchData();
  }

  fetchDataApi(pagination?) {
    return Observable.of({
      data: [],
      pagination: {
        page: 1,
        size: 10,
        ...pagination,
        total: 205,
      },
    });
  }

  fetchData() {
    console.log('pagination', this.pagination);
    this.fetchDataApi(this.pagination)
      .subscribe((data) => {
        this.pagination = data.pagination;
      });
  }
}
