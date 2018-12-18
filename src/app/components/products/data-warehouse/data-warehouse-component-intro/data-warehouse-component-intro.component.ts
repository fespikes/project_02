import { Component, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { ComponentIntroComponent } from '../../common/components/component-intro/component-intro.component';
import { DataWarehouseService } from '../data-warehouse.service';

@Component({
  selector: 'data-warehouse-component-intro',
  templateUrl: '../../common/components/component-intro/component-intro.component.html',
})
export class DataWarehouseComponentIntroComponent extends ComponentIntroComponent {

  constructor(
    componentFactoryResolver: ComponentFactoryResolver,
    private service: DataWarehouseService
  ) {
    super(componentFactoryResolver);
  }

  ngOnInit() {
    const productDetails = this.service.getProductDetails();
    this.data = productDetails.componentIntro;
  }

}
