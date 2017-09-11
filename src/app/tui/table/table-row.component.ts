import {
  Component,
  OnInit,
  HostBinding,
  Host,
  ElementRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import { SELECTED_KEY } from './selectedKey.const';
import { TableFlexService } from './table-flex.service';
import { TableComponent } from './table.component';

@Component({
  selector: 'tcc-table-row',
  templateUrl: './table-row.component.html',
  providers: [
    TableFlexService,
  ],
})
export class TableRowComponent {
  @HostBinding('class.tcc-table-row') hostClass = true;
  @Input() selectedKey = SELECTED_KEY;
  @Input() tccTableRowDatum;
  table: TableComponent;

  get selected() {
    return this.tccTableRowDatum && this.tccTableRowDatum[this.selectedKey];
  }

  set selected(selected) {
    if (typeof this.tccTableRowDatum === 'object') {
      this.tccTableRowDatum[this.selectedKey] = selected;
    }
  }

  constructor(
    public element: ElementRef,
  ) { }

}
