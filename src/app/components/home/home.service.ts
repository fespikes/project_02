import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { News, utils } from '../latest-news/latest-news.service';

@Injectable()
export class HomeService {
  private version = '/news';
  private apiUrl = `${this.version}/api/v1/news?page_num=1`;  //TODO: get the URL of web api

  constructor(private http: Http) { }

  getData(params) {
		return {
			advList: [
			  {
			    bgUrl: '/assets/images/home/banners/banner1.jpg',
			    bgColor: '#090e14',
			    h2: '云上大数据服务',
			    p: '我们专注于为企业提供以客户为中心的全流程产品，帮助企业获得成功'
			  },
			  {
			    bgUrl: '/assets/images/home/banners/banner2.jpg',
			    bgColor: '#09629a',
			    h2: '丰富的大数据解决方案',
			    p: '提供数据仓库、数据集市、机器学习、信息检索等多种解决方案，全面覆盖各种场景的数据处理需求'
			  },
			  {
			    bgUrl: '/assets/images/home/banners/banner3.jpg',
			    bgColor: '#051a36',
			    h2: '优质的数据服务',
			    p: '服务安全、稳定、可扩展，打造权限管控系统，租户网络隔离精细化，历经500+企业的数据平台实践打磨，随开随用，20分钟内即可开始大数据开发'
			  },
			  {
			    bgUrl: '/assets/images/home/banners/banner4.jpg',
			    bgColor: '#0b1b3f',
			    h2: '专业的技术支持',
			    p: '提供架构师对接、大数据培训、远程支持、运维辅助等多种类型服务，保证高品质的售后支持'
			  }
			],

			cloudProducts: {
				sliceClass: 'ul-products',
				config: {
					itemWidth: 400,
					defaultLength: 3,
					gap: 0,
					targetClassName: 'direct-child',
					hoverClassName: 'current',
					wrapperClassName: 'h600'
				},
				items: [
					{
						thumbnail: {
							src: '/assets/images/svg/home/products/' + 'relational-database' + '.svg',
						},
						title: '关系数据库',
						summary: '构建企业关系型数据库，处理数据量在500GB以内的OLTP业务。支持复杂SQL查询，提供高稳定、可扩展、强一致保证。',
						button: {
							text: '查看详情',
							class: 'blue-button',
							routerLink: '/products/relational-database'//TODO: set the routerLinks
						},
						liClass: 'direct-child',	//?
						h4Class: '',	//?
						pClass: 'desc',	//?
						divClass: 'shadow-box',	//has a div for wrap
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
						thumbnail: {
							src: '/assets/images/svg/home/products/' + 'data-mart' + '.svg',
						},
						title: '数据集市',
						summary: '数据集市面向部门级业务，提供各种模型用以组织数据，实现交互式分析以及自动化的报表应用构建。',
						button: {
							text: '查看详情',
							class: 'blue-button',
							routerLink: '/products/data-mart'//TODO: set the routerLinks
						},
						liClass: 'direct-child',	//?
						h4Class: '',	//?
						pClass: 'desc',	//?
						divClass: 'shadow-box',	//has a div for wrap
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
						thumbnail: {
							src: '/assets/images/svg/home/products/' + 'info-retrieval' + '.svg',
						},
						title: '信息检索',
						summary: 'PB级别的高速全文检索服务，提供高并发支持，以及字段精确、模糊检索和快速统计功能，支持用SQL做内容检索。',
						button: {
							text: '查看详情',
							class: 'blue-button',
							routerLink: '/products/info-retrieval'//TODO: set the routerLinks
						},
						liClass: 'direct-child',	//?
						h4Class: '',	//?
						pClass: 'desc',	//?
						divClass: 'shadow-box',	//has a div for wrap
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
						thumbnail: {
							src: '/assets/images/svg/home/products/' + 'data-warehouse' + '.svg'
						},
						title: '数据仓库',
						summary: '数据仓库是数据中心库，全面整合各类数据，按照主题组织信息，是打造商业智能的核心。',
						button: {
							text: '查看详情',
							class: 'blue-button',
							routerLink: '/products/data-warehouse'//TODO: set the routerLinks
						},
						liClass: 'direct-child',	//?
						h4Class: '',	//?
						pClass: 'desc',	//?
						divClass: 'shadow-box',	//has a div for wrap
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
						thumbnail: {
							src: '/assets/images/svg/home/products/' + 'deep-learning' + '.svg'
						},
						title: '深度学习',
						summary: '深度学习和人工智能开发平台，实现高度智能化的信息处理，协助与增进企业的运作管理。',
						button: {
							text: '查看详情',
							class: 'blue-button',
							routerLink: '/products/deep-learning'//TODO: set the routerLinks
						},
						liClass: 'direct-child',	//?
						h4Class: '',	//?
						pClass: 'desc',	//?
						divClass: 'shadow-box',	//has a div for wrap
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
						thumbnail: {
							src: '/assets/images/svg/home/products/' + 'realtime-computation' + '.svg'
						},
						title: '实时计算',
						summary: '云上的流处理分析平台，对流数据进行实时采集和实时处理，帮助企业构建在线实时应用，充分利用流式信息。',
						liClass: 'direct-child',	//?
						h4Class: '',	//?
						pClass: 'desc',	//?
						divClass: 'shadow-box',	//has a div for wrap
						button: {
							text: '查看详情',
							class: 'blue-button',
							routerLink: '/products/realtime-computation'//TODO: set the routerLinks
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
					},
					{
						thumbnail: {
							src: '/assets/images/svg/home/products/' + 'analysis-mining' + '.svg'
						},
						title: '数据分析与挖掘',
						summary: '数据分析平台为数据科学家提供了丰富的数据挖掘功能，内置60余种分布式机器学习算法和行业模型，实现数据到价值信息的转换。',
						liClass: 'direct-child',	//?
						h4Class: '',	//?
						pClass: 'desc',	//?
						divClass: 'shadow-box',	//has a div for wrap
						button: {
							text: '查看详情',
							class: 'blue-button',
							routerLink: '/products/analysis-mining'//TODO: set the routerLinks
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
					}
				]
			},

			hotModules: {
				sliceClass: 'bar-modules-ul',
				config: {
					itemWidth: 200,
					defaultLength: 6,
					gap: 0,
					targetClassName: 'shadow-box',
					hoverClassName: 'current',
					wrapperClassName: 'h220'
				},
				items: [
					{
						anchor: '',
						thumbnail: {
							// src: '/assets/images/home/hot-modules/',
							name: 'component-inceptor'
						},
						name: 'Inceptor',
						title: '分析型数据库',
						summary: 'Inceptor是一款用于批量处理及分析的数据库，Inceptor被广泛地应用于数据仓库和 数据集市的构建。',
						adv: '/assets/images/home/hot-modules/inceptor.png', //image url

						liClass: 'direct-child',	//?
						h4Class: '',	//?
						pClass: 'desc',	//?
						divClass: 'shadow-box',	//has a div for wrap

						scenarios: [
							'逻辑型数据仓库;',
							'交互型BI分析;',
							'离线批处理;',
							'数据质量管理。'
						]
					},
					{
						anchor: '',
						thumbnail: {
							name: 'component-hyperbase'
						},
						name: 'Hyperbase',
						title: '快速检索和非结构化数据处理',
						summary: 'Hyperbase是以Apache HBase为基础，融合了多项创新技术的NoSQL数据库。',
						adv: '/assets/images/home/hot-modules/hyperbase.png', //image url
						scenarios: [
							'高并发的查询业务;',
							'非结构化数据的存储和检索;',
							'高速数据入库。'
						]
					},
					{
						anchor: '',
						thumbnail: {
							name: 'component-slipstream'
						},
						name: 'Slipstream',
						title: '实时计算引擎',
						summary: 'Slipstream是提供实时计算的产品，被广泛用于交通运输和物联网行业。',
						adv: '/assets/images/home/hot-modules/slipstream.png', //image url
						scenarios: [
							'在线风险预测;',
							'loT实时监控、告警、预测;',
							'交通流量实时采集与分析。'
						]
					},
					{
						anchor: '',
						thumbnail: {
							name: 'component-search'
						},
						name: 'Search',
						title: '全文检索',
						summary: 'Search用于在企业内部构建大数据搜索引擎。',
						adv: '/assets/images/home/hot-modules/search.png', //image url
						scenarios: [
							'大规模搜索引擎;',
							'海量数据的聚合分析。'
						]
					},
					{
						anchor: '',
						thumbnail: {
							name: 'component-discover'
						},
						name: 'Discover',
						title: '数据挖掘',
						summary: 'Discover是分布式机器学习平台，它包含了丰富的分布式算法库，内置了多个行业应用模块，提供多类接口，以帮助数据工程师和科学家开发自己的数据挖掘算法。',
						adv: '/assets/images/home/hot-modules/discover.png', //image url
						scenarios: [
							'刻画用户画像，进行智能推荐，实现精准营销;',
							'用户流失预警;',
							'金融风险控制和欺诈检测。'
						]
					},
					{
						anchor: '',
						thumbnail: {
							name: 'component-sophon'
						},
						name: 'Sophon',
						title: '深度学习和交互式数据挖掘',
						summary: 'Sophon是整合了Tensorflow和MxNet的深度学习框架，并且与Hadoop实现了很好的融合。',
						adv: '/assets/images/home/hot-modules/sophon.png', //image url
						scenarios: [
							'大规模搜索引擎;',
							'海量数据的聚合分析。'
						]
					}/*,
					{
						anchor: '',
						thumbnail: {
							name: 'component-sophon'
						},
						name: 'test',
						title: 'testTitle',
						summary: 'testSummary',
						adv: '', //image url
						scenarios: [
							'大规模搜索引擎;',
							'海量数据的聚合分析。'
						]
					}*/

				]
			},

			businessScenarios: {
				sliceClass: 'scenarios',
				config: {
					itemWidth: 400,
					gap: 0,
					targetClassName: '',
					wrapperClassName: 'h600',
					defaultLength: 3
				},
				items: [
					{
						title: '数据仓库',
						thumbnail: {
							src: '/assets/images/home/scenarios/data-warehouse.jpg',
							style: {
								// width: '',
								// height: '',
								bgColor: ''
							}
						},
						summary: '一站式数据仓库服务解决方案，实现数据采集、数据整合、模型加工、数据管理等完备的一体化数仓功能，支持对于查询速度、并发度、扩展性的保障。可广泛应用于电信、金融、互联网等行业。',
						//for cloud products dom boxShadow
						// divClass: '',	//has a div for wrap

						liClass: '',	//?
						h4Class: '',	//?
						pClass: '',	//?
						button: {
							class: '',//?
							text: '查看详情',
							routerLink: '/business-scenario/data-warehouse'
						}
					},

					{
						title: '实时计算',
						thumbnail: {
							src: '/assets/images/home/scenarios/realtime-computation.jpg',
							style: {
								// width: '',
								// height: '',
								bgColor: ''
							}
						},
						summary: '云上的流处理分析平台，可对流数据进行实时采集和实时处理。为企业构建实时数据仓库，开发多种在线实时应用，实现对流式信息的充分利用。可以被广泛用于交通运输和物联网行业。',
						liClass: '',	//?
						h4Class: '',	//?
						pClass: '',	//?
						button: {
							class: '',//?
							text: '查看详情',
							routerLink: '/business-scenario/realtime-computation'
						}
					},
					{
						title: '信息检索',
						thumbnail: {
							src: '/assets/images/home/scenarios/info-retrieval.jpg',
							style: {
								// width: '',
								// height: '',
								bgColor: ''
							}
						},
						summary: '用信息检索产品打造企业级搜索引擎，以毫秒级的响应速度完成PB级别的高速全文检索。构建一站式内部搜索平台和信息检索服务，打造便捷高效的集中式金融监管中心。',
						//for cloud products dom boxShadow
						// divClass: '',	//has a div for wrap

						liClass: '',	//?
						h4Class: '',	//?
						pClass: '',	//?
						button: {
							class: '',//?
							text: '查看详情',
							routerLink: '/business-scenario/info-retrieval'
						}
					},
					{
						title: '数据集市',
						thumbnail: {
							src: '/assets/images/home/scenarios/data-mart.jpg',
							style: {
								// width: '',
								// height: '',
								bgColor: ''
							}
						},
						summary: '实现数据集市构建，对接数据分析业务，提供包括交互式分析、数据立方体、任务调度在内的工具以及功能，实现自动化的报表应用构建和自助式的多维度探索。可应用于客户分析、营销分析等维度分析场景。',
						//for cloud products dom boxShadow
						// divClass: '',	//has a div for wrap

						liClass: '',	//?
						h4Class: '',	//?
						pClass: '',	//?
						button: {
							class: '',//?
							text: '查看详情',
							routerLink: '/business-scenario/data-mart'
						}
					},
					{
						title: '数据分析与挖掘',
						thumbnail: {
							src: '/assets/images/home/scenarios/analysis-mining.jpg',
							style: {
								// width: '',
								// height: '',
								bgColor: ''
							}
						},
						summary: '提供数据清洗、特征工程、建模平台和工具集，丰富的机器学习算法和多种行业模型，方便探索对象属性和行为之间的关系，从数据中发现蕴含价值。',
						//for cloud products dom boxShadow
						// divClass: '',	//has a div for wrap

						liClass: '',	//?
						h4Class: '',	//?
						pClass: '',	//?
						button: {
							class: '',//?
							text: '查看详情',
							routerLink: '/business-scenario/analysis-mining'
						}
					},
					{//TODO: change the thumbnails
						title: '深度学习',
						thumbnail: {
							src: '/assets/images/home/scenarios/deep-learning.jpg',
							style: {
								// width: '',
								// height: '',
								bgColor: ''
							}
						},
						summary: '开发深度学习和人工智能平台，将图像识别技术投入交通监控应用，帮助交通部门实现高度智能化的交通监控与信息处理，把投入车辆识别的人力解放出来，提高交通监管的精准度与效率。',
						//for cloud products dom boxShadow
						// divClass: '',	//has a div for wrap

						liClass: '',	//?
						h4Class: '',	//?
						pClass: '',	//?
						button: {
							class: '',//?
							text: '查看详情',
							routerLink: '/business-scenario/deep-learning'
						}
					},
					{
						title: '关系数据库',
						//thumbnail.width?li has bg
						thumbnail: {
							src: '/assets/images/home/scenarios/relational-database.jpg',
							style: {
								// width: '',
								// height: '',
								bgColor: ''
							}
						},
						summary: '构建企业内部关系数据库服务，处理OLTP业务。支持复杂的SQL查询，提供高稳定、可扩展、强一致的数据处理。可以应用于创建跨越省市、跨多层下级机关的联网警务OA系统。',
						//for cloud products dom boxShadow
						// divClass: '',	//has a div for wrap

						liClass: '',	//?
						h4Class: '',	//?
						pClass: '',	//?
						button: {
							class: '',//?
							text: '查看详情',
							routerLink: '/business-scenario/relational-database'
						},
/*						details: {
							title: '产品功能',
							list: [
								'多种语言接口',
								'60余种算法',
								'全行业模型库',
								'高效的开发工具'
							]
						}*/
					},
/*					{
						title: '其他案例',
						thumbnail: {
							src: '/assets/images/home/scenario-1.jpg',
							style: {
								// width: '',
								// height: '',
								bgColor: ''
							}
						},
						summary: 'text placeholdertext placeholdertext placeholdertext placeholdertext placeholder',
						//for cloud products dom boxShadow
						// divClass: '',	//has a div for wrap

						liClass: '',	//?
						h4Class: '',	//?
						pClass: '',	//?
						button: {
							class: '',//?
							text: '查看详情',
							routerLink: '/ffffff/nnnn'//
						}
					}*/
				]
			},

/*			latestNews: [
				{
					id: 4,
					routerLink: '',
					routerLinkActive: '',
					//the key was defined by BE:Huwei
					icon: '/assets/images/home/news-0.jpg',
					title: 'Hadoop性能调优案例分享',
					tag: '【巨能聊】',
					date: '2017-09-23'
				},
				{
					id: 5,
					routerLink: '',
					routerLinkActive: '',
					icon: '/assets/images/home/news-1.jpg',
					title: 'Hadoop性能调优案例分享',
					tag: '【巨能聊】',
					date: '2017-09-23'
				},
				{
					id: 6,
					routerLink: '',
					routerLinkActive: '',
					icon: '/assets/images/home/news-2.jpg',
					title: 'Hadoop性能调优案例分享',
					tag: '【巨能聊】',
					date: '2017-09-23'
				}
			]*/

			videoTutorial: {
				sliceClass: 'videos',
				config: {
					itemWidth: 400,
					targetClassName: 'shadow-box',
					hoverClassName: 'current',
					wrapperClassName: 'h600',
					defaultLength: 3
				},
				items: [
					{
						thumbnail: {
							src: '/assets/images/home/tutorial-videos/Inceptor1.jpg',
							href: 'http://v.qq.com/x/page/t0507jc08pw.html'
						},
						name: 'Inceptor',
						title: '1.分析型数据库',
						summary: 'Inceptor是一款用于批量处理及分析的数据库，Inceptor被广泛地应用于数据仓库和 数据集市的构建。',
						h5Class: '',	//?
						pClass: 'desc',	//?
						divClass: 'shadow-box'	//has a div for wrap
					},
					{
						thumbnail: {
							src: '/assets/images/home/tutorial-videos/workflow.jpg',
							href: 'http://v.qq.com/x/page/a0507bao7c8.html'
						},
						name: 'Inceptor',
						title: '2.workflowTitle',
						summary: 'workflow是一款用于批量处理及分析的数据库，Inceptor被广泛地应用于数据仓库和 数据集市的构建。',
						h5Class: '',	//?
						pClass: 'desc',	//?
						divClass: 'shadow-box'	//has a div for wrap
					},
					{
						thumbnail: {
							src: '/assets/images/home/tutorial-videos/Inceptor2.jpg',
							href: 'http://v.qq.com/x/page/e0507nmt9qg.html'
						},
						name: 'Inceptor',
						title: '3.分析型数据库',
						summary: 'Inceptor是一款用于批量处理及分析的数据库，Inceptor被广泛地应用于数据仓库和 数据集市的构建。',
						h5Class: '',	//?
						pClass: 'desc',	//?
						divClass: 'shadow-box'	//has a div for wrap
					},
					{
						thumbnail: {
							src: '/assets/images/home/tutorial-videos/workflow.jpg',
							href: 'http://v.qq.com/x/page/y0507qw8cg9.html'
						},
						name: 'Inceptor',
						title: '4.分析型数据库',
						summary: 'Inceptor是一款用于批量处理及分析的数据库，Inceptor被广泛地应用于数据仓库和 数据集市的构建。',
						h5Class: '',	//?
						pClass: 'desc',	//?
						divClass: 'shadow-box'	//has a div for wrap
					},
					{
						thumbnail: {
							src: '/assets/images/home/tutorial-videos/workflow.jpg',
							href: 'http://v.qq.com/x/page/s0507hqw4vt.html'
						},
						name: 'Inceptor',
						title: '5.workflowTitle',
						summary: 'workflow是一款用于批量处理及分析的数据库，Inceptor被广泛地应用于数据仓库和 数据集市的构建。',
						h5Class: '',	//?
						pClass: 'desc',	//?
						divClass: 'shadow-box'	//has a div for wrap
					},
					{
						thumbnail: {
							src: '/assets/images/home/tutorial-videos/Inceptor2.jpg',
							href: 'http://v.qq.com/x/page/s0507hqw4vt.html'
						},
						name: 'Inceptor',
						title: '6.分析型数据库',
						summary: 'Inceptor是一款用于批量处理及分析的数据库，Inceptor被广泛地应用于数据仓库和 数据集市的构建。',
						h5Class: '',	//?
						pClass: 'desc',	//?
						divClass: 'shadow-box'	//has a div for wrap
					},
					{
						thumbnail: {
							src: '/assets/images/home/tutorial-videos/workflow.jpg',
							href: 'http://v.qq.com/x/page/s0507hqw4vt.html'
						},
						name: 'Inceptor',
						title: '7.分析型数据库',
						summary: 'Inceptor是一款用于批量处理及分析的数据库，Inceptor被广泛地应用于数据仓库和 数据集市的构建。',
						h5Class: '',	//?
						pClass: 'desc',	//?
						divClass: 'shadow-box'	//has a div for wrap
					},
				]
			}
		}
  }

  getLatestNews(): Promise<News[]> {
    let list: News[] = [];
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(response => {
        response.json().list.forEach(item=>list.push((item.date = utils.formatDate(item.lastUpdateTime)) && item))

        return Promise.resolve(list);
      })

  }

}
