import { Component, OnInit } from '@angular/core';

import { DocumentAPIService } from '../../services/document.api.service';
import { DocumentResService } from '../../services/document.res.service';

import { Router } from '@angular/router';

@Component({
  selector: 'tdc-fresh-guides',
  templateUrl: './fresh-guides.component.html',
  styleUrls: ['./fresh-guides.component.sass'],
})

export class FreshGuidesComponent implements OnInit {
  otherCourse = [];
  freshCourse = [];

  CATEGORY = 'INTRO';
  VERSION = 'none';

  constructor(
    private documentAPIService: DocumentAPIService,
    private documentResService: DocumentResService,
    private router: Router,
  ) {

  }

  ngOnInit() {
    this.getFreshGuides('intro');
    this.otherCourse = this.documentResService.getOtherCourse();
  }

  getFreshGuides(tag) {
    this.documentAPIService.getDocuments(tag, true).subscribe(
      result => {
        this.freshCourse = result[0].children;
      },
    );
  }

  viewDetail(doc) {
    if (doc.tag === 'course') {
      this.openOtherCoursePage(doc.url);
    }else if (doc.tag === 'intro') {
      this.viewFreshDocDetail(doc);
    }
  }

  openOtherCoursePage(url) {
    window.open(url);
  }

  viewFreshDocDetail(doc) {
    this.documentResService.setAnchorId('index');
    this.documentResService.setSectionId('index');
    this.documentResService.setDocName(doc.name);
    this.router.navigate([`/documents-support/docs-detail/${doc.tag}/${this.CATEGORY}/${this.VERSION}/${doc.id}`]);
  }
}
