import { Component, AfterViewInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { BannerDirective } from './banner.directive';
import { BannerComponent as TheComponent } from './banner/banner.component';

@Component({
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.sass']
})
export class BannerComponent implements AfterViewInit {

	@ViewChild(BannerDirective) banner: BannerDirective;
	protected data:any;

  constructor(protected componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit() {
		setTimeout( _ => this.loadComponent(), 1);
  }

  loadComponent() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(TheComponent);

    let viewContainerRef = this.banner.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<TheComponent>componentRef.instance).data = this.data;

  }

}
