import { Component, OnInit, HostBinding } from '@angular/core';

import { SubMenuService } from './sub-menu.service';

const items = [{
  title: '数据仓库',
  summary: '数据仓库是数据中心库，集中整合最新以及历史数据，按照不同主题组织信息，是打造商业智能的核心。TDH-DW可用于构建一站式数据仓库服务，提供包括分析数据库、数据整合、模型加工等重要功能，同时提供对于查询速度、并发度、扩展性的保障，是高效的数据掘金利器。',
  path: ''
},{
  title: '数据集市',
  summary: '数据集市是面向部门级业务，特定的应用主题，用星型或者雪花模型组织构建数据。TDH-DM可以用于构建企业的数据集市，对接数据分析业务，提供包括交互式分析、Cube、报表、调度工具，实现自动化的报表应用构建。',
  path: ''
},
{
  title: '信息检索',
  summary: '提供PB级别的高速全文检索服务，实现毫秒级的响应速度，支持用SQL做内容检索，提供多种接口，高并发支持，字段精确和模糊检索以及快速统计功能。采用异地数据共享分布式存储，存储海量数据，为企业构建一站式内部搜索平台和信息检索服务。',
  path: ''
},
{
  title: '关系数据库',
  summary: '构建企业内部的关系数据库服务，可用于处理数据量在500GB以内的OLTP业务。支持复杂的SQL查询，提供高稳定、可扩展、强一致的数据处理服务。',
  path: ''
},
{
  title: '深度学习',
  summary: '深度学习产品TDH-DL是用于深度学习和人工智能开发的数据处理平台，帮助企业开发深度学习和AI应用，实现高度智能化的信息处理，将某些投入简单重复劳动中的人力解放出来，协助与增进企业运作管理。',
  path: ''
},{
  title: '实时计算',
  summary: '云上的流处理分析平台，可对流数据进行实时采集和实时处理。帮助企业构建实时数据仓库，开发如传感器数据分析，异常状态检测，风险分析，在线反欺诈等多种在线实时应用，实现对流式信息的充分利用。',
  path: ''
},{
  title: '数据分析与挖掘',
  summary: '数据分析平台为数据科学家提供了数据清洗、特征工程、建模平台以及工具集，用于构建数据分析、数据挖掘业务。共提供了60余种分布式机器学习算法和多种行业模型，方便从数据中发现蕴含价值，探索对象属性和行为之间的关系，将数据有效转换为助于企业运营的价值信息。',
  path: ''
}];

@Component({
  selector: 'tdc-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.sass']
})
export class NavTopComponent implements OnInit {

  @HostBinding('class.tcc-nav-wrapper') hostClass = true;

  private subMenuItems: any;

  constructor(/*private subMenuService: SubMenuService*/) { }

  ngOnInit() {
  	this.subMenuItems = this.getNavtopData();
  }

  getNavtopData(): any{
    return items;
  }

}
