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
  selector: 'tdc-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.sass']
})

export class IssueListComponent implements OnInit {
  @Input() issueDocList: any[];

  CATEGORY = 'FAQ';
  VERSION = 'none';

  constructor(
    private documentResService: DocumentResService,
    private router: Router
  ) {

  }

  ngOnInit() {
  }

  viewDocDetail(doc) {
    this.documentResService.setAnchorId('index');
    this.documentResService.setSectionId('index');
    this.router.navigate([`/documents-support/docs-detail/${doc.tag}/${this.CATEGORY}/${this.VERSION}/${doc.id}`]);
  }
}
