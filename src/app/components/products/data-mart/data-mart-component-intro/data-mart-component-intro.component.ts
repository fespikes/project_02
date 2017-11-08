import { Component, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { ComponentIntroComponent } from '../../common/components/component-intro/component-intro.component';
import { DataMartService } from '../data-mart.service';

@Component({
  selector: 'data-mart-component-intro',
  templateUrl: '../../common/components/component-intro/component-intro.component.html',
})
export class DataMartComponentIntroComponent extends ComponentIntroComponent {

  constructor(
  	componentFactoryResolver: ComponentFactoryResolver,
  	private dataMartService: DataMartService
	) {
  	super(componentFactoryResolver);
  }

  ngOnInit() {
  	const productDetails = this.dataMartService.getProductDetails();
  	this.data = productDetails.componentIntro;
  }

}
