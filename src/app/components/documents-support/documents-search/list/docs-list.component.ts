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
    this.renderDocAbsDom();
  }

  renderDocAbsDom() {
    console.log('this.docsList=', this.docsList);
    //let docAbsDom = document.getElementById('doc-abs-container');
    //docAbsDom.innerHTML = this.docsList[0].summary;
    //this.docsList.map(doc => {
    //
    //});
  }

  listItemClick(doc) {
    this.onListItemClick.emit(doc);
  }
}
