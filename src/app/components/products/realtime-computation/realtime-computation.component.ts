import { Component, OnInit } from '@angular/core';

import { RealtimeComputationService } from './realtime-computation.service';

@Component({
  selector: 'tdc-realtime-computation',
  templateUrl: './realtime-computation.component.html',
  styleUrls: ['./realtime-computation.component.sass']
})
export class RealtimeComputationComponent implements OnInit {

  productDetails: any;

  constructor(private service: RealtimeComputationService) {

  }

  ngOnInit() {
    const productDetails = this.service.getProductDetails();
    this.productDetails = productDetails;
  }

  ngOnDestroy() {
  }


}
