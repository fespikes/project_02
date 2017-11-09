import { Injectable } from '@angular/core';

const navigationData = {
	navTop: [
		{
			text: 'LOGO',
			routerLink: './home',
			style: {
				class: 'top-nav-a logo',
				routerLinkActive: ''
			}
		},
		{
			text: '云产品',
			routerLink: './products',
			style: {
				class: 'top-nav-a',
				routerLinkActive: 'active'
			},
			subMenu: 'products'
		},
		{
			text: '产品组件',
			routerLink: './modules',
			style: {
				class: 'top-nav-a',
				routerLinkActive: 'active'
			},
			subMenu: 'modules'
		},
		{
			text: '业务方案',
			routerLink: './business-scenarios',
			style: {
				class: 'top-nav-a',
				routerLinkActive: 'active'
			}
		},
		{
			text: '文档与支持',
			routerLink: './documents-support',
			style: {
				class: 'top-nav-a',
				routerLinkActive: 'active'
			}
		},
		{
			text: '管理中心',
			style: {
				class: 'manage-center',
			}
		}
	],
	subMenu: {
		// home: {},
		products: {
			type: 'products',
			products: [
				{
				  title: '数据仓库',
				  summary: '用于构建一站式数据仓库服务，提供包括分析数据库、数据整合、模型加工等重要功能，同时提供对于查询速度、并发度、扩展性的保障，是高效的数据掘金利器。',
				  routerLink: './products/data-warehouse'
				},{
				  title: '数据集市',
				  summary: '用于为企业构建数据集市，面向特定的应用主题，对接数据分析业务，提供包括Cube设计、交互式分析、可视化分析、调度在内的多种工具，实现自动化的报表应用构建。',
				  routerLink: './products/data-mart'
				},
				{
				  title: '信息检索',
				  summary: '为企业构建一站式内部搜索平台和信息检索服务，提供PB级别的高速全文检索，实现毫秒级的响应速度，高并发支持，字段精确和模糊检索以及快速统计功能。',
				  routerLink: './products/info-retrieval'
				},
				{
				  title: '关系数据库',
				  summary: '构建企业内部的关系数据库服务，可用于处理数据量在500GB以内的OLTP业务。支持复杂的SQL查询，提供高稳定、可扩展、强一致的数据处理服务。',
				  routerLink: './products/relational-database'
				},
				{
				  title: '深度学习',
				  summary: '用于深度学习和人工智能开发的数据处理平台，帮助企业开发深度学习和AI应用，实现高度智能化的信息处理，协助与增进企业运作管理。',
				  routerLink: './products/deep-learning'
				},{
				  title: '实时计算',
				  summary: '云上的流处理分析平台，可对流数据进行实时采集和实时处理。为企业构建实时数据仓库，开发多种在线实时应用，实现对流式信息的充分利用。',
				  routerLink: './products/realtime-computation'
				},{
				  title: '数据分析与挖掘',
				  summary: '提供数据清洗、特征工程、建模平台和工具集，以及60余种分布式机器学习算法和多种行业模型，方便探索对象属性和行为之间的关系，从数据中发现蕴含价值。',
				  routerLink: './products/analysis-mining'
				}
			]
		},
		modules: {
			type: 'modules',
			products: [
				{
					category: 'tdh-platform-products',
					title: 'TDH平台产品',
					products: [
						{
						  title: 'Inceptor',
						  summary: '分析型数据库',
						  routerLink: './modules/product/inceptor/introduce'
						},
						{
						  title: 'Slipstream',
						  summary: '实时计算引擎',
						  routerLink: './modules/product/slipstream/introduce'
						},
						{
						  title: 'Discover',
						  summary: '数据挖掘',
						  routerLink: './modules/product/discover/introduce'
						},
						{
						  title: 'Hyperbase',
						  summary: '快速检索和非结构化数据处理',
						  routerLink: './modules/product/hyperbase/introduce'
						},
						{
						  title: 'Search',
						  summary: '全文检索',
						  routerLink: './modules/product/search/introduce'
						},
						{
						  title: 'Sophon',
						  summary: '深度学习和交互式数据挖掘',
						  routerLink: './modules/product/sophon/introduce'
						},
						{
						  title: 'Guardian',
						  summary: '安全、权限和资源管控',
						  routerLink: './modules/product/guardian/introduce'
						},
						{
						  title: 'Apache Hadoop',
						  summary: '分布式系统基础架构',
						  routerLink: './modules/product/hadoop/introduce'
						}
					]
				},
				{
					category: 'tdh-dev-tools',
					title: 'TDH开发套件',
					products: [
						{
						  title: 'Pilot',
						  summary: '报表工具',
						  routerLink: './modules/suite/pilot/introduce'
						},
						{
						  title: 'Workflow',
						  summary: '调度流',
						  routerLink: './modules/suite/workflow/introduce'
						},
						{
						  title: 'Transporter',
						  summary: '数据流',
						  routerLink: './modules/suite/transporter/introduce'
						},
						{
						  title: 'Governor',
						  summary: '元数据管理工具',
						  routerLink: './modules/suite/governor/introduce'
						},
						{
						  title: 'Rubik',
						  summary: 'OLAP Cube设计工具',
						  routerLink: './modules/suite/rubik/introduce'
						}
					]
				},
				{
					category: '',
					title: '运维和开发工具',
					products: [
						{
						  title: 'TxSQL',
						  summary: '关系数据库',
						  routerLink: './modules/tool/txsql/introduce'
						},
						{
						  title: 'Midas',
						  summary: '机器学习分析工具',
						  routerLink: './modules/tool/midas/introduce'
						},
						{
						  title: 'Waterdrop',
						  summary: 'SQL开发工具',
						  routerLink: './modules/tool/waterdrop/introduce'
						},
						{
						  title: 'Milano',
						  summary: '日志服务',
						  routerLink: ''
						},
						{
						  title: 'Prometheus',
						  summary: 'Metrics监控',
						  routerLink: './modules/tool/prometheus/introduce'
						},
						{
						  title: 'Kafka',
						  summary: '消息中间件',
						  routerLink: './modules/tool/kafka/introduce'
						},
						{
						  title: 'Zeppelin',
						  summary: 'Notebook IDE',
						  routerLink: './modules/tool/zeppelin/introduce'
						},
						{
						  title: 'Terminal',
						  summary: 'Docker命令行工具',
						  routerLink: './modules/tool/terminal/introduce'
						},
						{
						  title: 'Redis',
						  summary: '内存K-V数据库',
						  routerLink: './modules/tool/redis/introduce'
						}
					]
				}
			]
		}
	}
};

@Injectable()
export class NavTopService {

	navigationData: any;

  constructor() {
  	this.navigationData = navigationData;
  }

  getNavigation() {
  	return this.navigationData;
  }

  getNavigationItems() {
  }

}
