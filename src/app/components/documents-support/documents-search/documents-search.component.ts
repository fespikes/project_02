import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { DocumentUtilService } from '../services/document.util.service';
import { DocumentAPIService } from '../services/document.api.service';
import { DocumentResService } from '../services/document.res.service';
import { DocumentSearchService } from './documents-search.service';
import { MessageService } from '../../../tui';

import { Pagination } from '../../../tui/pagination/pagination.component';

@Component({
  templateUrl: './documents-search.component.html',
  styleUrls: ['./documents-search.component.sass'],
})

export class DocumentsSearchComponent implements OnInit {
  crumbItems = [];
  treeModel = [];
  docsList = [];
  docsCount = 0;
  keyword = '';
  treeLevel = 1;
  treeType = 'search-tree';
  selectedDocs = [];
  pagination = new Pagination();

  constructor(
    private documentUtilService: DocumentUtilService,
    private documentAPIService: DocumentAPIService,
    private documentResService: DocumentResService,
    private documentSearchService: DocumentSearchService,
    private messageService: MessageService,
    private router: Router,
  ) {

  }

  ngOnInit() {
    this.pagination.size = 10; // change default pageSize value 10
    const docsType = this.documentUtilService.getDocsType(window.location.hash);
    this.crumbItems = this.documentResService.getDocsCrumb(docsType, '');
    this.getTreeModel();

    this.keyword = this.documentResService.getKeyword();
    this.onDocumentSearch(this.keyword);
    this.documentUtilService.scrollScreenTop();
  }

  onDocumentSearch(keyword) {
    this.keyword = keyword;
    this.documentResService.setKeyword(keyword);
    this.router.navigate([`/documents-support/docs-search`]);
    const searchParams = this.documentSearchService.makeSearchParams(
      keyword, this.pagination, this.selectedDocs);
    this.documentSearch(searchParams);
  }

  getTreeModel() {
    this.documentAPIService.getSearchTreeModel().subscribe(
      result => {
        this.treeModel = this.documentSearchService.initSearchTree(result);
      },
      error => {
        this.messageService.error(error.message || error.reason || error.error);
      },
    );
  }

  documentSearch(params) {
    this.documentAPIService.docsSearch(params).subscribe(
      result => {
        this.docsList = result.results;
        this.docsCount = result.total;
        this.pagination = this.documentSearchService.makePaginationParams(
          this.docsCount, this.pagination);
      },
      error => {
        this.messageService.error(error.message || error.reason || error.error);
      },
    );
  }

  paginationChange() {
    const searchParams = this.documentSearchService.makeSearchParams(
      this.keyword, this.pagination, this.selectedDocs);
    this.documentSearch(searchParams);
    this.documentUtilService.scrollScreenTop();
  }

  expandAll() {
    this.treeModel = this.documentSearchService.traversalTree(
      this.treeModel, 'expanded', true);
  }

  collapseAll() {
    this.treeModel = this.documentSearchService.traversalTree(
      this.treeModel, 'expanded', false);
  }

  onSelectChange(node) {
    if (!node.clickToggle) { // click toggle icon and node name
      node.expanded = true;
    }
    if (node.checkboxChanged) { // click checkbox
      const searchState = this.documentSearchService.makeSelectedDocs(
        node, this.selectedDocs, this.treeModel);
      this.selectedDocs = searchState.selectedDocs;
      this.treeModel = searchState.treeModel;
      const searchParams = this.documentSearchService.makeSearchParams(
        this.keyword, this.pagination, this.selectedDocs);
      this.documentSearch(searchParams);
      this.documentUtilService.scrollScreenTop();
    }
  }

  listItemClick(doc) {
    this.documentResService.setKeyNeedRender(true);
    this.documentResService.setAnchorId(doc.anchor);
    this.documentResService.setSectionId(doc.document.filename);
    this.router.navigate([`/documents-support/docs-detail/${doc.document.id}`]);
  }
}
