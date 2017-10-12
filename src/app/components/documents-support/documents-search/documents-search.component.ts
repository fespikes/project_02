import { Component, OnInit } from '@angular/core';

import { DocumentUtilService } from '../services/document.util.service';
import { DocumentAPIService } from '../services/document.api.service';
import { DocumentResService } from '../services/document.res.service';

import { Router } from '@angular/router';

@Component({
  templateUrl: './documents-search.component.html',
  styleUrls: ['./documents-search.component.sass']
})

export class DocumentsSearchComponent implements OnInit {
  crumbItems = [];
  treeModel = [];
  docsList = [];

  constructor(
    private documentUtilService: DocumentUtilService,
    private documentAPIService: DocumentAPIService,
    private documentResService: DocumentResService,
    private router: Router
  ) {

  }

  ngOnInit() {
    let docsType = this.documentUtilService.getDocsType(window.location.hash);
    this.crumbItems = this.documentResService.getDocsCrumb(docsType, '');
    this.getTreeDocs();
  }

  getTreeDocs() {
    this.documentAPIService.getTreeDocs().subscribe(
      result => {
        console.log('result-reverse=', result);
        this.treeModel = this.documentUtilService.initSearchTree(result);
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
    let searchParams = this.documentUtilService.makeSearchParams(keyword);
    this.documentAPIService.docsSearch(searchParams).subscribe(
      result => {
        console.log('result-search=', result);
        this.docsList = result;
      }
    );
  }

  onSelectChange(entity) {
    console.log('entity=', entity);
  }

  listItemClick(doc) {
    console.log('doc===', doc);
    this.router.navigate([`/docs-detail/${doc.document.id}`]);
  }
}
