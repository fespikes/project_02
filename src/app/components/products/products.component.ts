import { Component, HostBinding, OnInit } from '@angular/core';
import { SubmenuItem } from '../../tui';

@Component({
  selector: 'tdc-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  @HostBinding('class.tdc-products-box') layout = true;

  private routePrefix = '';
  menuTitle = '云产品';
  menuItems = [
    {
      name: '数据仓库',
      url: `/products/data-warehouse`,
      icon: 'products-data-warehouse'
    },
    {
      name: '数据集市',
      url: `/products/data-mart`,
      icon: 'products-data-mart'
    },
    {
      name: '实时计算',
      url: `/products/realtime-computation`,
      icon: 'products-realtime-computation'
    },
    {
      name: '搜索引擎',
      url: `/products/info-retrieval`,
      icon: 'products-info-retrieval'
    },
    // {
    //   name: '数据分析平台',
    //   url: `/products/analysis-mining`,
    //   icon: 'products-analysis-mining'
    // },
    {
      name: '人工智能',
      url: `/products/deep-learning`,
      icon: 'products-deep-learning'
    },
    {
      name: '关系数据库',
      url: `/products/relational-database`,
      icon: 'products-relational-database'
    }
  ];
  backUrl = '../';

  constructor() { }

  ngOnInit() {
  }

}
