import { Component, OnInit, HostBinding } from '@angular/core';

import { DocumentUtilService } from '../services/document.util.service';
import { DocumentResService } from '../services/document.res.service';

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
    private documentResService: DocumentResService
  ) {

  }

  ngOnInit() {

    let docsType = this.documentUtilService.getDocsType(window.location.hash);
    this.crumbItems = this.documentResService.getDocsCrumb(docsType, '');

    this.tabItems = this.documentResService.getTabItems();

  }


  onTabChange(type) {
    this.crumbItems = this.documentResService.getDocsCrumb(type, '');
  }
}
