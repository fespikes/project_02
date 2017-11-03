import { Component, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { ScenariosComponent } from '../../common/components/scenarios/scenarios.component'
import { DataWarehouseService } from '../data-warehouse.service';

@Component({
  selector: 'data-warehouse-scenarios',
  templateUrl: '../../common/components/scenarios/scenarios.component.html'
})
export class DataWarehouseScenariosComponent extends ScenariosComponent{

  constructor(
  	componentFactoryResolver: ComponentFactoryResolver,
  	private service: DataWarehouseService
	) {
  	super(componentFactoryResolver);
  }

  ngOnInit() {
  	const productDetails = this.service.getProductDetails();
  	this.data = productDetails.scenarios;
  }

}
