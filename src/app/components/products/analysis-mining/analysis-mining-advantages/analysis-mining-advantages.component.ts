import { Component, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { AdvantagesComponent } from '../../common/components/advantages/advantages.component'
import { AnalysisMiningService } from '../analysis-mining.service';

@Component({
  templateUrl: '../../common/components/advantages/advantages.component.html',
})
export class AnalysisMiningAdvantagesComponent extends AdvantagesComponent {

  constructor(
  	componentFactoryResolver: ComponentFactoryResolver,
  	private service: AnalysisMiningService,
  	private el: ElementRef 
	) {
  	super(componentFactoryResolver);
  }

  ngOnInit() {
  	const productDetails = this.service.getProductDetails();
  	this.data = productDetails.advantages;

  }
}
