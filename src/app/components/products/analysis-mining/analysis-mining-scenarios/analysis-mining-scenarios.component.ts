import { Component, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { ScenariosComponent } from '../../common/components/scenarios/scenarios.component'
import { AnalysisMiningService } from '../analysis-mining.service';

@Component({
  selector: 'analysis-mining-scenarios',
  templateUrl: '../../common/components/scenarios/scenarios.component.html',
})
export class AnalysisMiningScenariosComponent extends ScenariosComponent{

  constructor(
    componentFactoryResolver: ComponentFactoryResolver,
    private service: AnalysisMiningService
  ) {
    super(componentFactoryResolver);
  }

  ngOnInit() {
    const productDetails = this.service.getProductDetails();
    this.data = productDetails.scenarios;
  }

}
