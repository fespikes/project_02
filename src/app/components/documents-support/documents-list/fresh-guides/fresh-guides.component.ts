import { Component, OnInit } from '@angular/core';

import { DocumentAPIService } from '../../services/document.api.service';
import { DocumentResService } from '../../services/document.res.service';
import { DocumentUtilService } from '../../services/document.util.service';
import { CommonService } from '../../../common/services/common.service';
import { MessageService } from '../../../../tui';

import { Router } from '@angular/router';

@Component({
  selector: 'tdc-fresh-guides',
  templateUrl: './fresh-guides.component.html',
  styleUrls: ['./fresh-guides.component.sass'],
})

export class FreshGuidesComponent implements OnInit {
  otherCourse = [];
  freshCourse = [];
  videoCourse = [];

  CATEGORY = 'INTRO';
  VERSION = 'none';
  docType = 'documents';

  constructor(
    private documentAPIService: DocumentAPIService,
    private documentResService: DocumentResService,
    private documentUtilService: DocumentUtilService,
    private commonService: CommonService,
    private messageService: MessageService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.getFreshGuides('intro');
    this.docType = this.documentUtilService.getDocsType(window.location.hash);
    this.otherCourse = this.documentResService.getOtherCourse();
    const videoTutorial = this.commonService.getVideoTutorial();
    this.videoCourse = this.documentUtilService.makeVideoCourse(videoTutorial);
  }

  getFreshGuides(tag) {
    this.documentAPIService.getDocuments(tag, true).subscribe(
      result => {
        this.freshCourse = result[0].children;
      },
      error => {
        this.messageService.error(error.message);
      },
    );
  }

  viewDetail(doc) {
    if (doc.tag === 'course') {
      window.open(doc.url);
    }else if (doc.tag === 'intro') {
      this.viewFreshDocDetail(doc);
    }else if (doc.tag === 'video') {
      this.router.navigate([doc.routerLink]);
    }
  }

  viewFreshDocDetail(doc) {
    this.documentResService.setAnchorId('index');
    this.documentResService.setSectionId('index');
    this.router.navigate([`/documents-support/docs-detail/${doc.tag}/${this.CATEGORY}/${this.VERSION}/${doc.id}`],
      {queryParams: {docType: this.docType, docName: doc.name}});
  }
}
