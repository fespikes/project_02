import {
  Component,
  OnInit,
  HostBinding,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'tdc-docs-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
})

export class SearchComponent implements OnInit {
  @Input() filterSearch: boolean;
  @Input() keyword: string;
  @Output() onDocumentSearch = new EventEmitter();

  constructor() {

  }

  ngOnInit() {

  }

  onKey(event) {
    if (event.keyCode === 13) {
      this.documentSearch();
    }
  }

  documentSearch() {
    this.onDocumentSearch.emit(this.keyword);
  }
}
