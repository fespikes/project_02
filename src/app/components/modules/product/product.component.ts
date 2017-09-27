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

  moduleType = '';
  bannerInfo = {};

  productIntroduce = {};
  productAdvantage = {};
  productScenarios = {};

  introduceIncludeImg = false;
  advantageIncludeImgTable = {};
  scenariosIncludeImgTab = {};

  constructor(
    private productContentService: ProductContentService,
    private productBannerService: ProductBannerService,
    private productUtilService: ProductUtilService) {

  }

  ngOnInit() {
    this.moduleType = this.productUtilService.getModuleType(window.location.hash);
    this.bannerInfo = this.productBannerService.getModuleBannerInfo(this.moduleType);

    this.productIntroduce = this.productContentService.getProductIntroduce(this.moduleType);
    this.productAdvantage = this.productContentService.getProductAdvantage(this.moduleType);
    this.productScenarios = this.productContentService.getProductScenarios(this.moduleType);

    this.introduceIncludeImg = this.productUtilService.introduceIncludeImg(this.moduleType);
    this.advantageIncludeImgTable = this.productUtilService.advantageIncludeImgTable(this.moduleType);
    this.scenariosIncludeImgTab = this.productUtilService.scenariosIncludeImgTab(this.moduleType);
  }
}
