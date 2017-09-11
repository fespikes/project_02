import {
  Component,
  HostBinding,
  Input,
  Output,
  EventEmitter,
  ContentChild,
  ContentChildren,
  QueryList,
  AfterContentChecked,
} from '@angular/core';

import { TableFlexService } from './table-flex.service';
import { TableRowComponent } from './table-row.component';
import { TableHeadComponent } from './table-head.component';

@Component({
  selector: 'tcc-table',
  templateUrl: './table.component.html',
  providers: [
    TableFlexService,
  ],
})
export class TableComponent implements AfterContentChecked {
  @HostBinding('class.tcc-table') hostClass = true;

  /** 标识当前表格是否处于loading状态 */
  @HostBinding('class.loading') get loadingClass() {
    return this.loading;
  }

  /** 标识当前表格是否处于无数据状态 */
  @HostBinding('class.empty') get emptyClass() {
    return this.empty;
  }

  @ContentChildren(TableRowComponent) rows: QueryList<TableRowComponent>;
  @ContentChild(TableHeadComponent) head: TableHeadComponent;
  @Input() tccTableFlex: Array<number | string>;
  @Input() loading = false;
  @Output() dataChange = new EventEmitter();

  get empty() {
    return !this.rows.length;
  }

  constructor(
    private tableFlex: TableFlexService,
  ) { }

  ngAfterContentChecked() {
    this.rows.forEach((row: TableRowComponent) => {
      this.tableFlex.setFlex(row.element.nativeElement, this.tccTableFlex);
    });
    if (this.head) {
      this.tableFlex.setFlex(this.head.element.nativeElement, this.tccTableFlex);
    }
  }
}
