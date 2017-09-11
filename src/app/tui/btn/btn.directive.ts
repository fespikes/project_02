import {
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  HostBinding,
  ElementRef,
} from '@angular/core';

@Directive({
  selector: '[tccBtn]',
})
export class BtnDirective implements OnChanges {
  @Input() tccBtn: string;
  @Input() set size(size: string) {
    const classList = this.el.nativeElement.classList;
    ['sm', 'md', 'lg'].forEach((_size) => {
      if (classList.contains(`tcc-btn-${_size}`)) {
        classList.remove(`tcc-btn-${_size}`);
      }
    });
    this.el.nativeElement.classList.add(`tcc-btn-${size}`);
  }
  @HostBinding('class.tcc-btn') true;

  constructor(private el: ElementRef) {
    this.el.nativeElement.classList.add('tcc-btn-md');
  }

  ngOnChanges(changes: SimpleChanges) {
    const {tccBtn: tccBtnChange} = changes;
    if (tccBtnChange.currentValue) {
      this.el.nativeElement.classList.add(`tcc-btn-${tccBtnChange.currentValue}`);
    }
  }
}
