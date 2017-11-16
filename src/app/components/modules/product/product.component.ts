import { Component, OnInit } from '@angular/core';

import { ProductIntroduceComponent } from './introduce/product-introduce.component';
import { ProductAdvantageComponent } from './advantage/product-advantage.component';
import { TabComponent } from '../../common/components/tab/tab.component';

import { ProductBannerService } from '../services/product-banner.service';
import { ProductUtilService } from '../services/product-util.service';
import { ProductResService } from '../services/product-res.service';

@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass'],
})
export class ProductComponent implements OnInit {

  bannerInfo = {};
  tabItems = [];
  MODULE_INTRODUCE_ID = 'module-introduce-id';
  MODULE_ADVANTAGE_ID = 'module-advantage-id';

  constructor(
    private productBannerService: ProductBannerService,
    private productUtilService: ProductUtilService,
    private productResService: ProductResService
  ) {

  }

  ngOnInit() {
    let moduleType = this.productUtilService.getModuleType(window.location.hash);
    this.bannerInfo = this.productBannerService.getModuleBannerInfo(moduleType);
    this.tabItems = this.productResService.getModuleTabItems();
  }

  onTabChange(tabName) {
    this.anchorContent(tabName);
  }

  anchorContent(tabName) {
    let anchorID = this.MODULE_INTRODUCE_ID;
    if(tabName === 'advantage') {
      anchorID = this.MODULE_ADVANTAGE_ID;
    }
    this.productUtilService.anchorTabContent(anchorID);
  }
}
