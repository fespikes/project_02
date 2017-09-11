import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[tccRadioBtnGroup]',
})
export class RadioBtnGroupDirective {
  @HostBinding('class.tcc-radio-btn-group') hostClass = true;

  constructor() { }

}
