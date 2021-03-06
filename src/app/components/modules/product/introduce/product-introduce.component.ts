import { Component, OnInit, HostBinding, Input } from '@angular/core';

import { ProductContentService } from '../../services/product-content.service';
import { ProductUtilService } from '../../services/product-util.service';

@Component({
  selector: 'product-introduce',
  templateUrl: './product-introduce.component.html',
  styleUrls: ['./product-introduce.component.sass'],
})
export class ProductIntroduceComponent implements OnInit {
  productIntroduce = {
    img: {
      width: '',
      height: '',
      url: ''
    },
    items: []
  };

  constructor(
    private productContentService: ProductContentService,
    private productUtilService: ProductUtilService
  ) { }

  ngOnInit() {

    let moduleType = this.productUtilService.getModuleType(window.location.hash);
    this.productIntroduce = this.productContentService.getProductIntroduce(moduleType);
  }
}
