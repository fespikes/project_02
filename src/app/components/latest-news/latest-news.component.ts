import { Component, OnInit, DoCheck, AfterViewChecked } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { News, LatestNewsService, utils } from './latest-news.service';
import { Observable } from 'rxjs';
const style = require('./the-news.css');

@Component({
  selector: 'tdc-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.sass']
})
export class LatestNewsComponent implements OnInit, DoCheck, AfterViewChecked {

  newsList: Observable<News[]>;

  breadCrumbs: any;

  selectedId: number;

  news: News;

  formater = utils.formatDate;

  constructor(
    private service: LatestNewsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const crumbRoot = this.service.getRoute();

    route.params.subscribe(params => {
      this.selectedId = params['id'];

      this.newsList = this.service.getNewsList();

      this.newsList.subscribe(list => {
        this.news = list.find(news => news.id === +this.selectedId);
      });

      requestAnimationFrame(() => {
        window.scrollTo(0, 460);
      });
    });

    this.breadCrumbs = [
      {
        text: crumbRoot.short,
        href: crumbRoot.href
      },
      {
        text: '最新动态',
        href: 'latest-news/:' + this.selectedId
      }
    ];
  }

  ngOnInit() {
  }

  ngDoCheck() {
  }

  isSelected(news: News) {
    return news.id === this.selectedId;
  }

  onSelect(id) {
    // this.router.navigate(['/latest-news', {id: news.id}, {relativeTo: this.route} ]);
    this.selectedId = id;

    this.router.navigate(['/latest-news', id ]);
  }

  ngAfterViewChecked() {
    const outerHtml = '';
    const timeNode = document.querySelector('.time');
    const theNewsStyle = document.querySelector('.the-news-style');
    if (!theNewsStyle && timeNode) {
      (timeNode.outerHTML += `<style class="the-news-style">` + style + `</style>`);
    }
  }

}
