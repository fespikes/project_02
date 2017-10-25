import { Component, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { ScenariosChildComponent } from '../../../common/components/scenarios-child/scenarios-child.component';
import { AnalysisMiningService } from '../../analysis-mining.service';

@Component({
  templateUrl: '../../../common/components/scenarios-child/scenarios-child.component.html',
})
export class FraudCheckComponent extends ScenariosChildComponent implements OnInit {
  constructor(
  	componentFactoryResolver: ComponentFactoryResolver,
  	private service: AnalysisMiningService,
  	private el: ElementRef 
	) {
  	super(componentFactoryResolver);
  }

  ngOnInit() {
  	try{
  		const productDetails = this.service.getProductDetails();
  		this.data = productDetails.scenarios.fraudCheck;
  	} catch(e){
  		console.log(e.message);
  	} finally {}
  }

}
