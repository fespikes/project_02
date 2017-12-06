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
						src: '/assets/images/home/tutorial-videos/Inceptor1.jpg',
						href: 'http://v.qq.com/x/page/t0507jc08pw.html'
					},
					routerLink: '/video-tutorial/inceptor01',
					name: 'Inceptor',
					title: '1.分析型数据库',
					summary: 'Inceptor是一款用于批量处理及分析的数据库，Inceptor被广泛地应用于数据仓库和数据集市的构建。',
					h5Class: 'video-title',	//?
					pClass: 'description',	//?
					divClass: 'shadow-box'	//has a div for wrap
				},
				{
					thumbnail: {
						src: '/assets/images/home/tutorial-videos/workflow.jpg',
						href: 'http://v.qq.com/x/page/a0507bao7c8.html'
					},
					routerLink: '/video-tutorial/inceptor02',
					name: 'Inceptor',
					title: '2.workflowTitle',
					summary: 'workflow是一款用于批量处理及分析的数据库，Inceptor被广泛地应用于数据仓库和 数据集市的构建。',
					h5Class: 'video-title',	//?
					pClass: 'description',	//?
					divClass: 'shadow-box'	//has a div for wrap
				},
				{
					thumbnail: {
						src: '/assets/images/home/tutorial-videos/Inceptor2.jpg',
						href: 'http://v.qq.com/x/page/e0507nmt9qg.html'
					},
					routerLink: '/video-tutorial/inceptor02',
					name: 'Inceptor',
					title: '3.分析型数据库',
					summary: 'Inceptor是一款用于批量处理及分析的数据库，Inceptor被广泛地应用于数据仓库和 数据集市的构建。',
					h5Class: 'video-title',	//?
					pClass: 'description',	//?
					divClass: 'shadow-box'	//has a div for wrap
				},
				{
					thumbnail: {
						src: '/assets/images/home/tutorial-videos/workflow.jpg',
						href: 'http://v.qq.com/x/page/y0507qw8cg9.html'
					},
					routerLink: '/video-tutorial/inceptor02',
					name: 'Inceptor',
					title: '4.分析型数据库',
					summary: 'Inceptor是一款用于批量处理及分析的数据库，Inceptor被广泛地应用于数据仓库和 数据集市的构建。',
					h5Class: 'video-title',	//?
					pClass: 'description',	//?
					divClass: 'shadow-box'	//has a div for wrap
				},
				{
					thumbnail: {
						src: '/assets/images/home/tutorial-videos/workflow.jpg',
						href: 'http://v.qq.com/x/page/s0507hqw4vt.html'
					},
					routerLink: '/video-tutorial/inceptor02',
					name: 'Inceptor',
					title: '5.workflowTitle',
					summary: 'workflow是一款用于批量处理及分析的数据库，Inceptor被广泛地应用于数据仓库和 数据集市的构建。',
					h5Class: 'video-title',	//?
					pClass: 'description',	//?
					divClass: 'shadow-box'	//has a div for wrap
				},
				{
					thumbnail: {
						src: '/assets/images/home/tutorial-videos/Inceptor2.jpg',
						href: 'http://v.qq.com/x/page/s0507hqw4vt.html'
					},
					routerLink: '/video-tutorial/inceptor02',
					name: 'Inceptor',
					title: '6.分析型数据库',
					summary: 'Inceptor是一款用于批量处理及分析的数据库，Inceptor被广泛地应用于数据仓库和 数据集市的构建。',
					h5Class: 'video-title',	//?
					pClass: 'description',	//?
					divClass: 'shadow-box'	//has a div for wrap
				},
				{
					thumbnail: {
						src: '/assets/images/home/tutorial-videos/workflow.jpg',
						href: 'http://v.qq.com/x/page/s0507hqw4vt.html'
					},
					routerLink: '/video-tutorial/inceptor02',
					name: 'Inceptor',
					title: '7.分析型数据库',
					summary: 'Inceptor是一款用于批量处理及分析的数据库，Inceptor被广泛地应用于数据仓库和 数据集市的构建。',
					h5Class: 'video-title',	//?
					pClass: 'description',	//?
					divClass: 'shadow-box'	//has a div for wrap
				},
			]
		};
		return videoTutorial;
  }

}
