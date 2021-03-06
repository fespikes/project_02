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

  breadCrumbs: any;

  selectedId: number;

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

        if (this.selectedId)
          return this.service.getNewsList();
        else{
          this.service.getNewsList().then(list=>{
            this.selectedId = list[0].id;
            console.log(this.selectedId);
            // TODO: get the default news
            // this.router.navigate(['/latest-news', {id: this.selectedId} ]);
          })
        }
      }
    );
  }

  isSelected(news: News) {
  	return news.id === this.selectedId;
	}

  onSelect(id) {
    // this.router.navigate(['/latest-news', {id: news.id}, {relativeTo: this.route} ]);
    this.selectedId = id;

    this.router.navigate(['/latest-news', id ]);
  }

}
