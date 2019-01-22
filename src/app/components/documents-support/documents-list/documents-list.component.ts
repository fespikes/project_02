import { Component, OnInit, HostBinding } from '@angular/core';

import { DocumentResService } from '../services/document.res.service';

@Component({
  selector: 'tdc-documents-list',
  templateUrl: './documents-list.component.html',
  styleUrls: ['./documents-list.component.sass'],
})

export class DocumentsListComponent implements OnInit {
  crumbItems = [];
  tabItems = [];

  constructor(
    private documentResService: DocumentResService,
  ) {

  }

  ngOnInit() {
    const docsType = this.getTabCategory(window.location.hash);
    this.crumbItems = this.documentResService.getDocsCrumb(docsType);
    this.tabItems = this.documentResService.getTabItems();

  }

  // 这里接下来会用angular的路由接口重构掉
  getTabCategory(path: string) {
    const array = path.split('?')[0].split('/');
    return array[array.length - 1];
  }


  onTabChange(type: string) {
    this.crumbItems = this.documentResService.getDocsCrumb(type);
  }
}
