import { Component, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { FunctionalitiesComponent } from '../../common/components/functionalities/functionalities.component';
import { RealtimeComputationService } from '../realtime-computation.service';

@Component({
  selector: 'realtime-computation-functionalities',
  templateUrl: '../../common/components/functionalities/functionalities.component.html',
})
export class RealtimeComputationFunctionalitiesComponent extends FunctionalitiesComponent /*implements OnDestroy */ {

  constructor(
    componentFactoryResolver: ComponentFactoryResolver,
    private service: RealtimeComputationService,
    private el: ElementRef
  ) {
    super(componentFactoryResolver);
  }

  ngOnInit() {
    const productDetails = this.service.getProductDetails();
    this.data = productDetails.functionalities;
  }

}
