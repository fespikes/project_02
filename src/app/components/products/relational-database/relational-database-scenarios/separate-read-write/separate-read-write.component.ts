import { Component, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';

import { ScenariosChildComponent } from '../../../common/components/scenarios-child/scenarios-child.component';
import { RelationalDatabaseService } from '../../relational-database.service';

@Component({
	templateUrl: '../../../common/components/scenarios-child/scenarios-child.component.html',
})
export class SeparateReadWriteComponent extends ScenariosChildComponent implements OnInit {
	constructor(
		componentFactoryResolver: ComponentFactoryResolver,
		private service: RelationalDatabaseService,
		private el: ElementRef
	) {
		super(componentFactoryResolver);
	}

	ngOnInit() {
		try {
			const productDetails = this.service.getProductDetails();
			this.data = productDetails.scenarios.separateReadWrite;
		} catch (e) {
			console.log(e.message);
		} finally { }
	}

}
