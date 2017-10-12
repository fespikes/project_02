import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { HomeService } from './home.service';
import { CommonService } from '../common/services/common.service';

@Component({
  selector: 'tdc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {

  advs: any;
  cloudProducts: any;

  latestNews: any;
  
  @HostBinding('class.tdc-home-body') hostClass = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private homeService: HomeService,
    private commonService: CommonService
  ) {
    const data = this.homeService.getData('');
    this.advs = data.advList;
    this.cloudProducts = data.cloudProducts;

    this.latestNews = data.latestNews;
  }

  ngOnInit() {
  }

  product() {
    this.router.navigateByUrl('product');
  }

  toLatestNewsDetails(target, news) {
    this.router.navigate(['/latest-news', {id: news.id}]);
  }

}
