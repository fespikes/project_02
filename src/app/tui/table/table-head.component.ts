import {
  Component,
  Input,
  Output,
  HostBinding,
  ElementRef,
  EventEmitter,
  Host,
  AfterContentInit,
  OnDestroy,
} from '@angular/core';

import { SELECTED_KEY } from './selectedKey.const';
import { TableComponent } from './table.component';
import { TableFlexService } from './table-flex.service';

@Component({
  selector: 'tcc-table-head',
  templateUrl: './table-head.component.html',
})
export class TableHeadComponent implements AfterContentInit, OnDestroy {
  @HostBinding('class.tcc-table-head') hostClass = true;
  @Input() selectedKey = SELECTED_KEY;

  get selected() {
    const tccTableData = this.table.tccTableData;
    if (!Array.isArray(tccTableData)) {
      return false;
    }
    return !tccTableData
    .map((datum) => datum[this.selectedKey])
    .filter((selected) => selected === false || selected === undefined)
    .length;
  }

  constructor(
    public element: ElementRef,
    @Host() private table: TableComponent,
    private tableFlex: TableFlexService,
  ) { }

  ngAfterContentInit() {
    this.tableFlex.register(this.element.nativeElement);
  }

  ngOnDestroy() {
    this.tableFlex.unregister(this.element.nativeElement);
  }

  updateData(selected) {
    this.table.tccTableData.forEach((datum) => {
      datum[this.selectedKey] = selected;
      return datum;
    });
    this.table.emitDataChange();
  }

}
