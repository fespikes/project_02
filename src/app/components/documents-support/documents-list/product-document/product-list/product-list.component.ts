import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { Router } from '@angular/router';

import { DocumentResService } from '../../../services/document.res.service';
import { DocumentUtilService } from '../../../services/document.util.service';

@Component({
  selector: 'tdc-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass'],
})

export class ProductListComponent implements OnInit {
  @Input() docsFolderList: any[];

  docType = 'documents';

  constructor(
    private documentResService: DocumentResService,
    private documentUtilService: DocumentUtilService,
    private router: Router,
  ) {

  }

  ngOnInit() {
    this.docType = this.documentUtilService.getDocsType(window.location.hash);
  }

  viewDocDetail(category, doc) {
    this.documentResService.setSectionId('index');
    this.documentResService.setAnchorId('index');
    this.router.navigate([`/documents-support/docs-detail/${doc.tag}/${category.id}/${category.currentVersion.id}/${doc.id}`],
      {queryParams: {docType: this.docType, docName: doc.name}});
  }
}
