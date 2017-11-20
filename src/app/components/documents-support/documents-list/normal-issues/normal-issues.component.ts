import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { DocumentAPIService } from '../../services/document.api.service'
import { DocumentResService } from '../../services/document.res.service';

@Component({
  selector: 'tdc-normal-issues',
  templateUrl: './normal-issues.component.html',
  styleUrls: ['./normal-issues.component.sass']
})

export class NormalIssuesComponent implements OnInit {
  issueDocList = [];

  CATEGORY = 'FAQ';
  VERSION = 'none';

  constructor(
    private documentAPIService: DocumentAPIService,
    private documentResService: DocumentResService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.getNormalIssues('faq');
  }

  getNormalIssues(tag) {
    this.documentAPIService.getDocuments(tag, true).subscribe(
      result => {
        this.issueDocList = result[0].children;
      }
    );
  }

  viewDetail(doc) {
    this.documentResService.setAnchorId('index');
    this.documentResService.setSectionId('index');
    this.router.navigate([`/documents-support/docs-detail/${doc.tag}/${this.CATEGORY}/${this.VERSION}/${doc.id}`]);
  }
}
