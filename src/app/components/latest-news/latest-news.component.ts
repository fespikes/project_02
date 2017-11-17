import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { News, LatestNewsService } from './latest-news.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'tdc-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.sass']
})
export class LatestNewsComponent implements OnInit {

  newsList: Observable<News[]>;

  private breadCrumbs: any;

  private selectedId: number;

  constructor(
    private service: LatestNewsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    let crumbRoot = this.service.getRoute();
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

    this.newsList = this.route.paramMap
      .switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +this.router.url.replace( '/latest-news/', '');

        return this.service.getNewsList();
      }
    );
  }

  isSelected(news: News) {
  	return news.id === this.selectedId;
	}

  onSelect(news: News) {
    // this.router.navigate(['/latest-news', {id: news.id}, {relativeTo: this.route} ]);
    this.selectedId = news.id;

    this.router.navigate(['/latest-news', news.id ]);
  }

}
