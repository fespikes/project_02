import { Component, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';

import { ScenariosChildComponent } from '../../../common/components/scenarios-child/scenarios-child.component';
import { DeepLearningService } from '../../deep-learning.service';

@Component({
	templateUrl: '../../../common/components/scenarios-child/scenarios-child.component.html',
})
export class NaturalLanguageProcessingComponent extends ScenariosChildComponent implements OnInit {

	constructor(
		componentFactoryResolver: ComponentFactoryResolver,
		private service: DeepLearningService,
		private el: ElementRef
	) {
		super(componentFactoryResolver);
	}

	ngOnInit() {
		try {
			const productDetails = this.service.getProductDetails();
			this.data = productDetails.scenarios.naturalLanguageProcessing;
		} catch (e) {
			console.log(e.message);
		} finally { }
	}

}
