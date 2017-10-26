import { Component, OnInit } from '@angular/core';

import { AnalysisMiningService } from './analysis-mining.service';

@Component({
  selector: 'tdc-analysis-mining',
  templateUrl: './analysis-mining.component.html',
  styleUrls: ['./analysis-mining.component.sass']
})
export class AnalysisMiningComponent implements OnInit {

  productDetails: any;

  constructor(private service: AnalysisMiningService) {

  }

  ngOnInit() {
    const productDetails = this.service.getProductDetails();
    this.productDetails = productDetails;
  }

  ngOnDestroy() {
  }


}
