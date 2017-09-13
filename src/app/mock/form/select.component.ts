import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'tcc-select',
  template: '<select></select>',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MockSelectComponent),
      multi: true,
    },
  ],
})
export class MockSelectComponent implements ControlValueAccessor {
  @Input() placeholder = '';

  /** 指定selected需要显示的字段 */
  @Input() key: string;

  writeValue() {}

  registerOnChange() {}

  registerOnTouched() {}
}
