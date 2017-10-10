import { Component } from '@angular/core';

@Component({
  templateUrl: './ga-table.component.html',
  styleUrls: ['./ga-table.component.sass'],
})
export class GaTableComponent {
  tableData = [
    {id: 1, name: 'cat', type: 'limb', desc: 'miao'},
    {id: 2, name: 'dog', type: 'limb', desc: 'wuf'},
    {id: 3, name: 'fish', type: 'no-limb', desc: 'blue'},
  ];

  loading = true;

  loadingTableData: any[];

  constructor() { }

  selectChange(data) {
    console.log('selectChange', data);
  }

  onDelete(record) {
    console.log('delete', JSON.stringify(record));
  }

  toggleSublist(datum) {
    datum.showSublist = !datum.showSublist;
  }

  startLoading() {
    this.loading = true;
  }

  stopLoading() {
    this.loading = false;
    this.loadingTableData = [
      {name: 'red', alias: '红色'},
      {name: 'blue', alias: '蓝色'},
    ];
  }
}
