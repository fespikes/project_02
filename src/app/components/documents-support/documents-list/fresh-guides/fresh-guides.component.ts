import { Component, OnInit } from '@angular/core';

import { DocumentAPIService } from '../../services/document.api.service';
import { DocumentUtilService } from '../../services/document.util.service';

@Component({
  selector: 'tdc-fresh-guides',
  templateUrl: './fresh-guides.component.html',
  styleUrls: ['./fresh-guides.component.sass']
})

export class FreshGuidesComponent implements OnInit {
  constructor(
    private documentAPIService: DocumentAPIService,
    private documentUtilService: DocumentUtilService
  ) {

  }

  ngOnInit() {
    this.getFreshGuides('intro')
  }

  getFreshGuides(tag) {
    this.documentAPIService.getDocuments(tag, true).subscribe(
      result => {

      }
    );
  }
}
