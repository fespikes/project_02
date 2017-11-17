import { Component, OnInit } from '@angular/core';

import { DocumentAPIService } from '../../services/document.api.service';

@Component({
  selector: 'tdc-normal-issues',
  templateUrl: './normal-issues.component.html',
  styleUrls: ['./normal-issues.component.sass']
})

export class NormalIssuesComponent implements OnInit {
  issueDocList = [];

  constructor(
    private documentAPIService: DocumentAPIService
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
}
