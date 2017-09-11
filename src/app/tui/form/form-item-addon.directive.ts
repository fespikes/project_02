import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[tccFormItemAddon]',
})
export class FormItemAddonDirective {
  @HostBinding('class.tcc-form-item-addon') true;

  constructor() { }

}
