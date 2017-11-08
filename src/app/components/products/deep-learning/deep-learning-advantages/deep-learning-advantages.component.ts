import { Component, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { AdvantagesComponent } from '../../common/components/advantages/advantages.component'
import { DeepLearningService } from '../deep-learning.service';

@Component({
  selector: 'deep-learning-advantages',
  templateUrl: '../../common/components/advantages/advantages.component.html',
})
export class DeepLearningAdvantagesComponent extends AdvantagesComponent {

  constructor(
  	componentFactoryResolver: ComponentFactoryResolver,
  	private service: DeepLearningService,
  	private el: ElementRef 
	) {
  	super(componentFactoryResolver);
  }

  ngOnInit() {
  	const productDetails = this.service.getProductDetails();
  	this.data = productDetails.advantages;

  }
}
