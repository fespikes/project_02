import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[tccBtnOutline]',
})
export class BtnOutlineDirective {
  @HostBinding('class.tcc-btn-outline') hostClass = true;
  @Input() set tccBtnOutline(outline: boolean) {
    if (typeof outline === 'boolean') {
      this.hostClass = !!outline;
    }
  }

  constructor() { }

}
