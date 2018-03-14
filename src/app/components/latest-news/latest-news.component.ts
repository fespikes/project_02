import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { News, LatestNewsService } from './latest-news.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'tdc-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.sass']
})
export class LatestNewsComponent implements OnInit, DoCheck {

  newsList: Promise<News[]>;

  breadCrumbs: any;

  selectedId: number;

  news: News;

  constructor(
    private service: LatestNewsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    let crumbRoot = this.service.getRoute();

    route.params.subscribe(params => { this.selectedId = params['id']; });

    this.breadCrumbs = [
      {
        text: crumbRoot.short,
        href: crumbRoot.href
      },
      {
        text: '最新动态',
        href: 'latest-news/:'+ this.selectedId
      }
    ];
  }

  ngOnInit() {
    let list: Observable<News[]> = null;

    this.newsList = this.service.getNewsList();

    this.newsList.then(list=>{
      this.news = list.find(news => news.id === +this.selectedId);
    });
    
  }

  ngDoCheck() {
  }

  isSelected(news: News) {
  	return news.id == this.selectedId;
	}

  onSelect(id) {
    // this.router.navigate(['/latest-news', {id: news.id}, {relativeTo: this.route} ]);
    this.selectedId = id;

    this.router.navigate(['/latest-news', id ]);
  }

}
