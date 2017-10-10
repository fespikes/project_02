import {
  Component,
  OnInit,
  HostBinding,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'docs-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})

export class SearchComponent implements OnInit {
  @Input() filterSearch: boolean;
  @Output() onDocumentSearch = new EventEmitter();

  keyword = '';
  constructor() {

  }

  ngOnInit() {

  }

  documentSearch() {
    this.onDocumentSearch.emit(this.keyword);
  }
}
