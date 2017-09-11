import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[tccForm]',
})
export class FormDirective {
  @Input() labelFlex: number;
  @Input() inputFlex: number;
  @HostBinding('class.tcc-form') true;
}
