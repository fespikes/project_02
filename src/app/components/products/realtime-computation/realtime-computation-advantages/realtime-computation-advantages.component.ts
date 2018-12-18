import { Component, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { AdvantagesComponent } from '../../common/components/advantages/advantages.component'
import { RealtimeComputationService } from '../realtime-computation.service';

@Component({
  selector: 'realtime-computation-advantages',
  templateUrl: '../../common/components/advantages/advantages.component.html',
})
export class RealtimeComputationAdvantagesComponent extends AdvantagesComponent {

  constructor(
    componentFactoryResolver: ComponentFactoryResolver,
    private service: RealtimeComputationService,
    private el: ElementRef 
  ) {
    super(componentFactoryResolver);
  }

  ngOnInit() {
    const productDetails = this.service.getProductDetails();
    this.data = productDetails.advantages;

  }
}
