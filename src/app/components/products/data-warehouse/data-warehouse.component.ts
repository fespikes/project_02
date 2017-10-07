import {
  Component,
  OnInit,
  HostBinding,
  Input,
  Output
} from '@angular/core';

import { TabComponent } from '../../common/components/tab/tab.component';

@Component({
  selector: 'tdc-data-warehouse',
  templateUrl: './data-warehouse.component.html',
  styleUrls: ['./data-warehouse.common.sass','./data-warehouse.component.sass']
})
export class DataWarehouseComponent implements OnInit {

  @HostBinding('class.data-warehouse-box') layout = true;

  tabItems = [
    {
      name: 'productFunction',
      alias: '产品功能',
      url: './functionalities'
    },
    {
      name: 'productAdvantage',
      alias: '产品优势',
      url: './advantages'
    },
    {
      name: 'productScenarios',
      alias: '应用场景',
      url: './scenarios/multi-tenancy-platform'
    },
    {
      name: 'moduleIntroduce',
      alias: '组件介绍',
      url: './component-intro/tdh-platform-products'
    }
  ];

  constructor() { }

  ngOnInit() {

  }
}
