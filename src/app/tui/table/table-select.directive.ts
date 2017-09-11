import {
  Directive,
  Input,
  AfterContentChecked,
  ElementRef,
} from '@angular/core';

@Directive({
  selector: '[tccTableSelect]',
})
export class TableSelectDirective implements AfterContentChecked {
  @Input('tccTableSelect') tccTableSelect = true;

  constructor(private element: ElementRef) { }

  ngAfterContentChecked() {
    this.setSelectable(this.tccTableSelect);
  }

  setSelectable(selectable: boolean) {
    this.element.nativeElement.querySelector('.tcc-table-select-column').style.display = selectable ? 'block' : 'none';
  }
}
