import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

export class News {
  constructor(
  	public id: number, 
  	public title: string,
  	public date: string,
  	public content: [any],
    public summary: string,

/*    public routerLink: '',
    routerLinkActive: '',
    image: '/assets/images/home/news-0.jpg',
    tag: '【巨能聊】',*/
	) { }
}

let utils = {
  formatDate: (d) => {
    d = d?new Date(d): new Date();
    return d.getFullYear() + '-' + d.getDate() + '-' + d.getMonth();
  }
};

let newsList = [
  new News(
  	11,
  	'星环的划时代版本 - Transwarp Data Hub 5.0',
  	'2017-07-11',
  	[
      {p: '星环科技历时10个月打造的新一代一站式Hadoop发行版——TDH 5.0正式发布。TDH 5.0包含了6大产品， 15个功能组件，共实现3000多个功能、改进以及Bug修复。到目前为止，TDH 5.0是星环最为革命性的一个版本，在可用性以及产品化程度方面，都达到了星环史无前例的高度。'},
  		{img: '/assets/images/latest-news/news-adv.jpg'},
  		{title: '核心产品从四个变为六个1'},
  		{
  			p: 'TDH 5.0包含六个核心产品，在原来四个产品（Inceptor、Hyperbase、Stream、Discover）的基础上新增了大规模搜索引擎Search和深度学习平台Sophon。此外，Stream带来了革命性的技术成果，并正式更名为Slipstream。'
  		},
  		{title: 'Transwarp Inceptor'},
  		{p: 'Inceptor是TDH产品中最复杂的，同时也是最重要的产品。它是一个独立的分析数据库，自上而下可以分为5层：服务层，编译层，执行引擎层，存储接口层，存储层。'},
  		{p: 'TDH 5.0中的Inceptor实现了对Teradata、Oracle和DB2数据库方言的全面支持，同时增加了全文检索的SQL扩展和StreamSQL的CEP扩展。'},
  		{p: 'Inceptor在编译层中新增了一款优化器——物化优化器。它可以基于物化的OLAP Cube或者视图来优化输入的SQL查询，根据对执行成本的计算，决定是否执行读取物化对象的存储计划。'},
  		{p: '另外，TDH 5.0在Inceptor执行引擎层中做了较大的功能创新，首次引入并发布调度器SLA Scheduler，以解决在混合负载的情况下重任务阻塞小任务的问题。它为不同任务指定不同的优先级，限定用户同时提交的任务数量，将系统任务和用户任务明确分割，以及通过更细粒度的资源调度等方式来提供更好的混合负载处理能力。'},
  		{p: 'TDH 5.0的列式存储引擎Holodesk在功能和性能方面都有非常大的提升，可以满足高并发交互式分析的需求'},
  		{
  			mailTo: '对此篇文章如有任何问题，欢迎以邮件形式联系我们：',
  			email: 'bigdataopenlab@transwarp.io'
  		}
  	],
    '星环科技历时10个月打造的新一代一站式Hadoop发行版——TDH 5.0正式发布'
  	),
  new News(
    12,
    '星环的划时代版本 - TDH 5.1',
    '2017-07-12',
    [
      {p: '星环科技历时10个月打造的新一代一站式Hadoop发行版——TDH 5.0正式发布。TDH 5.0包含了6大产品， 15个功能组件，共实现3000多个功能、改进以及Bug修复。到目前为止，TDH 5.0是星环最为革命性的一个版本，在可用性以及产品化程度方面，都达到了星环史无前例的高度。'},
      {img: '/assets/images/latest-news/news-adv.jpg'},
      {title: '核心产品从四个变为六个2'},
      {
        p: 'TDH 5.0包含六个核心产品，在原来四个产品（Inceptor、Hyperbase、Stream、Discover）的基础上新增了大规模搜索引擎Search和深度学习平台Sophon。此外，Stream带来了革命性的技术成果，并正式更名为Slipstream。'
      },
      {title: 'Transwarp Inceptor'},
      {p: 'Inceptor是TDH产品中最复杂的，同时也是最重要的产品。它是一个独立的分析数据库，自上而下可以分为5层：服务层，编译层，执行引擎层，存储接口层，存储层。'},
      {p: 'TDH 5.0中的Inceptor实现了对Teradata、Oracle和DB2数据库方言的全面支持，同时增加了全文检索的SQL扩展和StreamSQL的CEP扩展。'},
      {p: 'Inceptor在编译层中新增了一款优化器——物化优化器。它可以基于物化的OLAP Cube或者视图来优化输入的SQL查询，根据对执行成本的计算，决定是否执行读取物化对象的存储计划。'},
      {p: '另外，TDH 5.0在Inceptor执行引擎层中做了较大的功能创新，首次引入并发布调度器SLA Scheduler，以解决在混合负载的情况下重任务阻塞小任务的问题。它为不同任务指定不同的优先级，限定用户同时提交的任务数量，将系统任务和用户任务明确分割，以及通过更细粒度的资源调度等方式来提供更好的混合负载处理能力。'},
      {p: 'TDH 5.0的列式存储引擎Holodesk在功能和性能方面都有非常大的提升，可以满足高并发交互式分析的需求'},
      {
        mailTo: '对此篇文章如有任何问题，欢迎以邮件形式联系我们：',
        email: 'bigdataopenlab@transwarp.io'
      }
    ],
    '星环科技历时10个月打造的新一代一站式Hadoop发行版——TDH 5.0正式发布'
    ),
  new News(
    13,
    '星环的划时代版本 - TDH 5.2',
    '2017-07-13',
    [
      {p: '星环科技历时10个月打造的新一代一站式Hadoop发行版——TDH 5.0正式发布。TDH 5.0包含了6大产品， 15个功能组件，共实现3000多个功能、改进以及Bug修复。到目前为止，TDH 5.0是星环最为革命性的一个版本，在可用性以及产品化程度方面，都达到了星环史无前例的高度。'},
      {img: '/assets/images/latest-news/news-adv.jpg'},
      {title: '核心产品从四个变为六个3'},
      {
        p: 'TDH 5.0包含六个核心产品，在原来四个产品（Inceptor、Hyperbase、Stream、Discover）的基础上新增了大规模搜索引擎Search和深度学习平台Sophon。此外，Stream带来了革命性的技术成果，并正式更名为Slipstream。'
      },
      {title: 'Transwarp Inceptor'},
      {p: 'Inceptor是TDH产品中最复杂的，同时也是最重要的产品。它是一个独立的分析数据库，自上而下可以分为5层：服务层，编译层，执行引擎层，存储接口层，存储层。'},
      {p: 'TDH 5.0中的Inceptor实现了对Teradata、Oracle和DB2数据库方言的全面支持，同时增加了全文检索的SQL扩展和StreamSQL的CEP扩展。'},
      {p: 'Inceptor在编译层中新增了一款优化器——物化优化器。它可以基于物化的OLAP Cube或者视图来优化输入的SQL查询，根据对执行成本的计算，决定是否执行读取物化对象的存储计划。'},
      {p: '另外，TDH 5.0在Inceptor执行引擎层中做了较大的功能创新，首次引入并发布调度器SLA Scheduler，以解决在混合负载的情况下重任务阻塞小任务的问题。它为不同任务指定不同的优先级，限定用户同时提交的任务数量，将系统任务和用户任务明确分割，以及通过更细粒度的资源调度等方式来提供更好的混合负载处理能力。'},
      {p: 'TDH 5.0的列式存储引擎Holodesk在功能和性能方面都有非常大的提升，可以满足高并发交互式分析的需求'},
      {
        mailTo: '对此篇文章如有任何问题，欢迎以邮件形式联系我们：',
        email: 'bigdataopenlab@transwarp.io'
      }
    ],
    '星环科技历时10个月打造的新一代一站式Hadoop发行版——TDH 5.0正式发布'
    ),
];

let newsListPromise = Promise.resolve(newsList);
@Injectable()
export class LatestNewsService {

  private apiUrl = 'api/v1/news?page_num=1';  //TODO: get the URL of web api
  //http://172.16.1.193:23333/api/v1/news?page_num=1

  constructor(private http: Http) { }

  getNewsList(): Promise<News[]>{
    let list: News[]=[];
  	// return newsListPromise;
    return this.http.get(this.apiUrl)
     .toPromise()
     .then(response => {
       response.json().list.forEach(item=>list.push(item))
       console.log(list);
       return list //as News[]
     })
     .catch(this.handleError);
  }

  getTheNews(id: number | string) {
  	return newsListPromise.then(
  		newsList => newsList.find(
  			//TODO: get api of get the correct news
  			News => News.id === +id
  		)
  	);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
