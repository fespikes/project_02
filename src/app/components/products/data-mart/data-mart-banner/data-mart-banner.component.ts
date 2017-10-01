import { Component, Input, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { DataMartService } from '../data-mart.service';
import { BannerComponent } from '../../common/components/banner/banner.component';

@Component({
  selector: 'data-mart-banner',
  templateUrl: '../../common/components/banner/banner.component.html',
  // styleUrls: ['./data-mart-banner.component.sass']
})
export class DataMartBannerComponent extends BannerComponent implements OnInit{
  
  @Input()
  productDetails:any;

  ngOnInit() {
    this.data = this.productDetails.banner;
  }

}
