import { Component, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';

import { ScenariosChildComponent } from '../../../common/components/scenarios-child/scenarios-child.component';
import { DataWarehouseService } from '../../data-warehouse.service';

@Component({
	templateUrl: '../../../common/components/scenarios-child/scenarios-child.component.html',
})
export class BuildDataWarehouseComponent extends ScenariosChildComponent implements OnInit {
	constructor(
		componentFactoryResolver: ComponentFactoryResolver,
		private service: DataWarehouseService,
		private el: ElementRef
	) {
		super(componentFactoryResolver);
	}

	ngOnInit() {
		try {
			const productDetails = this.service.getProductDetails();
			this.data = productDetails.scenarios.buildDataWarehouse;
		} catch (e) {
			console.log(e.message);
		} finally { }
	}

}
