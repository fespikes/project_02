import {
  Component,
  OnInit,
  HostBinding,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'tdc-horizontal-list',
  templateUrl: './horizontal-list.component.html',
  styleUrls: ['./horizontal-list.component.sass']
})

export class HorizontalListComponent implements OnInit {
  @HostBinding('class.horizontal-list') hostClass = true;

  @Input() docList: any[];
  @Output() onDocClick = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  viewDocDetail(doc) {
    this.onDocClick.emit(doc);
  }
}
