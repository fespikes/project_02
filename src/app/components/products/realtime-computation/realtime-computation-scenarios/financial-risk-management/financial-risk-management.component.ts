import { Component, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';

import { ScenariosChildComponent } from '../../../common/components/scenarios-child/scenarios-child.component';
import { RealtimeComputationService } from '../../realtime-computation.service';

@Component({
	templateUrl: '../../../common/components/scenarios-child/scenarios-child.component.html',
})
export class FinancialRiskManagementComponent extends ScenariosChildComponent implements OnInit {
	
	constructor(
		componentFactoryResolver: ComponentFactoryResolver,
		private service: RealtimeComputationService,
		private el: ElementRef
	) {
		super(componentFactoryResolver);
	}

	ngOnInit() {
		try {
			const productDetails = this.service.getProductDetails();
			this.data = productDetails.scenarios.financialRiskManagement;
		} catch (e) {
			console.log(e.message);
		} finally { }
	}

}
