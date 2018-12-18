import { Component, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { FunctionalitiesComponent } from '../../common/components/functionalities/functionalities.component';
import { DeepLearningService } from '../deep-learning.service';

@Component({
  selector: 'deep-learning-functionalities',
  templateUrl: '../../common/components/functionalities/functionalities.component.html',
})
export class DeepLearningFunctionalitiesComponent extends FunctionalitiesComponent /*implements OnDestroy */ {

  constructor(
    componentFactoryResolver: ComponentFactoryResolver,
    private service: DeepLearningService,
    private el: ElementRef
  ) {
    super(componentFactoryResolver);
  }

  ngOnInit() {
    const productDetails = this.service.getProductDetails();
    this.data = productDetails.functionalities;
  }

}
