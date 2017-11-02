import {
  Component,
  OnInit,
  HostBinding,
  Input,
  Output
} from '@angular/core';

import { DataWarehouseService } from './data-warehouse.service';

@Component({
  selector: 'tdc-data-warehouse',
  templateUrl: './data-warehouse.component.html',
  styleUrls: ['./data-warehouse.common.sass','./data-warehouse.component.sass']
})
export class DataWarehouseComponent implements OnInit {

  // @HostBinding('class.data-warehouse-box') layout = true;

  productDetails: any;

  constructor(
    private service: DataWarehouseService
  ) { }

  ngOnInit() {
    const productDetails = this.service.getProductDetails();
    this.productDetails = productDetails;
  }
}
