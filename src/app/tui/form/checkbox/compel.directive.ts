import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator } from '@angular/forms';

@Directive({
  selector: '[ngModel][tccCompel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CompelValidatorDirective,
      multi: true,
    },
  ],
})
export class CompelValidatorDirective implements Validator {
  validate(control: AbstractControl): {[validator: string]: string | boolean} {
    const value = control.value;
    if (value === true) {
      return null;
    }
    return { tccCompel: 'Must set true' };
  }

}
