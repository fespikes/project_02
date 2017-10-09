import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../products.service';

@Component({
  selector: 'tdc-deep-learning',
  templateUrl: './deep-learning.component.html',
  styleUrls: ['./deep-learning.component.sass']
})
export class DeepLearningComponent implements OnInit {

  tabItems = [];
  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.tabItems = this.productsService.getProductTabs();
  }

  onTabChange() {

  }
}
