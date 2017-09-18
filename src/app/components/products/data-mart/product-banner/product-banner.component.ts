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

  @Input() productDetails: any;

  @ViewChild(BannerDirective) productBanner: BannerDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
  }

  ngAfterViewInit() {
    this.loadComponent();
  }

  loadComponent() {
    let viewContainerRef = this.productBanner.viewContainerRef;
    viewContainerRef.clear();

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(BannerComponent);
    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<BannerInterface>componentRef.instance).data = this.productDetails.banner || {};
  }


}
