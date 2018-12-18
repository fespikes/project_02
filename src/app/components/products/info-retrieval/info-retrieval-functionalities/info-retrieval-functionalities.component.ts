import { Component, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { FunctionalitiesComponent } from '../../common/components/functionalities/functionalities.component';
import { InfoRetrievalService } from '../info-retrieval.service';

@Component({
  selector: 'info-retrieval-functionalities',
  templateUrl: '../../common/components/functionalities/functionalities.component.html',
})
export class InfoRetrievalFunctionalitiesComponent extends FunctionalitiesComponent /*implements OnDestroy */{

  constructor(
    componentFactoryResolver: ComponentFactoryResolver,
    private service: InfoRetrievalService,
    private el: ElementRef 
  ) {
    super(componentFactoryResolver);
  }

  ngOnInit() {
    const productDetails = this.service.getProductDetails();
    this.data = productDetails.functionalities;
  }

}
