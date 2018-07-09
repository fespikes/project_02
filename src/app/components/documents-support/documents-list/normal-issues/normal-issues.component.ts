import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { DocumentAPIService } from '../../services/document.api.service';
import { DocumentResService } from '../../services/document.res.service';
import { DocumentUtilService } from '../../services/document.util.service';
import { MessageService } from '../../../../tui';

@Component({
  selector: 'tdc-normal-issues',
  templateUrl: './normal-issues.component.html',
  styleUrls: ['./normal-issues.component.sass'],
})

export class NormalIssuesComponent implements OnInit {
  issueDocList = [];

  CATEGORY = 'FAQ';
  VERSION = 'none';
  docType = 'documents';

  constructor(
    private documentAPIService: DocumentAPIService,
    private documentResService: DocumentResService,
    private documentUtilService: DocumentUtilService,
    private messageService: MessageService,
    private router: Router,
  ) {

  }

  ngOnInit() {
    this.getNormalIssues('faq');
    this.docType = this.documentUtilService.getDocsType(window.location.hash);
  }

  getNormalIssues(tag) {
    this.documentAPIService.getDocuments(tag, true).subscribe(
      result => {
        this.issueDocList = result[0].children;
      },
      error => {
        this.messageService.error(error.message);
      },
    );
  }

  viewDetail(doc) {
    this.documentResService.setAnchorId('index');
    this.documentResService.setSectionId('index');
    this.router.navigate([`/documents-support/docs-detail/${doc.tag}/${this.CATEGORY}/${this.VERSION}/${doc.id}`],
      {queryParams: {docType: this.docType, docName: doc.name}});
  }
}
