import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../products.service';

@Component({
  selector: 'tdc-info-retrieval',
  templateUrl: './info-retrieval.component.html',
  styleUrls: ['./info-retrieval.common.sass', './info-retrieval.component.sass']
})
export class InfoRetrievalComponent implements OnInit {

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
