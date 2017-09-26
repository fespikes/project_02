import { Component, Input, AfterViewInit, OnDestroy, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { ProductTabDirective } from './product-tab.directive';
import { TabsComponent } from './tabs/tabs.component';

@Component({
  selector: 'product-tab',
  templateUrl: './product-tab.component.html',
  styleUrls: ['./product-tab.component.sass']
})
export class ProductTabComponent implements AfterViewInit, OnDestroy {

  tabs: any;

  @ViewChild(ProductTabDirective)
  productTab: ProductTabDirective;
  
  @Input()
  set productDetails(productDetails: any) {
    this.tabs = productDetails && productDetails.tabs;
  }

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit() {
  	setTimeout( _ => this.loadComponent(), 1);
  }

  ngOnDestroy() {
  }

  loadComponent() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(TabsComponent);

    let viewContainerRef = this.productTab.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<TabsComponent>componentRef.instance).tabs = this.tabs;

  }

}
