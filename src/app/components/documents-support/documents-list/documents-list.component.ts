import { Component, OnInit, HostBinding } from '@angular/core';

import { TabComponent } from '../../common/components/tab/tab.component';
import { BreadcrumbComponent } from '../common/breadcrumb/breadcrumb.component';

import { DocumentUtilService } from '../services/document.util.service';
import { DocumentAPIService } from '../services/document.api.service';

@Component({
  selector: 'tdc-documents-list',
  templateUrl: './documents-list.component.html',
  styleUrls: ['./documents-list.component.sass']
})

export class DocumentsListComponent implements OnInit {
  crumbItems = [];
  tabItems = [];

  constructor(
    private documentUtilService: DocumentUtilService,
    private documentAPIService: DocumentAPIService
  ) {

  }

  ngOnInit() {

    let docsType = this.documentUtilService.getDocsType(window.location.hash);
    this.crumbItems = this.documentUtilService.getDocsCrumb(docsType, '');

    this.tabItems = this.documentUtilService.getTabItems();

  }


  onTabChange(type) {
    this.crumbItems = this.documentUtilService.getDocsCrumb(type, '');
  }
}
