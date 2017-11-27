import { Component, OnInit, HostBinding, Input } from '@angular/core';

import { ProductContentService } from '../../services/product-content.service';
import { ProductUtilService } from '../../services/product-util.service';

@Component({
  selector: 'product-advantage',
  templateUrl: './product-advantage.component.html',
  styleUrls: ['./product-advantage.component.sass'],
})
export class ProductAdvantageComponent implements OnInit {

  productAdvantage = {
    items: []
  };

  constructor(
    private productContentService: ProductContentService,
    private productUtilService: ProductUtilService
  ) { }

  ngOnInit() {

    let moduleType = this.productUtilService.getModuleType(window.location.hash);
    this.productAdvantage = this.productContentService.getProductAdvantage(moduleType);
  }
}
