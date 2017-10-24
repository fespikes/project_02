import { Component, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { ScenariosComponent } from '../../common/components/scenarios/scenarios.component'
import { InfoRetrievalService } from '../info-retrieval.service';

@Component({
  templateUrl: '../../common/components/scenarios/scenarios.component.html',
})
export class InfoRetrievalScenariosComponent extends ScenariosComponent{

  constructor(
  	componentFactoryResolver: ComponentFactoryResolver,
  	private service: InfoRetrievalService
	) {
  	super(componentFactoryResolver);
  }

  ngOnInit() {
  	const productDetails = this.service.getProductDetails();
  	this.data = productDetails.scenarios;
  }

}
