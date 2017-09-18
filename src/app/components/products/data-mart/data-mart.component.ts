import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { BannerDirective } from './product-banner/banner.directive';
import { ProductBannerComponent } from './product-banner/product-banner.component';
import { BannerInterface } from './product-banner/banner-interface';
import { DataMartService } from './data-mart.service';

@Component({
  selector: 'tdc-data-mart',
  templateUrl: './data-mart.component.html',
  styleUrls: ['./data-mart.component.sass']
})
export class DataMartComponent implements OnInit {

	productDetails: any;

	constructor(private dataMartService: DataMartService) {

	}

  ngOnInit() {
  	this.productDetails = this.dataMartService.getProductDetails();
  }

  ngOnDestroy() {
  }

}
