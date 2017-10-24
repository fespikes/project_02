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
import { DocumentUtilService } from '../../../services/document.util.service';

@Component({
  selector: 'tdc-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})

export class ProductListComponent implements OnInit {
  @Input() docsFolderList: any[];

  constructor(
    private documentResService: DocumentResService,
    private documentUtilService: DocumentUtilService,
    private router: Router
  ) {

  }

  ngOnInit() {
    console.log('product-list-docsFolderList=', this.docsFolderList);
  }

  filterDocByVersion() {

  }

  viewDocDetail(category, doc) {
    this.documentResService.setSectionId('index');
    this.router.navigate([`/docs-detail/${category.id}/${category.currentVersion.id}/${doc.id}`]);

    //this.router.navigate(
    //  [`/docs-detail/${category.name}/${category.currentVersion.name}/${doc.name}`],
    //  { params : { section: 'index' }}
    //);
  }
}
