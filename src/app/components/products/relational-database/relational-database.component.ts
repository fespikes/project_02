import { Component, OnInit } from '@angular/core';

import { RelationalDatabaseService } from './relational-database.service';

@Component({
  selector: 'relational-database',
  templateUrl: './relational-database.component.html',
  styleUrls: ['./relational-database.component.sass']
})
export class RelationalDatabaseComponent implements OnInit {

  productDetails: any;

  constructor(private service: RelationalDatabaseService) {
  }

  ngOnInit() {
    const productDetails = this.service.getProductDetails();
    this.productDetails = productDetails;
  }

  ngOnDestroy() {
  }

}
