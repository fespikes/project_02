import { Component, OnInit, HostBinding } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { DocumentAPIService } from '../services/document.api.service';
import { DocumentUtilService } from '../services/document.util.service';
import { DocumentResService } from '../services/document.res.service';

@Component({
  selector: 'tdc-documents-detail',
  templateUrl: './documents-detail.component.html',
  styleUrls: ['./documents-detail.component.sass']
})

export class DocumentsDetailComponent implements OnInit {
  pathParams = {
    category: '',
    version: '',
    component: '',
    section: ''
  };
  crumbItems = [];
  treeModel = [];
  treeLevel = 0;

  constructor(
    private documentAPIService: DocumentAPIService,
    private documentUtilService: DocumentUtilService,
    private documentResService: DocumentResService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.crumbItems = this.documentResService.getDocsCrumb(
      'docs-detail', this.documentUtilService.getModuleName(window.location.hash));
    this.getDocTree();
    this.getDocDetail();
  }

  getDocTree() {
    let url = this.getPath('docTree');
    this.documentAPIService.getDocTree(url).subscribe(
      result =>{
        this.treeModel = result.nav.children;
      }
    );
  }

  getDocDetail() {
    let url = this.getPath('docDetail');
    this.documentAPIService.getDocDetail(url).subscribe(
      result =>{
        this.documentUtilService.appendDocContent(result.content);
      }
    );
  }

  getPath(type) {
    let sectionId = this.documentResService.getSectionId();
    this.pathParams = this.documentUtilService.getDocDetailUrlParams(window.location.hash, sectionId);
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
    this.documentResService.setSectionId(node.id);
    this.router.navigate([`/docs-detail/${this.pathParams.category}/${this.pathParams.version}/${this.pathParams.component}`]);
    this.getDocDetail();
  }
}
