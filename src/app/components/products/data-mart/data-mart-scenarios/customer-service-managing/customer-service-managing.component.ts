import { Component, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';

import { ScenariosChildComponent } from '../../../common/components/scenarios-child/scenarios-child.component';
import { DataMartService } from '../../data-mart.service';

@Component({
  templateUrl: '../../../common/components/scenarios-child/scenarios-child.component.html',
})
export class CustomerServiceManagingComponent extends ScenariosChildComponent implements OnInit {
  constructor(
  	componentFactoryResolver: ComponentFactoryResolver,
  	private dataMartService: DataMartService,
  	private el: ElementRef 
	) {
  	super(componentFactoryResolver);
  }

  ngOnInit() {
  	try{
  		const productDetails = this.dataMartService.getProductDetails();
  		this.data = productDetails.scenarios.customerServiceManaging;
  	} catch(e){
  		console.log(e.message);
  	} finally {}
  }

}
