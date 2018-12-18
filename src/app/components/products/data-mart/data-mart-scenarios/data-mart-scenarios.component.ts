import { Component, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { ScenariosComponent } from '../../common/components/scenarios/scenarios.component'
import { DataMartService } from '../data-mart.service';

@Component({
  selector: 'data-mart-scenarios',
  templateUrl: '../../common/components/scenarios/scenarios.component.html',
})
export class DataMartScenariosComponent extends ScenariosComponent{

  constructor(
    componentFactoryResolver: ComponentFactoryResolver,
    private dataMartService: DataMartService
  ) {
    super(componentFactoryResolver);
  }

  ngOnInit() {
    const productDetails = this.dataMartService.getProductDetails();
    this.data = productDetails.scenarios;
  }

}
