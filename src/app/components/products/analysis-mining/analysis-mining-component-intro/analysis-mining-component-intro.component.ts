import { Component, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { ComponentIntroComponent } from '../../common/components/component-intro/component-intro.component';
import { AnalysisMiningService } from '../analysis-mining.service';

@Component({
  selector: 'analysis-mining-component-intro',
  templateUrl: '../../common/components/component-intro/component-intro.component.html',
})
export class AnalysisMiningComponentIntroComponent extends ComponentIntroComponent {

  constructor(
    componentFactoryResolver: ComponentFactoryResolver,
    private service: AnalysisMiningService
  ) {
    super(componentFactoryResolver);
  }

  ngOnInit() {
    const productDetails = this.service.getProductDetails();
    this.data = productDetails.componentIntro;
  }

}
