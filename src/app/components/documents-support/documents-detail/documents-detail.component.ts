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
    this.getDocDetail();
  }

  getDocDetail() {

    let url = this.getApiPath();
    this.documentAPIService.getDocDetail(url).subscribe(
      result =>{
        console.log('result=', result);
        this.treeModel[0] = result.nav;
        this.documentUtilService.appendDocContent(result.content);
        //this.documentUtilService.appendDocCssSheet(result.style);
      }
    );
  }

  getApiPath() {
    let sectionName = this.documentResService.getSectionName();
    console.log('sectionName=', sectionName);
    this.pathParams = this.documentUtilService.getDocDetailUrlParams(window.location.hash, sectionName);
    let url = this.documentUtilService.makeDocDetailUrl(this.pathParams);
    return url;
  }

  onSelectChange(node) {
    console.log('node==', node);
    this.documentResService.setSectionName(node.id);
    let params = this.pathParams;
    this.router.navigate([`/docs-detail/${params.category}/${params.version}/${params.component}`]);
    this.getDocDetail();
  }
}
