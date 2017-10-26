import { Component, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { ComponentIntroComponent } from '../../common/components/component-intro/component-intro.component';
import { DeepLearningService } from '../deep-learning.service';

@Component({
	templateUrl: '../../common/components/component-intro/component-intro.component.html',
})
export class DeepLearningComponentIntroComponent extends ComponentIntroComponent {

	constructor(
		componentFactoryResolver: ComponentFactoryResolver,
		private service: DeepLearningService
	) {
		super(componentFactoryResolver);
	}

	ngOnInit() {
		const productDetails = this.service.getProductDetails();
		this.data = productDetails.componentIntro;
	}

}
