import { Component, OnInit } from '@angular/core';

import { BreadcrumbComponent } from '../common/breadcrumb/breadcrumb.component';
import { SearchComponent } from '../common/search/search.component';

import { DocumentUtilService } from '../services/document.util.service';
import { DocumentAPIService } from '../services/document.api.service';

import { Router } from '@angular/router';

@Component({
  templateUrl: './documents-search.component.html',
  styleUrls: ['./documents-search.component.sass']
})

export class DocumentsSearchComponent implements OnInit {
  crumbItems = [];
  treeModel = [];

  constructor(
    private documentUtilService: DocumentUtilService,
    private documentAPIService: DocumentAPIService,
    private router: Router
  ) {

  }

  ngOnInit() {
    let docsType = this.documentUtilService.getDocsType(window.location.hash);
    this.crumbItems = this.documentUtilService.getDocsCrumb(docsType, '');
    this.getTreeDocs();
  }

  getTreeDocs() {
    this.documentAPIService.getTreeDocs().subscribe(
      result => {
        this.treeModel = result;
      }
    );
  }

  expandAll() {
    this.treeModel = this.documentUtilService.traversalTree(this.treeModel, true);
  }

  collapseAll() {
    this.treeModel = this.documentUtilService.traversalTree(this.treeModel, false);
  }

  documentSearch(keyword) {
    this.router.navigate([`/documents-support/docs-search/${keyword}`]);
  }

  onSelectChange(entity) {
    console.log('entity=', entity);
  }
}
