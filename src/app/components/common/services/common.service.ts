import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

  constructor() {
  	
  }

  getVideoTutorial() {

  	let videoTutorial = {
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
						src: '/assets/images/svg/home/video-tutorial/admin.svg',
						href: 'http://v.qq.com/x/page/t0507jc08pw.html'//TODO:
					},
					routerLink: '/video-tutorial/inceptor01',//TODO
					name: 'Inceptor',
					title: '管理中心教程',
					summary: '管理中心四大模块操作演示，快速了解功能与实现方式',
					h5Class: 'video-title',	//?
					pClass: 'description',	//?
					divClass: 'shadow-box'	//has a div for wrap
				},
				{
					thumbnail: {
						src: '/assets/images/svg/home/video-tutorial/products.svg',
						href: 'http://v.qq.com/x/page/a0507bao7c8.html'
					},
					routerLink: '/video-tutorial/inceptor02',
					name: 'Inceptor',
					title: '云产品开发演示',
					summary: '如何快速构建云产品，进行功能组合，实现数据开发',
					h5Class: 'video-title',	//?
					pClass: 'description',	//?
					divClass: 'shadow-box'	//has a div for wrap
				},
				{
					thumbnail: {
						src: '/assets/images/svg/home/video-tutorial/pilot.svg',
						href: 'http://v.qq.com/x/page/e0507nmt9qg.html'
					},
					routerLink: '/video-tutorial/inceptor02',
					name: 'Inceptor',
					title: '报表设计Pilot',
					summary: '利用Pilot以自助的方式实现华丽炫酷的报表定制',
					h5Class: 'video-title',	//?
					pClass: 'description',	//?
					divClass: 'shadow-box'	//has a div for wrap
				},
				{
					thumbnail: {
						src: '/assets/images/svg/home/video-tutorial/workflow.svg',
						href: 'http://v.qq.com/x/page/y0507qw8cg9.html'
					},
					routerLink: '/video-tutorial/inceptor02',
					name: 'Inceptor',
					title: '工作流调度Workflow',
					summary: '使用Workflow在集群内实现自动化的工作流调度',
					h5Class: 'video-title',	//?
					pClass: 'description',	//?
					divClass: 'shadow-box'	//has a div for wrap
				},
				{
					thumbnail: {
						src: '/assets/images/svg/home/video-tutorial/transporter.svg',
						href: 'http://v.qq.com/x/page/s0507hqw4vt.html'
					},
					routerLink: '/video-tutorial/inceptor02',
					name: 'Inceptor',
					title: 'ETL工具Transporter',
					summary: '通过Transporter实现多种数据源之间的数据处理与传导',
					h5Class: 'video-title',	//?
					pClass: 'description',	//?
					divClass: 'shadow-box'	//has a div for wrap
				},
				{
					thumbnail: {
						src: '/assets/images/svg/home/video-tutorial/governor.svg',
						href: 'http://v.qq.com/x/page/s0507hqw4vt.html'
					},
					routerLink: '/video-tutorial/inceptor02',
					name: 'Inceptor',
					title: '数据治理Governor',
					summary: '利用元数据监控管理平台Governor把控数据质量',
					h5Class: 'video-title',	//?
					pClass: 'description',	//?
					divClass: 'shadow-box'	//has a div for wrap
				},
				{
					thumbnail: {
						src: '/assets/images/svg/home/video-tutorial/rubik.svg',
						href: 'http://v.qq.com/x/page/s0507hqw4vt.html'
					},
					routerLink: '/video-tutorial/inceptor02',
					name: 'Inceptor',
					title: 'OLAP Cube设计Rubik',
					summary: '通过Rubik实现数据立方体设计加速多维交互式分析',
					h5Class: 'video-title',	//?
					pClass: 'description',	//?
					divClass: 'shadow-box'	//has a div for wrap
				},
			]
		};
		return videoTutorial;
  }

}
