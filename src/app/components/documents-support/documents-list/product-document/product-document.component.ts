import { Component, OnInit } from '@angular/core';

import { DocumentAPIService } from '../../services/document.api.service';
import { DocumentUtilService } from '../../services/document.util.service';
import { MessageService } from 'app/tui';
import { PRODUCT_CATEGORIES } from '../../documents-support.model';

@Component({
  selector: 'tdc-product-document',
  templateUrl: './product-document.component.html',
  styleUrls: ['./product-document.component.sass'],
})

export class ProductDocumentComponent implements OnInit {

  docsFolderList = [];
  selectedDocsList = [];
  selectedProduct = '';
  productCategory = PRODUCT_CATEGORIES;

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
        const argodbFolderList = docs.filter(doc => doc.id.indexOf(this.productCategory.ARGODB) === 0);
        const stellarFolderList = docs.filter(doc => doc.id.indexOf(this.productCategory.STELLARDB) === 0);
        this.docsFolderList = [
          this.documentUtilService.addDocsVersions(tdhFolderList),
          this.documentUtilService.addDocsVersions(sophonFolderList),
          this.documentUtilService.addDocsVersions(argodbFolderList),
          this.documentUtilService.addDocsVersions(stellarFolderList),
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
    const categoryIndex = this.docsFolderList.findIndex(docs => docs.some(doc => doc.id.indexOf(category) === 0));
    this.selectedDocsList = this.docsFolderList[categoryIndex];
  }
}
