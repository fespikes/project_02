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
				  summary: '数据仓库是数据中心库，全面整合各类数据，按照主题组织信息，是打造商业智能的核心。',
				  routerLink: './products/data-warehouse'
				},
				{
				  title: '数据集市',
				  summary: '数据集市面向部门级业务，提供各种模型用以组织数据，实现交互式分析以及自动化的报表应用构建。',
				  routerLink: './products/data-mart'
				},
				{
				  title: '实时计算',
				  summary: '云上的流处理分析平台，对流数据进行实时采集和实时处理，帮助企业构建在线实时应用，充分利用流式信息。',
				  routerLink: './products/realtime-computation'
				},
				{
				  title: '搜索引擎',
				  summary: 'PB级别的高速全文检索服务，提供高并发支持，以及字段精确、模糊检索和快速统计功能，支持用SQL做内容检索。',
				  routerLink: './products/info-retrieval'
				},
				// {
				//   title: '数据分析平台',
				//   summary: '数据分析平台为数据科学家提供了丰富的数据挖掘功能，内置60余种分布式机器学习算法和行业模型，实现数据到价值信息的转换。',
				//   routerLink: './products/analysis-mining'
				// },
				{
				  title: '深度学习',
				  summary: '深度学习和人工智能开发平台，可以用于机器学习和AI应用的开发，实现高度智能化的信息处理。',
				  routerLink: './products/deep-learning'
				},
				{
				  title: '关系数据库',
				  summary: '构建企业关系型数据库，处理数据量在500GB以内的OLTP业务。支持复杂SQL查询，提供高稳定、可扩展、强一致保证。',
				  routerLink: './products/relational-database'
				}
			]
		},
		modules: {
			type: 'modules',
			products: [
				{
					category: 'tdh-platform-products',
					title: '平台服务',
					products: [
						{
						  title: 'Inceptor',
						  summary: '分析型数据库',
						  routerLink: './modules/platform/inceptor'
						},
						{
						  title: 'Slipstream',
						  summary: '实时计算引擎',
						  routerLink: './modules/platform/slipstream'
						},
						{
						  title: 'Discover',
						  summary: '数据挖掘',
						  routerLink: './modules/platform/discover'
						},
						{
						  title: 'Hyperbase',
						  summary: 'NewSQL数据库',
						  routerLink: './modules/platform/hyperbase'
						},
						{
						  title: 'Search',
						  summary: '大数据搜索引擎',
						  routerLink: './modules/platform/search'
						},
						{
						  title: 'Sophon',
						  summary: '深度学习',
						  routerLink: './modules/platform/sophon'
						},
						{
						  title: 'Redis',
						  summary: '内存K-V数据库',
						  routerLink: './modules/platform/redis'
						},
						{
						  title: 'Kafka',
						  summary: '消息中间件',
						  routerLink: './modules/platform/kafka'
						},
						{
						  title: 'Guardian',
						  summary: '安全管控',
						  routerLink: './modules/platform/guardian'
						},
						{
						  title: 'Apache Hadoop',
						  summary: '分布式系统基础架构',
						  routerLink: './modules/platform/hadoop'
						},
					]
				},
				{
					category: 'tdh-dev-tools',
					title: '开发工具',
					products: [
						{
						  title: 'Pilot',
						  summary: '报表工具',
						  routerLink: './modules/tool/pilot'
						},
						{
						  title: 'Workflow',
						  summary: '工作引擎流',
						  routerLink: './modules/tool/workflow'
						},
						{
						  title: 'Transporter',
						  summary: '数据整合',
						  routerLink: './modules/tool/transporter'
						},
						{
						  title: 'Governor',
						  summary: '数据治理',
						  routerLink: './modules/tool/governor'
						},
						{
						  title: 'Rubik',
						  summary: 'Cube设计',
						  routerLink: './modules/tool/rubik'
						},
						{
						  title: 'Milano',
						  summary: '日志服务',
						  routerLink: './modules/tool/milano'
						},
						{
						  title: 'Zeppelin',
						  summary: '数据分析Notebook',
						  routerLink: './modules/tool/zeppelin'
						},
						{
						  title: 'Midas',
						  summary: '数据挖掘工具',
						  routerLink: './modules/tool/midas'
						},
						{
						  title: 'Terminal',
						  summary: '容器命令行',
						  routerLink: './modules/tool/terminal'
						},
					]
				},
				{
					category: 'tdh-system-service',
					title: '系统服务',
					products: [
						{
						  title: 'TxSQL',
						  summary: '高可用数据库',
						  routerLink: './modules/system/txsql'
						},
						{
						  title: 'Prometheus',
						  summary: '指标监控',
						  routerLink: './modules/system/prometheus'
						},
						{
							title: 'TOS',
							summary: '容器操作系统',
							routerLink: './modules/system/tos'
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
