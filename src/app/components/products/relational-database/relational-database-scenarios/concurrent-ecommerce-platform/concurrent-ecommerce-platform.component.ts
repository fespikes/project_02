import { Component, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';

import { ScenariosChildComponent } from '../../../common/components/scenarios-child/scenarios-child.component';
import { RelationalDatabaseService } from '../../relational-database.service';

@Component({
	templateUrl: '../../../common/components/scenarios-child/scenarios-child.component.html',
})
export class ConcurrentEcommercePlatformComponent extends ScenariosChildComponent implements OnInit {
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
			this.data = productDetails.scenarios.concurrentEcommercePlatform;
		} catch (e) {
			console.log(e.message);
		} finally { }
	}

}
