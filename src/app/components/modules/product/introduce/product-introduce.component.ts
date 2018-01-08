import { Component, OnInit, HostBinding, Input } from '@angular/core';

import { ProductContentService } from '../../services/product-content.service';
import { ProductUtilService } from '../../services/product-util.service';

@Component({
  selector: 'tdc-product-introduce',
  templateUrl: './product-introduce.component.html',
  styleUrls: ['./product-introduce.component.sass'],
})
export class ProductIntroduceComponent implements OnInit {
  productIntroduce = {
    img: {
      width: '',
      height: '',
      url: '',
      margin_bottom: 0,
    },
    items: [],
  };

  constructor(
    private productContentService: ProductContentService,
    private productUtilService: ProductUtilService,
  ) { }

  ngOnInit() {

    const moduleType = this.productUtilService.getModuleType(window.location.hash);
    this.productIntroduce = this.productContentService.getProductIntroduce(moduleType);
  }
}
