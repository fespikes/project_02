import { Component, OnInit, ElementRef, AfterViewChecked } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { News, LatestNewsService } from '../latest-news.service';
var style = require('./the-news.css');

@Component({
  selector: 'tdc-the-news',
  templateUrl: './the-news.component.html',
  styleUrls: ['./the-news.component.sass']
})
export class TheNewsComponent implements OnInit, AfterViewChecked {

	private news: News;

  private style;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: LatestNewsService,
    private el:ElementRef
  ) { }

  ngOnInit() {
    this.style = style;

    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.service.getTheNews(params.get('id')))
          .subscribe((news: News) => this.news = news );
  }

  ngAfterViewChecked() {
    let outerHtml = '';
    let timeNode = document.querySelector('.time');
    let theNewsStyle = document.querySelector('.the-news-style');
    !theNewsStyle && timeNode && (timeNode.outerHTML += `<style class="the-news-style">`+style+`</style>`);
  }

}
