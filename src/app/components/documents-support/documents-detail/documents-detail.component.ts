import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';

import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { DocumentAPIService } from '../services/document.api.service';
import { DocumentUtilService } from '../services/document.util.service';
import { DocumentResService } from '../services/document.res.service';
import { DocumentSearchService } from '../documents-search/documents-search.service';
import { MessageService } from '../../../tui';

@Component({
  selector: 'tdc-documents-detail',
  templateUrl: './documents-detail.component.html',
  styleUrls: ['./documents-detail.component.sass'],
})

export class DocumentsDetailComponent implements OnInit, OnDestroy {
  @HostBinding('class.tdc-documents-detail') layout = true;

  pathParams = {
    category: '',
    version: '',
    component: '',
    section: '',
  };
  crumbItems = [];
  treeModel = [];
  treeLevel = 1;
  docName = '';

  RELA_DIS_MAIN_TITLE = 10;
  RELA_DIS_SUB_TITLE = -40;
  DOC_DETAIL = 'doc-detail';
  DOC_TREE = 'doc-tree';
  CLICK_MENU = 'click-menu';
  CLICK_ANCHOR = 'click-anchor';

  constructor(
    private documentAPIService: DocumentAPIService,
    private documentUtilService: DocumentUtilService,
    private documentResService: DocumentResService,
    private documentSearchService: DocumentSearchService,
    private messageService: MessageService,
  ) {

  }

  ngOnInit() {
    this.initPage();
    this.onClickListener();
  }

  initPage() {
    this.docName = this.documentResService.getDocName();
    this.crumbItems = this.documentResService.getDocsCrumb(
      this.DOC_DETAIL, this.docName,
    );
    this.getDocTree();
    this.getDocDetail();
    this.documentUtilService.setBodyWidthAttribute('100%');
    this.documentUtilService.scrollScreenTop();
  }

  getDocTree() {
    const url = this.getPath(this.DOC_TREE);
    const anchorId = this.documentResService.getAnchorId();
    const sectionId = this.documentResService.getSectionId();
    this.documentAPIService.getDocTree(url).subscribe(
      result => {
        this.treeModel = result.nav.children;
        this.treeModel = this.documentSearchService.initTreeSelectedState(
          this.treeModel, anchorId, sectionId,
        );
      },
      error => {
        this.messageService.error(error.message);
      },
    );
  }

  getDocDetail() {
    const url = this.getPath(this.DOC_DETAIL);
    this.documentAPIService.getDocDetail(url).subscribe(
      result => {
        this.documentUtilService.appendDocContent(result.content);
        this.documentUtilService.hideDocElement('header');
        this.anchorDocContent();
        // this.highLightKey('add'); // exist issue in some case
      },
      error => {
        this.messageService.error(error.message);
      },
    );
  }

  highLightKey(operation) {
    const keyNeedRender = this.documentResService.getKeyNeedRender();
    if (keyNeedRender) {
      this.documentSearchService.keyHighLight(
        'content', this.documentResService.getKeyword(), '#ffff00', operation,
      );
    }
  }

  anchorDocContent() {
    const anchorId = this.documentResService.getAnchorId();
    const anchorNode = this.documentSearchService.findTreeNode(
      anchorId, this.treeModel,
    );
    const distance = anchorNode.level < 3 ? this.RELA_DIS_MAIN_TITLE
      : this.RELA_DIS_SUB_TITLE;
    this.documentSearchService.anchorDocContent(anchorId, distance);
  }

  getPath(type) {
    const sectionId = this.documentResService.getSectionId();
    this.pathParams = this.documentUtilService.getDocDetailUrlParams(
      window.location.hash, sectionId);
    let path;
    switch (type) {
      case this.DOC_TREE:
        path = this.documentUtilService.makeDocTreeUrl(this.pathParams);
        break;
      case this.DOC_DETAIL:
        path = this.documentUtilService.makeDocDetailUrl(this.pathParams);
        break;
      default:
        break;
    }
    return path;
  }

  onSelectChange(node) {
    this.updateTreeState(node);
    this.documentResService.setLevelId(node.id, node.level);
    if (this.documentResService.getKeyNeedRender()) {
      this.highLightKey('remove');
      this.documentResService.setKeyNeedRender(false);
    }
    this.showDocContentByLevel(node, this.CLICK_MENU, this);
  }

  updateTreeState(node) {
    if (!node.clickToggle) {
      node.expanded = true;
    }
    this.treeModel = this.documentSearchService.removeSelectedState(this.treeModel);
    node.selected = true;
  }

  showDocContentByLevel(node, clickType, _this) {
    if (node.level <= 2) { // first、second folder request api
      clickType === this.CLICK_MENU ? _this.getDocDetail() : _this.initPage();
    }else if (node.level >= 3) { // third、fourth ... folder anchor content
      if (_this.documentSearchService.hasSameSecondAncestor(
          node, _this.treeModel, _this.documentResService.getSectionId())) {
        _this.anchorDocContent();
      }else {
        const secondNodeId = _this.documentSearchService.getSecondLevelNodeId(
          _this.treeModel, node,
        );
        _this.documentResService.setSectionId(secondNodeId);
        clickType === this.CLICK_MENU ? _this.getDocDetail() : _this.initPage();
      }
    }
  }

  onClickListener() {
    const self = this;
    document.onclick = function(event){
      const target = event.target as any;
      if (target.attributes['class']
        && target.attributes['class'].value === 'document-link') {

        const domId = target.attributes['id'].value;
        const anchorId = domId.substring(5, domId.length);
        self.documentResService.setAnchorId(anchorId);
        const domEle = document.getElementById(domId);
        if (!domEle) { // first search dom in current page
          const domNode = self.documentSearchService.findTreeNode(
            anchorId, self.treeModel);
          if (domNode && domNode.id) {
            self.documentResService.setLevelId(domNode.id, domNode.level);
            self.showDocContentByLevel(domNode, self.CLICK_ANCHOR, self);
          }
        }else { // then search dom in menu tree
          self.documentSearchService.anchorDocContent(anchorId, self.RELA_DIS_SUB_TITLE);
        }
      }
    };
  }

  ngOnDestroy() {
    this.documentUtilService.setBodyWidthAttribute('100vw');
    document.onclick = null;
  }
}
