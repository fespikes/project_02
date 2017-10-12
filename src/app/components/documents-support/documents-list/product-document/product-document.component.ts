import { Component, OnInit } from '@angular/core';

import { ProductListComponent } from './product-list/product-list.component';

import { DocumentAPIService } from '../../services/document.api.service';
import { DocumentUtilService } from '../../services/document.util.service';

@Component({
  selector: 'tdc-product-document',
  templateUrl: './product-document.component.html',
  styleUrls: ['./product-document.component.sass']
})

export class ProductDocumentComponent implements OnInit {
  docsFolderList = [];

  constructor(
    private documentAPIService: DocumentAPIService,
    private documentUtilService: DocumentUtilService
  ) {

  }

  ngOnInit() {
    this.getDocsFolder();

  }

  getDocsFolder() {
    this.documentAPIService.getTileDocs().subscribe(
      result => {
        this.docsFolderList = this.documentUtilService.addDocsVersions(result);
        console.log('this.docsFolderList=', this.docsFolderList);
      }
    );
  }
}
