import {
  Directive,
  Input,
  ElementRef,
  OnInit,
  Host,
} from '@angular/core';

import { TableComponent } from './table.component';

@Directive({
  selector: '[tccTableSelect]',
})
export class TableSelectDirective {
  @Input('tccTableSelect') set tccTableSelect(selectable: boolean) {
    const _selectable = selectable !== false;
    this.setSelectable(_selectable);
  }

  constructor(
    private element: ElementRef,
  ) { }

  setSelectable(selectable: boolean) {
    this.element.nativeElement.querySelector('.tcc-table-select-column').style.display = selectable ? 'block' : 'none';
  }
}
