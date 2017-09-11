import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'tdc-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.sass']
})
export class ModulesComponent implements OnInit {

  @HostBinding('class.submenu-layout') layout = true;

  // menuItems: SubmenuItem[] = [
  menuItems = [
		{
		  name: '数据仓库',
		  url: `/compute/data-warehouse`,
		  icon: 'user'
		},
		{
		  name: '数据集市',
		  url: `/compute/data-mart`,
		  icon: 'user'
		},
		{
		  name: '信息检索',
		  url: `/compute/info-retrieval`,
		  icon: 'user'
		},
		{
		  name: '关系数据库',
		  url: `/compute/relational-database`,
		  icon: 'user'
		},
		{
		  name: '深度学习',
		  url: `/compute/deep-learning`,
		  icon: 'user'
		},
		{
		  name: '实时计算',
		  url: `/compute/realtime-computation`,
		  icon: 'user'
		},
		{
		  name: '数据分析与挖掘',
		  url: `/compute/analysis-mining`,
		  icon: 'user'
		},
	];
  backUrl = '../';
  menuTitle: 'title of compute';

  constructor() { }

  ngOnInit() {
  }

}
