import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'tcc-select-option',
  template: '<select></select>',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectOptionComponent),
      multi: true,
    },
  ],
})
export class SelectOptionComponent implements ControlValueAccessor {
  @Input() value: any;

  writeValue() {}

  registerOnChange() {}

  registerOnTouched() {}
}
