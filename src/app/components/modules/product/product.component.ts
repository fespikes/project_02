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
  MODULE_INTRODUCE_TAG = 'product-introduce';
  MODULE_ADVANTAGE_TAG = 'product-advantage';

  ANCHOR_TOP = 402;//topNav height plus banner height
  TAB_HEIGHT = 56;


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

  onTabChange(tab) {
    this.anchorContent(tab);
  }

  anchorContent(tab) {
    let anchorTag = this.MODULE_INTRODUCE_TAG;
    let scrollTop = this.ANCHOR_TOP - this.TAB_HEIGHT;
    if(tab.tabName === 'advantage') {
      anchorTag = this.MODULE_ADVANTAGE_TAG;
      if(tab.className === 'tab-ul') {
        scrollTop = this.ANCHOR_TOP - 2 * this.TAB_HEIGHT;
      }
    }else if(tab.tabName === 'introduce' && tab.className === 'fixed') {
      scrollTop = this.ANCHOR_TOP;
    }
    this.productUtilService.anchorTabContent(anchorTag, scrollTop);
  }
}
