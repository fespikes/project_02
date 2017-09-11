import {
  Component,
  Input,
  Output,
  HostBinding,
  ElementRef,
  EventEmitter,
  Host,
  AfterContentInit,
} from '@angular/core';

import { SELECTED_KEY } from './selectedKey.const';
import { TableFlexService } from './table-flex.service';
import { TableComponent } from './table.component';

@Component({
  selector: 'tcc-table-head',
  templateUrl: './table-head.component.html',
})
export class TableHeadComponent {
  @HostBinding('class.tcc-table-head') hostClass = true;
  @Input() selectedKey = SELECTED_KEY;
  @Output() tccTableDataChange = new EventEmitter();
  @Input() tccTableData = [];

  get selected() {
    if (!Array.isArray(this.tccTableData)) {
      return false;
    }
    return !this.tccTableData
    .map((datum) => datum[this.selectedKey])
    .filter((selected) => selected === false || selected === undefined)
    .length;
  }

  constructor(
    public element: ElementRef,
  ) { }

  updateData(selected) {
    const data = this.tccTableData.map((datum) => {
      datum[this.selectedKey] = selected;
      return datum;
    });
    this.tccTableDataChange.emit(data);
  }

}
