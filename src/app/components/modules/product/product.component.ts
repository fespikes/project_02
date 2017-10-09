import { Component, OnInit } from '@angular/core';

import { ProductIntroduceComponent } from './introduce/product-introduce.component';
import { ProductAdvantageComponent } from './advantage/product-advantage.component';
import { TabComponent } from '../../common/components/tab/tab.component';

import { ProductContentService } from '../services/product-content.service';
import { ProductBannerService } from '../services/product-banner.service';
import { ProductUtilService } from '../services/product-util.service';

@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass'],
})
export class ProductComponent implements OnInit {

  bannerInfo = {};
  tabItems = [
    {
      name: 'introduce',
      alias: '产品介绍',
      url: './introduce'
    },
    {
      name: 'advantage',
      alias: '产品优势',
      url: './advantage'
    }
  ];

  constructor(
    private productContentService: ProductContentService,
    private productBannerService: ProductBannerService,
    private productUtilService: ProductUtilService) {

  }

  ngOnInit() {
    let moduleType = this.productUtilService.getModuleType(window.location.hash);
    this.bannerInfo = this.productBannerService.getModuleBannerInfo(moduleType);
  }

  onTabChange() {

  }
}
