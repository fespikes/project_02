import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { DocumentUtilService } from '../../services/document.util.service';
import { DocumentResService } from '../../services/document.res.service';

@Component({
  selector: 'tdc-docs-list',
  templateUrl: './docs-list.component.html',
  styleUrls: ['./docs-list.component.sass'],
})

export class DocsListComponent implements OnInit {
  @Input() docsList: any[];
  @Input() docsCount: number;
  @Output() onListItemClick = new EventEmitter();

  constructor(
    private documentUtilService: DocumentUtilService,
    private documentResService: DocumentResService
  ) {

  }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    if(this.docsList && this.docsList.length > 0) {
      this.renderDocSummary(this.docsList);
      if(!this.documentResService.getSearchCompleted()) {
        this.documentUtilService.appendDocCssSheet(
          'em{background-color:#ffff00}');
      }
      this.documentResService.setSearchCompleted(true);
    }
  }

  renderDocSummary(docsList) {
    docsList.map((doc, index) => {
      const mountId = this.getMountId(index, doc);
      const mountEl = document.getElementById(mountId);
      mountEl.innerHTML = doc.summary;
    })
  }

  getMountId(index, doc) {//for backend response data lack of id=0 case
    let mountId = 'docs-list-item-';
    if(index > 0) {
      mountId += doc.id;
    }
    return mountId;
  }

  listItemClick(doc) {
    this.onListItemClick.emit(doc);
  }
}
