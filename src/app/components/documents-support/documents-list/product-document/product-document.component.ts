import { Component, OnInit } from '@angular/core';

import { DocumentAPIService } from '../../services/document.api.service';
import { DocumentUtilService } from '../../services/document.util.service';
import { MessageService } from '../../../../tui';

@Component({
  selector: 'tdc-product-document',
  templateUrl: './product-document.component.html',
  styleUrls: ['./product-document.component.sass'],
})

export class ProductDocumentComponent implements OnInit {
  productCategory = {
    TDH: 'TDH',
    SOPHON: 'SOPHON',
  };
  docsFolderList = [];
  selectedDocsList = [];
  selectedProduct = '';

  constructor(
    private documentAPIService: DocumentAPIService,
    private documentUtilService: DocumentUtilService,
    private messageService: MessageService,
  ) {

  }

  ngOnInit() {
    this.getProductDocs('document');
    this.selectedProduct = this.productCategory.TDH;
  }

  getProductDocs(tag) {
    this.documentAPIService.getDocuments(tag, false).subscribe(
      docs => {
        const TdhDocType = ['TDH-PLATFORM', 'TDH-DEV_SUITE', 'TDH-OPS'];
        const tdhFolderList = [
          docs.filter(doc => doc.id.indexOf(TdhDocType[0]) === 0)[0],
          docs.filter(doc => doc.id.indexOf(TdhDocType[1]) === 0)[0],
          docs.filter(doc => doc.id.indexOf(TdhDocType[2]) === 0)[0],
        ];
        const sophonFolderList = docs.filter(doc => doc.id.indexOf(this.productCategory.SOPHON) === 0);
        this.docsFolderList = [
          this.documentUtilService.addDocsVersions(tdhFolderList),
          this.documentUtilService.addDocsVersions(sophonFolderList),
        ];
        this.selectedDocsList = this.docsFolderList[0];
      },
      error => {
        this.messageService.error(error.message);
      },
    );
  }

  selectProduct(category) {
    this.selectedProduct = category;
    this.selectedDocsList = category === this.productCategory.TDH ? this.docsFolderList[0] : this.docsFolderList[1];
  }
}
