import { Component, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { ScenariosComponent } from '../../common/components/scenarios/scenarios.component'
import { DeepLearningService } from '../deep-learning.service';

@Component({
  selector: 'deep-learning-scenarios',
  templateUrl: '../../common/components/scenarios/scenarios.component.html',
})
export class DeepLearningScenariosComponent extends ScenariosComponent {

  constructor(
    componentFactoryResolver: ComponentFactoryResolver,
    private service: DeepLearningService
  ) {
    super(componentFactoryResolver);
  }

  ngOnInit() {
    const productDetails = this.service.getProductDetails();
    this.data = productDetails.scenarios;
  }

}
