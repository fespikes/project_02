import {
  Component,
  OnInit,
  HostBinding,
  Host,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
  AfterContentInit,
} from '@angular/core';

import { SELECTED_KEY } from './selectedKey.const';
import { TableComponent } from './table.component';
import { TableFlexService } from './table-flex.service';

@Component({
  selector: 'tcc-table-row',
  templateUrl: './table-row.component.html',
})
export class TableRowComponent implements AfterContentInit, OnDestroy {
  @HostBinding('class.tcc-table-row') hostClass = true;
  @Input() selectedKey = SELECTED_KEY;
  @Input() tccTableRowDatum;
  @Input() tccTableRowOverflow;

  get selected() {
    return this.tccTableRowDatum && this.tccTableRowDatum[this.selectedKey];
  }

  set selected(selected) {
    if (typeof this.tccTableRowDatum === 'object') {
      this.tccTableRowDatum[this.selectedKey] = selected;
      this.table.emitDataChange();
    }
  }

  constructor(
    public element: ElementRef,
    private tableFlex: TableFlexService,
    private table: TableComponent,
  ) { }

  ngOnDestroy() {
    this.tableFlex.unregister(this.element.nativeElement);
  }

  ngAfterContentInit() {
    this.tableFlex.register(this.element.nativeElement);
  }
}
