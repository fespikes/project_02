import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator } from '@angular/forms';

import { TranslateService } from '../../../../i18n';

@Directive({
  selector: '[tccMinValue]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MinValueValidatorDirective,
      multi: true,
    },
  ],
})
export class MinValueValidatorDirective implements Validator {
  private minValue: number;

  constructor(private translate: TranslateService) { }

  @Input() set tccMinValue(value) {
    this.minValue = +value;
  }

  validate(control: AbstractControl): {[validator: string]: string | boolean} {
    const value = +control.value;
    if (value >= this.minValue || ~[undefined, null].indexOf(this.minValue) || Number.isNaN(this.minValue)) {
      return null;
    }
    return { tccMinValue: `${this.translate.translateKey('TUI.FORM.INPUT_MIN_VALUE_ERROR')} ${this.minValue}` };
  }

}
