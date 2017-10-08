import { Component, OnInit, HostBinding, Input } from '@angular/core';

import { ProductBannerService } from '../../services/product-banner.service';
import { ProductContentService } from '../../services/product-content.service';
import { ProductUtilService } from '../../services/product-util.service';

@Component({
  selector: 'product-introduce',
  templateUrl: './product-introduce.component.html',
  styleUrls: ['./product-introduce.component.sass'],
})
export class ProductIntroduceComponent implements OnInit {
  productIntroduce = {};
  bannerInfo = {};

  constructor(
    private productContentService: ProductContentService,
    private productBannerService: ProductBannerService,
    private productUtilService: ProductUtilService
  ) { }

  ngOnInit() {

    let moduleType = this.productUtilService.getModuleType(window.location.hash);
    this.bannerInfo = this.productBannerService.getModuleBannerInfo(moduleType);
    this.productIntroduce = this.productContentService.getProductIntroduce(moduleType);
  }
}
