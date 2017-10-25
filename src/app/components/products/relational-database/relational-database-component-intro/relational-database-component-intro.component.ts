import { Component, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { ComponentIntroComponent } from '../../common/components/component-intro/component-intro.component';
import { RelationalDatabaseService } from '../relational-database.service';

@Component({
	templateUrl: '../../common/components/component-intro/component-intro.component.html',
})
export class RelationalDatabaseComponentIntroComponent extends ComponentIntroComponent {

	constructor(
		componentFactoryResolver: ComponentFactoryResolver,
		private service: RelationalDatabaseService
	) {
		super(componentFactoryResolver);
	}

	ngOnInit() {
		const productDetails = this.service.getProductDetails();
		this.data = productDetails.componentIntro;
	}

}
