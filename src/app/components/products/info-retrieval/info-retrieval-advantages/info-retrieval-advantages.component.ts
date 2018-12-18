import { Component, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { AdvantagesComponent } from '../../common/components/advantages/advantages.component'
import { InfoRetrievalService } from '../info-retrieval.service';

@Component({
  selector: 'info-retrieval-advantages',
  templateUrl: '../../common/components/advantages/advantages.component.html',
})
export class InfoRetrievalAdvantagesComponent extends AdvantagesComponent {

  constructor(
    componentFactoryResolver: ComponentFactoryResolver,
    private service: InfoRetrievalService,
    private el: ElementRef 
  ) {
    super(componentFactoryResolver);
  }

  ngOnInit() {
    const productDetails = this.service.getProductDetails();
    this.data = productDetails.advantages;
  }
}