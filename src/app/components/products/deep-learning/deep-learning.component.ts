import { Component, OnInit } from '@angular/core';

import { DeepLearningService } from './deep-learning.service';

@Component({
  selector: 'tdc-deep-learning',
  templateUrl: './deep-learning.component.html',
  styleUrls: ['./deep-learning.component.sass']
})
export class DeepLearningComponent implements OnInit {

  productDetails: any;

  constructor(private service: DeepLearningService) {

  }

  ngOnInit() {
    const productDetails = this.service.getProductDetails();
    this.productDetails = productDetails;
  }

  ngOnDestroy() {
  }


}
