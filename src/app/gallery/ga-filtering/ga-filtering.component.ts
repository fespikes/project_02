import { Component, OnInit } from '@angular/core';
import range from 'lodash/range';

import { Pagination } from '../../tui';

function generateData() {
  const dataSize = 105;
  return range(dataSize).map(function(i) {
    return {
      name: i.toString(),
      type: Math.random() > 0.6 ? 'book' : 'paper',
    };
  });
}

@Component({
  selector: 'tcc-ga-filtering',
  templateUrl: './ga-filtering.component.html',
  styleUrls: ['./ga-filtering.component.sass'],
})
export class GaFilteringComponent implements OnInit {
  allData = generateData();
  data: any;
  search: string;
  options = [
    {type: 'book'},
    {type: 'paper'},
  ];
  select;

  pagination = new Pagination();

  constructor() { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData(fromStart = false) {
    // 如果搜索或者过滤，则重置页码
    if (fromStart) {
      this.pagination = {
        ...this.pagination,
        page: 1,
      };
    }

    // 模仿请求
    const size = this.pagination.size;
    const start = (this.pagination.page - 1) * size;

    this.data = this.allData.filter((datum) => {
      let match = true;
      if (this.search) {
        match = match && !!~datum.name.indexOf(this.search);
      }
      if (this.select) {
        match = match && datum.type === this.select;
      }
      return match;
    })
    .slice(start, start + size);

    // 模仿请求中给pagination赋值
    this.pagination = {
      ...this.pagination,
      total: this.allData.length,
    };

    console.log('this.data', this.data);
  }
}
