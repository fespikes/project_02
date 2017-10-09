import { Component, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { AdvantagesComponent } from '../../common/components/advantages/advantages.component'
import { DataMartService } from '../data-mart.service';

@Component({
  templateUrl: '../../common/components/advantages/advantages.component.html',
})
export class DataMartAdvantagesComponent extends AdvantagesComponent {

  constructor(
  	componentFactoryResolver: ComponentFactoryResolver,
  	private dataMartService: DataMartService,
  	private el: ElementRef 
	) {
  	super(componentFactoryResolver);
  }

  ngOnInit() {
  	const productDetails = this.dataMartService.getProductDetails();
  	this.data = productDetails.advantages;

  }
}
