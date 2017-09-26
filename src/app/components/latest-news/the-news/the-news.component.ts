import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { News, LatestNewsService } from '../latest-news.service';

@Component({
  selector: 'tdc-the-news',
  templateUrl: './the-news.component.html',
  styleUrls: ['./the-news.component.sass']
})
export class TheNewsComponent implements OnInit {

	private news: News;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: LatestNewsService
  ) { }

  ngOnInit() {
  	this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.service.getTheNews(params.get('id')))
      		.subscribe((news: News) => this.news = news);
  }

}
