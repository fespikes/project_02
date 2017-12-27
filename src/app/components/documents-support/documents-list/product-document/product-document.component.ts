import { Component, OnInit } from '@angular/core';

import { DocumentAPIService } from '../../services/document.api.service';
import { DocumentUtilService } from '../../services/document.util.service';

@Component({
  selector: 'tdc-product-document',
  templateUrl: './product-document.component.html',
  styleUrls: ['./product-document.component.sass'],
})

export class ProductDocumentComponent implements OnInit {
  docsFolderList = [];

  constructor(
    private documentAPIService: DocumentAPIService,
    private documentUtilService: DocumentUtilService,
  ) {

  }

  ngOnInit() {
    this.getProductDocs('document');
  }

  getProductDocs(tag) {
    this.documentAPIService.getDocuments(tag, false).subscribe(
      result => {
        this.docsFolderList = this.documentUtilService.addDocsVersions(result);
      },
    );
  }
}
