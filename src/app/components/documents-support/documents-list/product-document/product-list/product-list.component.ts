import {
  Component,
  OnInit,
  HostBinding,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { Router } from '@angular/router';

import { DocumentResService } from '../../../services/document.res.service';

@Component({
  selector: 'tdc-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})

export class ProductListComponent implements OnInit {
  @Input() docsFolderList: any[];

  constructor(
    private documentResService: DocumentResService,
    private router: Router
  ) {

  }

  ngOnInit() {
  }

  viewDocDetail(category, doc) {
    this.documentResService.setSectionId('index');
    this.documentResService.setAnchorId('index');
    this.router.navigate([`/documents-support/docs-detail/${category.id}/${category.currentVersion.id}/${doc.id}`]);
  }
}
