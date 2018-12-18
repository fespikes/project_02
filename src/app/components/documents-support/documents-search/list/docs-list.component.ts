import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  AfterViewChecked,
} from '@angular/core';

import { DocumentUtilService } from '../../services/document.util.service';
import { DocumentResService } from '../../services/document.res.service';

@Component({
  selector: 'tdc-docs-list',
  templateUrl: './docs-list.component.html',
  styleUrls: ['./docs-list.component.sass'],
})

export class DocsListComponent implements OnInit, AfterViewChecked {
  @HostBinding('class.docs-list') hostClass = true;

  @Input() docsList: any[];
  @Input() docsCount: number;
  @Output() onListItemClick = new EventEmitter();

  DOC_LIST_ITEM_PREFIX = 'doc-list-item-';

  constructor(
    private documentUtilService: DocumentUtilService,
    private documentResService: DocumentResService,
  ) {

  }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    if (this.docsList && this.docsList.length > 0) {
      this.renderDocSummary(this.docsList);
      if (!this.documentResService.getSearchCompleted()) {
        this.documentUtilService.appendDocCssSheet(
          '.docs-list em{background-color:#ffff00}');
      }
      this.documentResService.setSearchCompleted(true);
    }
  }

  renderDocSummary(docsList) {
    docsList.some((doc) => {
      const mountId = this.getMountId(doc);
      const mountEl = document.getElementById(mountId);
      if (mountEl) {
        mountEl.innerHTML = doc.summary;
      } else {
        return false;
      }
    });
  }

  getMountId(doc) { // for backend response data lack of id=0 case
    let mountId = this.DOC_LIST_ITEM_PREFIX;
    if (doc.id) {
      mountId += doc.id;
    }
    return mountId;
  }

  listItemClick(doc) {
    this.onListItemClick.emit(doc);
  }
}
