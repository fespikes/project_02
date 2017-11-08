import { Component, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { ScenariosComponent } from '../../common/components/scenarios/scenarios.component'
import { RelationalDatabaseService } from '../relational-database.service';

@Component({
  selector: 'relational-database-scenarios',
  templateUrl: '../../common/components/scenarios/scenarios.component.html',
})
export class RelationalDatabaseScenariosComponent extends ScenariosComponent {

	constructor(
		componentFactoryResolver: ComponentFactoryResolver,
		private service: RelationalDatabaseService
	) {
		super(componentFactoryResolver);
	}

	ngOnInit() {
		const productDetails = this.service.getProductDetails();
		this.data = productDetails.scenarios;
	}

}
