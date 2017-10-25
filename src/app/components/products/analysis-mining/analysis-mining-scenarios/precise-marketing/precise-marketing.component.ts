import { Component, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { ScenariosChildComponent } from '../../../common/components/scenarios-child/scenarios-child.component';
import { AnalysisMiningService } from '../../analysis-mining.service';

@Component({
  templateUrl: '../../../common/components/scenarios-child/scenarios-child.component.html',
})
export class PreciseMarketingComponent extends ScenariosChildComponent implements OnInit {
  constructor(
  	componentFactoryResolver: ComponentFactoryResolver,
  	private dataMartService: AnalysisMiningService,
  	private el: ElementRef 
	) {
  	super(componentFactoryResolver);
  }

  ngOnInit() {
  	try{
  		const productDetails = this.dataMartService.getProductDetails();
  		this.data = productDetails.scenarios.preciseMarketing;
  	} catch(e){
  		console.log(e.message);
  	} finally {}
  }

}
