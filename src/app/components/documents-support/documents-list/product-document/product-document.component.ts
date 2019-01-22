import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DocumentAPIService } from '../../services/document.api.service';
import { DocumentUtilService } from '../../services/document.util.service';
import { MessageService } from 'app/tui';
import { PRODUCT_CATEGORIES, DocModule } from '../../documents-support.model';

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
    private route: ActivatedRoute,
    private router: Router,
  ) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe((param) => {
      if (param && param.category) {
        this.selectedProduct = param.category;
        if (!this.docsFolderList.length) {
          this.getProductDocs(param.category);
        } else {
          const categoryIndex = this.docsFolderList.findIndex(docs => docs.some(doc => doc.id.indexOf(param.category) === 0));
          this.selectedDocsList = this.docsFolderList[categoryIndex];
        }
      } else {
        this.router.navigate(['/documents-support/docs/products'], {queryParams: {category: this.productCategory.TDH}});
      }
    });
  }

  getProductDocs(category: string = this.productCategory.TDH) {
    this.documentAPIService.getDocuments('document', false).subscribe(
      (docs: DocModule[]) => {
        const tdhFolderList = this.getSortTDHDocs(docs);
        const argodbFolderList = this.getSortArgoDBDocs(docs);
        const sophonFolderList = docs.filter(doc => doc.id.indexOf(this.productCategory.SOPHON) === 0);
        const stellarFolderList = docs.filter(doc => doc.id.indexOf(this.productCategory.STELLARDB) === 0);
        this.docsFolderList = [
          this.documentUtilService.addDocsVersions(tdhFolderList),
          this.documentUtilService.addDocsVersions(sophonFolderList),
          this.documentUtilService.addDocsVersions(argodbFolderList),
          this.documentUtilService.addDocsVersions(stellarFolderList),
        ];
        const categoryIndex = this.docsFolderList.findIndex(_docs => _docs.some(doc => doc.id.indexOf(category) === 0));
        this.selectedDocsList = this.docsFolderList[categoryIndex];
      },
      error => {
        this.messageService.error(error.message);
      },
    );
  }

  getSortTDHDocs(docs: DocModule[]) {
    const docType = ['TDH-PLATFORM', 'TDH-DEV_SUITE', 'TDH-OPS'];
    const docList = [
      docs.filter(doc => doc.id.indexOf(docType[0]) === 0)[0],
      docs.filter(doc => doc.id.indexOf(docType[1]) === 0)[0],
      docs.filter(doc => doc.id.indexOf(docType[2]) === 0)[0],
    ];

    return docList;
  }

  getSortArgoDBDocs(docs: DocModule[]) {
    const docType = ['ARGODB-PLATFORM', 'ARGODB-OPS'];
    const docList = [
      docs.filter(doc => doc.id.indexOf(docType[0]) === 0)[0],
      docs.filter(doc => doc.id.indexOf(docType[1]) === 0)[0],
    ];

    return docList;
  }

  selectProduct(category: string) {
    this.router.navigate(['/documents-support/docs/products'], {queryParams: {category: category}});
  }
}
