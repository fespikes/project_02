import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {

  constructor() { }

  getProductTabs() {
    return [
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
  }
}
