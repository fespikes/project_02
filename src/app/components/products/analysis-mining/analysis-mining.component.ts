import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../products.service';

@Component({
  selector: 'tdc-analysis-mining',
  templateUrl: './analysis-mining.component.html',
  styleUrls: ['./analysis-mining.component.sass']
})
export class AnalysisMiningComponent implements OnInit {

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
