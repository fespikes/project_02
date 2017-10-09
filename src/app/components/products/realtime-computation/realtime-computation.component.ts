import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../products.service';

@Component({
  selector: 'tdc-realtime-computation',
  templateUrl: './realtime-computation.component.html',
  styleUrls: ['./realtime-computation.component.sass']
})
export class RealtimeComputationComponent implements OnInit {

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
