import { Component, OnInit, Input } from '@angular/core';

let breadCrumbs: any;

@Component({
  selector: 'tui-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.sass']
})
export class BreadCrumbsComponent implements OnInit {

	@Input()
	data: any;

  constructor() {
  	// this.data = breadCrumbs;
  }

  ngOnInit() {

  }

}


breadCrumbs = [
	{
		text: '写道行1',
		href: 'http://www.baidu.com/'	//TODO: the link href 
	},
	{
		text: '写道行2',
		href: 'http://www.baidu.com/'
	}
];
