import { Component, OnInit, HostBinding } from '@angular/core';

import { BreadcrumbComponent } from '../common/breadcrumb/breadcrumb.component';

import { DocumentAPIService } from '../services/document.api.service';
import { DocumentUtilService } from '../services/document.util.service';

@Component({
  selector: 'tdc-documents-detail',
  templateUrl: './documents-detail.component.html',
  styleUrls: ['./documents-detail.component.sass']
})

export class DocumentsDetailComponent implements OnInit {
  docDetail = {};
  crumbItems = [];

  constructor(
    private documentAPIService: DocumentAPIService,
    private documentUtilService: DocumentUtilService
  ) {

  }

  ngOnInit() {
    this.crumbItems = this.documentUtilService.getDocsCrumb(
      'docs-detail',
      'inceptor'
    );
    this.getDocDetail();
  }

  getDocDetail() {
    this.documentAPIService.getDocDetail().subscribe(
      result => {
        this.docDetail = result;
      }
    );
  }
}
