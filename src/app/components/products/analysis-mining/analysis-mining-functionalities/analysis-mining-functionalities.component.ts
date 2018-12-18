import { Component, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { FunctionalitiesComponent } from '../../common/components/functionalities/functionalities.component';
import { AnalysisMiningService } from '../analysis-mining.service';

@Component({
  selector: 'analysis-mining-functionalities',
  templateUrl: '../../common/components/functionalities/functionalities.component.html',
})
export class AnalysisMiningFunctionalitiesComponent extends FunctionalitiesComponent /*implements OnDestroy */{

  constructor(
    componentFactoryResolver: ComponentFactoryResolver,
    private service: AnalysisMiningService,
    private el: ElementRef
  ) {
    super(componentFactoryResolver);
  }

  ngOnInit() {
    const productDetails = this.service.getProductDetails();
    this.data = productDetails.functionalities;
  }

}
