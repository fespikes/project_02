import { Component, OnInit, HostBinding, Input } from '@angular/core';

import { ProductBannerService } from '../../services/product-banner.service';
import { ProductContentService } from '../../services/product-content.service';
import { ProductUtilService } from '../../services/product-util.service';

@Component({
  selector: 'product-advantage',
  templateUrl: './product-advantage.component.html',
  styleUrls: ['./product-advantage.component.sass'],
})
export class ProductAdvantageComponent implements OnInit {

  bannerInfo = {};
  productAdvantage = {};

  constructor(
    private productContentService: ProductContentService,
    private productBannerService: ProductBannerService,
    private productUtilService: ProductUtilService
  ) { }

  ngOnInit() {

    let moduleType = this.productUtilService.getModuleType(window.location.hash);
    this.bannerInfo = this.productBannerService.getModuleBannerInfo(moduleType);
    this.productAdvantage = this.productContentService.getProductAdvantage(moduleType);
  }
}
