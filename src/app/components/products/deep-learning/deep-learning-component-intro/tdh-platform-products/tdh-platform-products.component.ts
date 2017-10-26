import { Component, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { ComponentIntroChildComponent } from '../../../common/components/component-intro-child/component-intro-child.component';
import { DeepLearningService } from '../../deep-learning.service';

@Component({
  templateUrl: '../../../common/components/component-intro-child/component-intro-child.component.html',
})
export class TdhPlatformProductsComponent extends ComponentIntroChildComponent implements OnInit {

  constructor(
  	componentFactoryResolver: ComponentFactoryResolver,
    private service: DeepLearningService,
  	private el: ElementRef 
	) {
  	super(componentFactoryResolver);
  }

  ngOnInit() {
  	try{
      const productDetails = this.service.getProductDetails();
  		this.data = productDetails.componentIntro.tdhPlatformProducts;
  	} catch(e){
  		console.log(e.message);
  	} finally {}
  }

}
