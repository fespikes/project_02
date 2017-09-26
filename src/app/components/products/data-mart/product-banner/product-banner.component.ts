import { Component, Input, OnInit, AfterViewInit, OnDestroy, ComponentFactoryResolver, ViewChild } from '@angular/core';

import { BannerDirective } from './banner.directive';
import { BannerInterface } from './banner-interface';
import { BannerComponent } from './banner/banner.component';

@Component({
  selector: 'product-banner',
  templateUrl: './product-banner.component.html',
  styleUrls: ['./product-banner.component.sass']
})
export class ProductBannerComponent implements  OnInit {

  productDetail: any;
  
  @Input()
  set productDetails(productDetails: any) {
    this.productDetail = productDetails && productDetails.banner && productDetails;
  }

  //用来告诉Angular该把动态组件插入到什么位置
  @ViewChild(BannerDirective) bannerHost: BannerDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(_=>this.loadComponent(), 1);
  }

  loadComponent() {
    let viewContainerRef = this.bannerHost.viewContainerRef;
    viewContainerRef.clear();

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(BannerComponent);
    
    let componentRef = viewContainerRef.createComponent(componentFactory);
    
    (<BannerInterface>componentRef.instance).data = this.productDetail.banner || {};
  }


}
