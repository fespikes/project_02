import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  hotModules: any;

  businessScenarios: any;

  latestNews: any;

  videoTutorial: any;

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
    this.hotModules = data.hotModules;

    this.businessScenarios = data.businessScenarios;

    const latestNewsPromise = this.homeService.getLatestNews();

    latestNewsPromise.then(res => {
      this.latestNews = res;
      window.sessionStorage.setItem('tdc-web:latest-news:first-news-id', res[0].id + '' );
    });

    this.videoTutorial = commonService.getVideoTutorial();

  }

  ngOnInit() {
  }

  product() {
    this.router.navigateByUrl('product');
  }

  toLatestNewsDetails(target, news) {
    this.router.navigate(['/latest-news', news.id]);
  }

  goToAdmin() {

  }

}
