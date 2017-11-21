import { Component, OnInit, HostBinding } from '@angular/core';

import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { DocumentAPIService } from '../services/document.api.service';
import { DocumentUtilService } from '../services/document.util.service';
import { DocumentResService } from '../services/document.res.service';
import { DocumentSearchService } from '../documents-search/documents-search.service';
import {timeout} from "rxjs/operator/timeout";

@Component({
  selector: 'tdc-documents-detail',
  templateUrl: './documents-detail.component.html',
  styleUrls: ['./documents-detail.component.sass']
})

export class DocumentsDetailComponent implements OnInit {
  @HostBinding('class.tdc-documents-detail') layout = true;

  pathParams = {
    category: '',
    version: '',
    component: '',
    section: ''
  };
  crumbItems = [];
  treeModel = [];
  treeLevel = 1;
  docName = '';

  RELA_DIS_MAIN_TITLE = 140;
  RELA_DIS_SUB_TITLE = 10;
  DOC_DETAIL = 'doc-detail';
  DOC_TREE = 'doc-tree';

  constructor(
    private documentAPIService: DocumentAPIService,
    private documentUtilService: DocumentUtilService,
    private documentResService: DocumentResService,
    private documentSearchService: DocumentSearchService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.initPage();
    this.onClickListener();
  }

  initPage() {
    this.docName = this.documentUtilService.getModuleName(window.location.hash);
    this.crumbItems = this.documentResService.getDocsCrumb(
      this.DOC_DETAIL, this.docName
    );
    this.getDocTree();
    this.getDocDetail();
    this.documentUtilService.setBodyWidthAttribute('100%');
    this.documentUtilService.scrollScreenTop();
  }

  getDocTree() {
    const url = this.getPath(this.DOC_TREE);
    const anchorId = this.documentResService.getAnchorId();
    this.documentAPIService.getDocTree(url).subscribe(
      result => {
        this.treeModel = result.nav.children;
        this.treeModel = this.documentSearchService.initTreeSelectedState(
          this.treeModel, anchorId
        );
      }
    );
  }

  getDocDetail() {
    let url = this.getPath(this.DOC_DETAIL);
    this.documentAPIService.getDocDetail(url).subscribe(
      result =>{
        this.documentUtilService.appendDocContent(result.content);
        this.documentUtilService.hideDocElement('header');
        this.anchorDocContent();
        this.highLightKey('add');
        this.loadDocSheet();
      }
    );
  }

  highLightKey(operation) {
    const keyNeedRender = this.documentResService.getKeyNeedRender();
    if(keyNeedRender) {
      this.documentSearchService.keyHighLight(
        'content', this.documentResService.getKeyword(), '#ffff00', operation
      );
    }
  }

  loadDocSheet() {
    if(!this.documentResService.getDocLoaded()) {
      this.getDocSheet();
    }
    this.documentResService.setDocLoaded(true);
  }

  anchorDocContent() {
    const anchorId = this.documentResService.getAnchorId();
    const anchorNode = this.documentSearchService.findTreeNode(
      anchorId, this.treeModel
    );
    const distance = anchorNode<3 ? this.RELA_DIS_MAIN_TITLE
      :this.RELA_DIS_SUB_TITLE;
    this.documentSearchService.anchorDocContent(anchorId, distance);
  }

  getDocSheet() {
    this.documentAPIService.getDocSheet().subscribe(
      result => {
        this.documentUtilService.appendDocCssSheet(result._body);
      }
    );
  }

  getPath(type) {
    let sectionId = this.documentResService.getSectionId();
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
    if(this.documentResService.getKeyNeedRender()) {
      this.highLightKey('remove');
      this.documentResService.setKeyNeedRender(false);
    }
    this.showDocContentByLevel(node);
  }

  updateTreeState(node) {
    this.treeModel = this.documentSearchService.removeSelectedState(this.treeModel);
    node.selected = true;
  }

  showDocContentByLevel(node) {
    if(node.level <= 2) {//first、second folder request api
      this.getDocDetail();
    }else if(node.level >= 3) {//third、fourth ... folder anchor content
      if(this.documentSearchService.hasSameSecondAncestor(
          node, this.treeModel, this.documentResService.getSectionId())) {
        this.anchorDocContent();
      }else {
        const secondNodeId = this.documentSearchService.getSecondLevelNodeId(
          this.treeModel, node
        );
        this.documentResService.setSectionId(secondNodeId);
        this.getDocDetail();
      }
    }
  }

  onClickListener() {
    const self = this;
    document.onclick = function(event){
      const target = event.target as any;
      if(target.attributes['class']
        && target.attributes['class'].value === 'document-link') {

        const domId = target.attributes['id'].value;
        const anchorId = domId.substring(5, domId.length);
        self.documentResService.setAnchorId(anchorId);
        const domNode = self.documentSearchService.findTreeNode(
          anchorId, self.treeModel) as any;
        if(domNode.level && domNode.level > 2) {
          self.anchorDocContent();
        }else {
          self.documentResService.setSectionId(anchorId);
          self.initPage();
        }
      }
    }
  }

  ngOnDestroy() {
    this.documentUtilService.setBodyWidthAttribute('100vw');
    document.onclick = null;
  }
}
