import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'tdc-docs-list',
  templateUrl: './docs-list.component.html',
  styleUrls: ['./docs-list.component.sass'],
})

export class DocsListComponent implements OnInit {
  @Input() docsList: any[];
  @Input() docsCount: number;
  @Output() onListItemClick = new EventEmitter();

  constructor() {

  }
  ngOnInit() {
  }

  listItemClick(doc) {
    this.onListItemClick.emit(doc);
  }
}