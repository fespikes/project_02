import { Component, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { ComponentIntroComponent } from '../../common/components/component-intro/component-intro.component';
import { InfoRetrievalService } from '../info-retrieval.service';

@Component({
	templateUrl: '../../common/components/advantages/advantages.component.html',
})
export class InfoRetrievalComponentIntroComponent extends ComponentIntroComponent {

	constructor(
  	componentFactoryResolver: ComponentFactoryResolver,
  	private service: InfoRetrievalService
	) {
  	super(componentFactoryResolver);
  }

  ngOnInit() {
  	const productDetails = this.service.getProductDetails();
  	this.data = productDetails.componentIntro;
  }

}
