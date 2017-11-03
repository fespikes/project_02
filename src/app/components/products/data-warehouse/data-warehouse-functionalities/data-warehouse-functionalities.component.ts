import { Component, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { FunctionalitiesComponent } from '../../common/components/functionalities/functionalities.component';
import { DataWarehouseService } from '../data-warehouse.service';

@Component({
  selector: 'data-warehouse-functionalities',
  templateUrl: '../../common/components/functionalities/functionalities.component.html',
})
export class DataWarehouseFunctionalitiesComponent extends FunctionalitiesComponent /*implements OnDestroy */{

  constructor(
  	componentFactoryResolver: ComponentFactoryResolver,
  	private service: DataWarehouseService,
  ) {
  	super(componentFactoryResolver);
  }

  ngOnInit() {
  	const productDetails = this.service.getProductDetails();
  	this.data = productDetails.functionalities;
  }

}
