import { Component, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';

import { ScenariosChildComponent } from '../../../common/components/scenarios-child/scenarios-child.component';
import { InfoRetrievalService } from '../../info-retrieval.service';

@Component({
	templateUrl: '../../../common/components/scenarios-child/scenarios-child.component.html',
})
export class DataSearchEngineComponent extends ScenariosChildComponent implements OnInit {
	constructor(
		componentFactoryResolver: ComponentFactoryResolver,
		private service: InfoRetrievalService,
		private el: ElementRef
	) {
		super(componentFactoryResolver);
	}

	ngOnInit() {
		try {
			const productDetails = this.service.getProductDetails();
			this.data = productDetails.scenarios.dataSearchEngine;
		} catch (e) {
			console.log(e.message);
		} finally { }
	}

}
