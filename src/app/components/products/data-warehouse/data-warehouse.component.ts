import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'tdc-data-warehouse',
  templateUrl: './data-warehouse.component.html',
  styleUrls: ['./data-warehouse.common.sass','./data-warehouse.component.sass']
})
export class DataWarehouseComponent implements OnInit {

  @HostBinding('class.data-warehouse-box') layout = true;

  constructor() { }

  ngOnInit() {
  }

}
