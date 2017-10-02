import { Component, OnInit } from '@angular/core';

import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { SearchComponent } from '../search/search.component';

import { DocumentUtilService } from '../services/document.util.service';
import { DocumentSearchService } from '../services/document.search.service';

@Component({
  templateUrl: './documents-search.component.html',
  styleUrls: ['./documents-search.component.sass']
})

export class DocumentsSearchComponent implements OnInit {
  crumbItems = [];
  constructor(
    private documentUtilService: DocumentUtilService,
    private documentSearchService: DocumentSearchService
  ) {

  }

  ngOnInit() {
    let docsType = this.documentUtilService.getDocsType(window.location.hash);
    this.crumbItems = this.documentUtilService.getDocsCrumb(docsType);

    //this.getDocsFolder().substribe();
  }

  documentSearch() {
    console.log('document search...');
    //return this.documentSearchService.searchDocs().map(
    //  result => {
    //    console.log('result==', result);
    //  }
    //);
    this.documentSearchService.searchDocs();
  }

  //getDocsFolder() {
  //  return this.documentSearchService.getDocsFolder().map(
  //    result => {
  //      console.log(result);
  //    }
  //  );
  //}
}
