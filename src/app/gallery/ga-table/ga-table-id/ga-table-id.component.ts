import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'tcc-ga-table-id',
  templateUrl: './ga-table-id.component.html',
  styleUrls: ['./ga-table-id.component.sass'],
})
export class GaTableIdComponent {
  @Input() open = false;
  @Output() openChange = new EventEmitter();
  @HostBinding('class.tcc-table-cell') true;
  @HostListener('click') onclick() {
    this.openChange.emit(!this.open);
  }

  get icon() {
    return this.open ? 'caret-down' : 'caret-right';
  }

}
