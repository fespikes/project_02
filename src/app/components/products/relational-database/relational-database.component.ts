import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../products.service';

@Component({
  selector: 'tdc-relational-database',
  templateUrl: './relational-database.component.html',
  styleUrls: ['./relational-database.component.sass']
})
export class RelationalDatabaseComponent implements OnInit {

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
