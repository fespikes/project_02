import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {

  constructor() { }

  getData(params) {
		return {
			advList: [
			  {
			    bgUrl: '/assets/images/home/banner-bg.jpg',
			    bgColor: '#0a0e11',
			    //TODO: switch the bg
			    h2: '云上大数据服务',
			    p: '我们专注于为企业提供以客户为中心的全流程产品，帮助企业获得成功'
			  },
			  {
			    bgUrl: '/assets/images/home/mock/1.jpg',
			    bgColor: '#4a457f',
			    h2: 'h2-01',
			    p: 'p-01'
			  },
			  {
			    bgUrl: '/assets/images/home/mock/2.jpg',
			    bgColor: '#030502',
			    h2: 'h2-02',
			    p: 'p-02'
			  },
			  {
			    bgUrl: '/assets/images/home/mock/3.jpg',
			    bgColor: '#fff6e5',
			    h2: 'h2-03',
			    p: 'p-03'
			  },
			  {
			    bgUrl: '/assets/images/home/mock/4.jpg',
			    bgColor: '#fbfde8',
			    h2: 'h2-04',
			    p: 'p-04'
			  }
			],

			cloudProducts: [
				{
					thumbnail: '',
					//TODO: the pics 
					title: '1.关系数据库',
					summary: '构建企业内部的关系数据库服务，可用于处理数据量在500GB以内的OLTP业务。支持复杂的SQL查询，提供高稳定、可扩展、强一致的数据处理服务。',
					button: {
						text: '查看详情',
						routerLink: ''//TODO: set the routerLinks
					},
					details: {
						title: '产品功能',
						list: [
							'高效处理复杂数据查询',
							'高可靠性保障',
							'高并发支持',
							'内置报表工具'
						]
					}
				},
				{
					thumbnail: '/assets/images/home/products-data-mart.png',
					//TODO: the pics 
					title: '2.数据集市',
					summary: '数据集市是面向部门级业务，特定的应用主题，用星型或者雪花模型组织构建数据。TDH-DM可以用于构建企业的数据集市，对接数据分析业务，提供包括交互式分析、Cube、报表、调度工具，实现自动化的报表应用构建。',
					button: {
						text: '查看详情',
						routerLink: ''//TODO: set the routerLinks
					},
					details: {
						title: '产品功能',
						list: [
							'面向业务的数据整合',
							'强大的SQL支持',
							'交互式OLAP分析',
							'高效的开发和运维工具'
						]
					}
				},
				{
					thumbnail: '/assets/images/home/products-info-retrieval.png',
					//TODO: the pics 
					title: '3.信息检索',
					summary: '提供PB级别的高速全文检索服务，实现毫秒级的响应速度，支持用SQL做内容检索，提供多种接口，高并发支持，字段精确和模糊检索以及快速统计功能。采用异地数据共享分布式存储，存储海量数据，为企业构建一站式内部搜索平台和信息检索服务。',
					button: {
						text: '查看详情',
						routerLink: ''//TODO: set the routerLinks
					},
					details: {
						title: '产品功能',
						list: [
							'全文搜索',
							'利用SQL做检索与分析',
							'混合存储',
							'标准化的服务接口'
						]
					}
				},
				{
					thumbnail: '',
					//TODO: the pics 
					title: '4.数据仓库',
					summary: '数据仓库是数据中心库，集中整合最新以及历史数据，按照不同主题组织信息，是打造商业智能的核心。TDH-DW可用于构建一站式数据仓库服务，提供包括分析数据库、数据整合、模型加工等重要功能，同时提供对于查询速度、并发度、扩展性的保障，是高效的数据掘金利器。',
					button: {
						text: '查看详情',
						routerLink: ''//TODO: set the routerLinks
					},
					details: {
						title: '产品功能',
						list: [
							'强大的SQL支持',
							'异构数据互通',
							'混合负载支持',
							'分布式事务保障',
							'非结构化数据处理'
						]
					}
				},
				{
					thumbnail: '',
					//TODO: the pics 
					title: '5.深度学习',
					summary: '深度学习产品TDH-DL是用于深度学习和人工智能开发的数据处理平台，帮助企业开发深度学习和AI应用，实现高度智能化的信息处理，将某些投入简单重复劳动中的人力解放出来，协助与增进企业运作管理。',
					button: {
						text: '查看详情',
						routerLink: ''//TODO: set the routerLinks
					},
					details: {
						title: '产品功能',
						list: [
							'可视化的模型创建',
							'多种语言接口',
							'整合多种深度学习框架',
							'丰富的操作和算法支持',
							'文本挖掘',
							'定制行业模板'
						]
					}
				},
				{
					thumbnail: '/assets/images/home/products-realtime-computing.png',
					//TODO: the pics 
					title: '6.实时计算',
					summary: '云上的流处理分析平台，可对流数据进行实时采集和实时处理。帮助企业构建实时数据仓库，开发如传感器数据分析，异常状态检测，风险分析，在线反欺诈等多种在线实时应用，实现对流式信息的充分利用。',
					button: {
						text: '查看详情',
						routerLink: ''//TODO: set the routerLinks
					},
					details: {
						title: '产品功能',
						list: [
							'将SQL用于流式应用开发',
							'微批处理+事件驱动',
							'Exactly Once语义支持',
							'复杂事件处理（CEP）',
							'数据持久化',
							'流上数据挖掘'
						]
					}
				}/*,
				{
					thumbnail: '/assets/images/home/products-data-mart.png',
					//TODO: the pics 
					title: '数据分析与挖掘',
					summary: '数据分析平台为数据科学家提供了数据清洗、特征工程、建模平台以及工具集，用于构建数据分析、数据挖掘业务。共提供了60余种分布式机器学习算法和多种行业模型，方便从数据中发现蕴含价值，探索对象属性和行为之间的关系，将数据有效转换为助于企业运营的价值信息。',
					button: {
						text: '查看详情',
						routerLink: ''//TODO: set the routerLinks
					},
					details: {
						title: '产品功能',
						list: [
							'多种语言接口',
							'60余种算法',
							'全行业模型库',
							'高效的开发工具'
						]
					}
				}*/
			],

			latestNews: [
				{
					id: 11,
					routerLink: '',
					routerLinkActive: '',
					image: '/assets/images/home/news-0.jpg',
					title: 'Hadoop性能调优案例分享',
					tag: '【巨能聊】',
					date: '2017-09-23'
				},
				{
					id: 12,
					routerLink: '',
					routerLinkActive: '',
					image: '/assets/images/home/news-1.jpg',
					title: 'Hadoop性能调优案例分享',
					tag: '【巨能聊】',
					date: '2017-09-23'
				},
				{
					id: 13,
					routerLink: '',
					routerLinkActive: '',
					image: '/assets/images/home/news-2.jpg',
					title: 'Hadoop性能调优案例分享',
					tag: '【巨能聊】',
					date: '2017-09-23'
				}
			]
		}
  }

}
