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

@Component({
  selector: 'tcc-table',
  templateUrl: './table.component.html',
  providers: [
    TableFlexService,
  ],
})
export class TableComponent {
  @HostBinding('class.tcc-table') hostClass = true;

  /** 标识当前表格是否处于loading状态 */
  @HostBinding('class.loading') get loadingClass() {
    return this.loading;
  }

  /** 标识当前表格是否处于无数据状态 */
  @HostBinding('class.empty') get emptyClass() {
    return this.empty;
  }

  @Input() set tccTableFlex(flex: Array<number| string>) {
    this.tableFlex.flexSubject.next(flex);
  }

  @Input() loading = false;

  @Input() tccTableData = [];

  /** 当勾选变化是会释放事件 */
  @Output() tccTableDataChange = new EventEmitter();

  get empty() {
    return this.tableFlex.rows.filter((element: HTMLElement) => {
      return element.localName === 'tcc-table-row' && element.style.display !== 'none';
    }).length === 0;
  }

  constructor(
    private tableFlex: TableFlexService,
  ) { }

  emitDataChange() {
    this.tccTableDataChange.emit(this.tccTableData);
  }
}
