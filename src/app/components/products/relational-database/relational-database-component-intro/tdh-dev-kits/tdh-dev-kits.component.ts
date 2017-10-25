import { Component, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { ComponentIntroChildComponent } from '../../../common/components/component-intro-child/component-intro-child.component';
import { RelationalDatabaseService } from '../../relational-database.service';

@Component({
  templateUrl: '../../../common/components/component-intro-child/component-intro-child.component.html',
})
export class TdhDevKitsComponent extends ComponentIntroChildComponent implements OnInit {

  constructor(
  	componentFactoryResolver: ComponentFactoryResolver,
    private service: RelationalDatabaseService,
  	private el: ElementRef 
	) {
  	super(componentFactoryResolver);
  }

  ngOnInit() {
  	try{
      const productDetails = this.service.getProductDetails();
  		this.data = productDetails.componentIntro.tdhDevKits;
  	} catch(e){
  		console.log(e.message);
  	} finally {}
  }

}
