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
			]
		}
  }

}
