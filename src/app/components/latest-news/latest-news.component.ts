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

  private selectedId: number;

  constructor(
    private service: LatestNewsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.newsList = this.route.paramMap
      .switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getNewsList();
      }
    );
  }

  isSelected(news: News) {
  	return news.id === this.selectedId;
	}

  onSelect(news: News) {
    this.router.navigate(['/latest-news', {id: news.id}]);
  }

}
