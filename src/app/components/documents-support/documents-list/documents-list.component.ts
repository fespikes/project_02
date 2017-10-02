import { Component, OnInit, HostBinding } from '@angular/core';

import { TabComponent } from '../../common/components/tab/tab.component';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

import { DocumentUtilService } from '../services/document.util.service';

@Component({
  selector: 'tdc-documents-list',
  templateUrl: './documents-list.component.html',
  styleUrls: ['./documents-list.component.sass']
})

export class DocumentsListComponent implements OnInit {
  crumbItems = [];
  tabItems = [];
  constructor(private documentUtilService: DocumentUtilService) {

  }

  ngOnInit() {

    let docsType = this.documentUtilService.getDocsType(window.location.hash);
    this.crumbItems = this.documentUtilService.getDocsCrumb(docsType);

    this.tabItems = [
      {
        name: 'productDocument',
        type: 'products',
        alias: 'DOCUMENTS.PRODUCT_DOCUMENT',
        url: './products'
      },
      {
        name: 'normalIssue',
        type: 'issues',
        alias: 'DOCUMENTS.NORMAL_ISSUE',
        url: './issues'
      },
      {
        name: 'freshGuide',
        type: 'guides',
        alias: 'DOCUMENTS.FRESH_GUIDE',
        url: './guides'
      }
    ];

    console.log('this.crumbItems=', this.crumbItems);
    console.log('this.tabItems=', this.tabItems);
  }

  onTabChange(type) {
    this.crumbItems = this.documentUtilService.getDocsCrumb(type);
  }
}
