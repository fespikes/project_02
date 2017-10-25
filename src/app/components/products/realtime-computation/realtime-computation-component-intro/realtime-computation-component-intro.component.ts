import { Component, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { ComponentIntroComponent } from '../../common/components/component-intro/component-intro.component';
import { RealtimeComputationService } from '../realtime-computation.service';

@Component({
	templateUrl: '../../common/components/component-intro/component-intro.component.html',
})
export class RealtimeComputationComponentIntroComponent extends ComponentIntroComponent {

	constructor(
		componentFactoryResolver: ComponentFactoryResolver,
		private service: RealtimeComputationService
	) {
		super(componentFactoryResolver);
	}

	ngOnInit() {
		const productDetails = this.service.getProductDetails();
		this.data = productDetails.componentIntro;
	}

}
