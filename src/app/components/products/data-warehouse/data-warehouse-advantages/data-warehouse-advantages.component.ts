import { Component, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { AdvantagesComponent } from '../../common/components/advantages/advantages.component'
import { DataWarehouseService } from '../data-warehouse.service';

@Component({
  selector: 'data-warehouse-advantages',
  templateUrl: '../../common/components/advantages/advantages.component.html',
})
export class DataWarehouseAdvantagesComponent extends AdvantagesComponent {

  constructor(
  	componentFactoryResolver: ComponentFactoryResolver,
  	private service: DataWarehouseService,
  	private el: ElementRef 
	) {
  	super(componentFactoryResolver);
  }

  ngOnInit() {
  	const productDetails = this.service.getProductDetails();
  	this.data = productDetails.advantages;
  }
}