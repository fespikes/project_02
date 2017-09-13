import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'tcc-input',
  template: '<input type="text">',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  /** 前缀图标 */
  @Input() prefix: string;
  /** 后缀图标 */
  @Input() suffix: string;
  @Input() placeholder: string;
  @Input() type = 'text';
  @Input() errorMsgs = [];

  writeValue() {}

  registerOnChange() {}

  registerOnTouched() {}
}
