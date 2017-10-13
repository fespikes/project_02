import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { DocumentUtilService } from '../services/document.util.service';
import { DocumentAPIService } from '../services/document.api.service';
import { DocumentResService } from '../services/document.res.service';

import { Pagination } from '../../../tui/pagination/pagination.component';

@Component({
  templateUrl: './documents-search.component.html',
  styleUrls: ['./documents-search.component.sass']
})

export class DocumentsSearchComponent implements OnInit {
  crumbItems = [];
  treeModel = [];
  docsList = [];
  docsCount = 0;
  keyword = '';
  pagination = new Pagination();

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

    this.keyword = this.documentResService.getKeyword();
    this.onDocumentSearch(this.keyword);
  }

  onDocumentSearch(keyword) {
    this.keyword = keyword;
    this.documentResService.setKeyword(keyword);
    this.router.navigate([`/documents-support/docs-search`]);
    let searchParams = this.documentUtilService.makeSearchParams(keyword, this.pagination);
    this.documentSearch(searchParams);
  }

  getTreeDocs() {
    this.documentAPIService.getTreeDocs().subscribe(
      result => {
        this.treeModel = this.documentUtilService.initSearchTree(result);
      }
    );
  }

  documentSearch(params) {
    this.documentAPIService.docsSearch(params).subscribe(
      result => {
        this.docsList = result;
        this.makePaginationParams(result);
        //if(this.docsList.length > 0) {
        //
        //  //this.docsCount = this.docsList[0].total;
        //  //let docAbsDom = document.getElementById('doc-abs-container');
        //  //docAbsDom.innerHTML = this.docsList[0].summary;
        //}
      }
    );
  }

  makePaginationParams(list) {
    if(list.length > 0) {
      this.pagination = {
        page: this.pagination.page,
        size: this.pagination.size,
        total: list[0].total
      };
    }
  }

  paginationChange() {
    console.log('this.pagination=', this.pagination);
    let searchParams = this.documentUtilService.makeSearchParams(this.keyword, this.pagination);
    this.documentSearch(searchParams);
  }

  expandAll() {
    this.treeModel = this.documentUtilService.traversalTree(this.treeModel, true);
  }

  collapseAll() {
    this.treeModel = this.documentUtilService.traversalTree(this.treeModel, false);
  }

  onSelectChange(entity) {
    console.log('entity=', entity);
  }

  listItemClick(doc) {
    this.router.navigate([`/docs-detail/${doc.document.id}`]);
  }
}
