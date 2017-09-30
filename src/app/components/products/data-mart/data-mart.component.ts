import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { DataMartService } from './data-mart.service';

@Component({
  selector: 'tdc-data-mart',
  templateUrl: './data-mart.component.html',
  styleUrls: ['./data-mart.common.sass', './data-mart.component.sass']
})
export class DataMartComponent implements OnInit {

	productDetails: any;

	constructor(private dataMartService: DataMartService) {

	}

  ngOnInit() {
  	const productDetails = this.dataMartService.getProductDetails();
  	this.productDetails = productDetails;
  }

  ngOnDestroy() {
  }

}
