import {
  Component,
  OnInit,
  HostBinding,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'tdc-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.sass']
})

export class TabComponent implements OnInit {
  @Input() tabItems: any[];
  @Output() onTabChange = new EventEmitter();
  constructor() {

  }

  ngOnInit() {

  }

  tabChange(type) {
    this.onTabChange.emit(type);
  }
}
