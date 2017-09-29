import { Component, Input, OnInit, AfterViewInit, OnDestroy, ComponentFactoryResolver, ViewChild } from '@angular/core';

import { BannerDirective } from './banner.directive';
import { BannerComponent as TheComponent } from './banner/banner.component';

@Component({
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.sass']
})
export class BannerComponent implements AfterViewInit {

	data: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  //用来告诉Angular该把动态组件插入到什么位置
  @ViewChild(BannerDirective) bannerBox: BannerDirective;

  ngAfterViewInit() {
  	setTimeout(_ => this.loadComponent(), 1);
  }

  loadComponent() {
    let viewContainerRef = this.bannerBox.viewContainerRef;
    viewContainerRef.clear();

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(TheComponent);
    
    let componentRef = viewContainerRef.createComponent(componentFactory);
    
    (<TheComponent>componentRef.instance).data = this.data;
  }

}
