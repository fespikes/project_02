import { Component, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { ScenariosComponent } from '../../common/components/scenarios/scenarios.component'
import { RealtimeComputationService } from '../realtime-computation.service';

@Component({
  selector: 'realtime-computation-scenarios',
  templateUrl: '../../common/components/scenarios/scenarios.component.html',
})
export class RealtimeComputationScenariosComponent extends ScenariosComponent {

	constructor(
		componentFactoryResolver: ComponentFactoryResolver,
		private service: RealtimeComputationService
	) {
		super(componentFactoryResolver);
	}

	ngOnInit() {
		const productDetails = this.service.getProductDetails();
		this.data = productDetails.scenarios;
	}

}
