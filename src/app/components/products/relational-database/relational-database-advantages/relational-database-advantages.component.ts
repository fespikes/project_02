import { Component, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { AdvantagesComponent } from '../../common/components/advantages/advantages.component'
import { RelationalDatabaseService } from '../relational-database.service';

@Component({
  templateUrl: '../../common/components/advantages/advantages.component.html',
})
export class RelationalDatabaseAdvantagesComponent extends AdvantagesComponent {

  constructor(
  	componentFactoryResolver: ComponentFactoryResolver,
  	private service: RelationalDatabaseService,
  	private el: ElementRef 
	) {
  	super(componentFactoryResolver);
  }

  ngOnInit() {
  	const productDetails = this.service.getProductDetails();
  	this.data = productDetails.advantages;

  }
}
