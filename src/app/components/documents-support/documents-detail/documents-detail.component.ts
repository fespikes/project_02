import { Component, OnInit, HostBinding } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(
    private documentAPIService: DocumentAPIService,
    private documentUtilService: DocumentUtilService,
    private documentResService: DocumentResService,
    private documentSearchService: DocumentSearchService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.docName = this.documentUtilService.getModuleName(window.location.hash);
    this.crumbItems = this.documentResService.getDocsCrumb('docs-detail', this.docName);
    this.getDocTree();
    this.getDocDetail();
  }

  getDocTree() {
    const url = this.getPath('docTree');
    const sectionId = this.documentResService.getSectionId();
    this.documentAPIService.getDocTree(url).subscribe(
      result =>{
        this.treeModel = result.nav.children;
        this.treeModel = this.documentSearchService.initTreeSelectedState(
          this.treeModel, sectionId
        );
      }
    );
  }

  getDocDetail() {
    let url = this.getPath('docDetail');
    const sectionId = this.documentResService.getSectionId();
    this.documentAPIService.getDocDetail(url).subscribe(
      result =>{
        this.documentUtilService.appendDocContent(result.content);
        document.getElementById('header').style.display = 'none';
        this.documentSearchService.anchorDocContent(sectionId, this.RELA_DIS_MAIN_TITLE);
        this.documentSearchService.keyHighLight(
          'content', this.documentResService.getKeyword(), '#ffff00');
        if(!this.documentResService.getDocLoaded()) {
          this.getDocSheet();
        }
        this.documentResService.setDocLoaded(true);
      }
    );
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
      case 'docTree':
        path = this.documentUtilService.makeDocTreeUrl(this.pathParams);
        break;
      case 'docDetail':
        path = this.documentUtilService.makeDocDetailUrl(this.pathParams);
        break;
      default:
        break;
    }
    return path;
  }

  onSelectChange(node) {
    this.router.navigate([`/docs-detail/${this.pathParams.category}/${this.pathParams.version}/${this.pathParams.component}`]);
    if(node.level <= 2) {
      this.getDocDetail();
    }
  }
}
