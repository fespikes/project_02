import { Component, OnInit } from '@angular/core';

import { BreadcrumbComponent } from '../common/breadcrumb/breadcrumb.component';
import { SearchComponent } from '../common/search/search.component';

import { DocumentUtilService } from '../services/document.util.service';
import { DocumentAPIService } from '../services/document.api.service';

@Component({
  templateUrl: './documents-search.component.html',
  styleUrls: ['./documents-search.component.sass']
})

export class DocumentsSearchComponent implements OnInit {
  crumbItems = [];
  constructor(
    private documentUtilService: DocumentUtilService,
    private documentAPIService: DocumentAPIService
  ) {

  }

  ngOnInit() {
    let docsType = this.documentUtilService.getDocsType(window.location.hash);
    this.crumbItems = this.documentUtilService.getDocsCrumb(docsType, '');

    //this.getDocsFolder().substribe();
  }

  //documentSearch() {
  //  console.log('document search...');
  //  return this.documentSearchService.searchDocs().map(
  //    result => {
  //      console.log('result==', result);
  //    }
  //  );
  //  this.documentSearchService.searchDocs();
  //}

  //getDocsFolder() {
  //  return this.documentSearchService.getDocsFolder().map(
  //    result => {
  //      console.log(result);
  //    }
  //  );
  //}
}
