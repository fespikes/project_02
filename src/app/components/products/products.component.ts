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
  // menuItems: SubmenuItem[] = [
  menuItems = [
		{
		  name: '数据仓库',
		  url: `/products/data-warehouse/functionalities`,
		  icon: 'user'
		},
		{
		  name: '数据集市',
		  url: `/products/data-mart`,
		  icon: 'user'
		},
		{
		  name: '信息检索',
		  url: `/products/info-retrieval`,
		  icon: 'user'
		},
		{
		  name: '关系数据库',
		  url: `/products/relational-database`,
		  icon: 'user'
		},
		{
		  name: '深度学习',
		  url: `/products/deep-learning`,
		  icon: 'user'
		},
		{
		  name: '实时计算',
		  url: `/products/realtime-computation`,
		  icon: 'user'
		},
		{
		  name: '数据分析与挖掘',
		  url: `/products/analysis-mining`,
		  icon: 'user'
		},
	];
  backUrl = '../';

  constructor() { }

  ngOnInit() {
  }

}
