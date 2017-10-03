import {
  Component,
  OnInit,
  HostBinding,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { Router } from '@angular/router';

import { DocumentAPIService } from '../../../services/document.api.service';
import { DocumentUtilService } from '../../../services/document.util.service';

@Component({
  selector: 'tdc-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})

export class ProductListComponent implements OnInit {
  @Input() docsFolderList: any[];

  constructor(
    private documentAPIService: DocumentAPIService,
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
    console.log('category=', category);
    console.log('doc=', doc);
    //this.router.navigate([`/docs-search/${category.name}/${category.currentVersion.name}/${doc.name}/index`]);
    this.router.navigate([`/docs-detail/TDH/5.0/manual/index`]);
  }
}
