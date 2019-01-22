import { Component, OnInit, OnDestroy } from '@angular/core';

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

export class DocumentsSearchComponent implements OnInit, OnDestroy {
  crumbItems = [];
  treeModel = [];
  docsList = [];
  docsCount = 0;
  keyword = '';
  treeLevel = 1;
  treeType = 'search-tree';
  selectedDocsParams = [];
  pagination = new Pagination();
  TREE_HEADER = 50;
  TREE_OPERATION = 80;

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
    this.crumbItems = this.documentResService.getDocsCrumb(docsType);
    this.getTreeModel();

    this.keyword = this.documentResService.getKeyword();
    this.onDocumentSearch(this.keyword);
    this.documentUtilService.scrollScreenTop();
    document.onscroll = this.scrollPositionChange.bind(this);
  }

  onDocumentSearch(keyword) {
    this.keyword = keyword;
    this.documentResService.setKeyword(keyword);
    this.router.navigate([`/documents-support/docs-search`]);
    const searchParams = this.documentSearchService.makeSearchAPIParams(
      keyword, this.pagination, this.selectedDocsParams);
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
    const searchParams = this.documentSearchService.makeSearchAPIParams(
      this.keyword, this.pagination, this.selectedDocsParams);
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
    if (node.checkboxChanged) { // click checkbox
      this.selectedDocsParams = this.documentSearchService.makeSelectedDocsParams(node, this.selectedDocsParams, this.treeModel);
      const searchParams = this.documentSearchService.makeSearchAPIParams(this.keyword, this.pagination, this.selectedDocsParams);
      this.documentSearch(searchParams);
      this.documentUtilService.scrollScreenTop();
    }
  }

  listItemClick(doc) {
    const docType = this.documentSearchService.getDocType(doc.document.id);
    this.documentResService.setKeyNeedRender(true);
    this.documentResService.setAnchorId(doc.anchor);
    this.documentResService.setSectionId(doc.document.filename);
    this.router.navigate([`/documents-support/docs-detail/${doc.document.id}`],
      {queryParams: {docType: docType, docName: doc.name}});
  }

  scrollPositionChange() {
    const treeSpace = Number(this.TREE_HEADER + this.TREE_OPERATION);
    this.documentUtilService.computeScrollPosition('search-menu-tree', treeSpace);
  }

  ngOnDestroy() {
    document.onscroll = null;
  }
}
