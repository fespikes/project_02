import { Component, OnInit } from '@angular/core';

import { ProductIntroduceComponent } from '../product-introduce/product-introduce.component';
import { ProductAdvantageComponent } from '../product-advantage/product-advantage.component';
import { ProductScenariosComponent } from '../product-scenarios/product-scenarios.component';

import { ProductContentService } from '../services/product-content.service';
import { ProductBannerService } from '../services/product-banner.service';
import { ProductUtilService } from '../services/product-util.service';

@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass'],
})
export class ProductComponent implements OnInit {

  bannerInfo = {};

  productIntroduce = {};
  advantageItems = [];
  scenariosItems = [];

  scenariosIncludeImg = false;
  scenariosIncludeTab = false;

  constructor(
    private productContentService: ProductContentService,
    private productBannerService: ProductBannerService,
    private productUtilService: ProductUtilService) {

  }

  ngOnInit() {
    let moduleType = this.productUtilService.getModuleType(window.location.hash);

    this.bannerInfo = this.productBannerService.getModuleBannerInfo(moduleType);

    this.productIntroduce = this.productContentService.getProductIntroduce(moduleType);
    this.advantageItems = this.productContentService.getProductAdvantage(moduleType);
    this.scenariosItems = this.productContentService.getProductScenarios(moduleType);

    this.scenariosIncludeImg = this.productUtilService.scenariosIncludeImg(moduleType);
    this.scenariosIncludeTab = this.productUtilService.scenariosIncludeTab(moduleType);
  }
}
