import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DocumentResService } from './services/document.res.service';

@Component({
  selector: 'tdc-documents-support',
  templateUrl: './documents-support.component.html',
  styleUrls: ['./documents-support.component.sass']
})
export class DocumentsSupportComponent implements OnInit {

  constructor(
    private router: Router,
    private documentResService: DocumentResService
  ) {

  }

  ngOnInit() {
  }

  documentSearch(keyword) {
    this.documentResService.setKeyword(keyword || '');
    this.router.navigate([`/documents-support/docs-search`]);
  }
}
