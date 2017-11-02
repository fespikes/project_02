import { Component, OnInit } from '@angular/core';

import { InfoRetrievalService } from './info-retrieval.service';

@Component({
  selector: 'info-retrieval',
  templateUrl: './info-retrieval.component.html',
  styleUrls: ['./info-retrieval.common.sass', './info-retrieval.component.sass']
})
export class InfoRetrievalComponent implements OnInit {

  productDetails: any;

  constructor(private service: InfoRetrievalService) {

  }

  ngOnInit() {
    const productDetails = this.service.getProductDetails();
    this.productDetails = productDetails;
  }

  ngOnDestroy() {
  }


}
