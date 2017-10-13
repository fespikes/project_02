import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tcc-ga-property',
  templateUrl: './ga-property.component.html',
  styleUrls: ['./ga-property.component.sass'],
})
export class GaPropertyComponent implements OnInit {
  dpOption: any;
  properties = [
    {
      icon: 'pile',
      value: '商务部仓储项目',
      label: '项目',
    },
    {
      icon: 'user',
      value: 'Monica',
      label: '创建者',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
