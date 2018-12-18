import { Component, OnInit, Input } from '@angular/core';

let breadCrumbs: any;


/**
when using bread-crumbs super class in two modules,the issues as below:
1. need to import the super class to app level, then in the scenario component, can not load the selector. that's the problem need to fix.
2. when lazy loading, the child router can not be displaied;
so here I use the inheritances
*/
@Component({
  selector: 'tdc-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  // styleUrls: ['./bread-crumbs.component.sass']
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
    href: 'http://www.baidu.com/'  // TODO: the link href
  },
  {
  text: '写道行2',
  href: 'http://www.baidu.com/'
  }
];
