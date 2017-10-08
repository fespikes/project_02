import {
  Component,
  OnInit,
  HostBinding,
  Input,
  Output
} from '@angular/core';

import { ProductsService } from '../products.service';

@Component({
  selector: 'tdc-data-warehouse',
  templateUrl: './data-warehouse.component.html',
  styleUrls: ['./data-warehouse.common.sass','./data-warehouse.component.sass']
})
export class DataWarehouseComponent implements OnInit {

  @HostBinding('class.data-warehouse-box') layout = true;

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
