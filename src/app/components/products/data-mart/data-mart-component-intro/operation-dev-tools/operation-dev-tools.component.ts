import { Component, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { ComponentIntroChildComponent } from '../../../common/components/component-intro-child/component-intro-child.component';
import { DataMartService } from '../../data-mart.service';

@Component({
  templateUrl: '../../../common/components/component-intro-child/component-intro-child.component.html',
})
export class OperationDevToolsComponent extends ComponentIntroChildComponent implements OnInit {

  constructor(
  	componentFactoryResolver: ComponentFactoryResolver,
  	private service: DataMartService,
  	private el: ElementRef 
	) {
  	super(componentFactoryResolver);
  }

  ngOnInit() {
  	try{
      const productDetails = this.service.getProductDetails();
  		this.data = productDetails.componentIntro.operationDevTools;
  	} catch(e){
  		console.log(e.message);
  	} finally {}
  }
}
