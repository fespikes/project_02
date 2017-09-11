/**
 * reference: https://github.com/clbond/form-example
 */
import { Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

export abstract class ValueAccessorBase<T> implements ControlValueAccessor {
  private innerValue: T;
  private innerDisabled = false;

  private changed = new Array<(value: T) => void>();
  private touched = new Array<() => void>();

  get value(): T {
    return this.innerValue;
  }

  set value(value: T) {
    if (this.innerValue !== value) {
      this.innerValue = value;
      this.changed.forEach(f => f(value));
    }
  }

  get disabled() {
    return this.innerDisabled;
  }

  @Input() set disabled(value: any) {
    const disabled = !(value === false);
    this.setDisabledState(disabled);
  }

  writeValue(value: T) {
    this.innerValue = value;
  }

  registerOnChange(fn: (value: T) => void) {
    this.changed.push(fn);
  }

  registerOnTouched(fn: () => void) {
    this.touched.push(fn);
  }

  touch() {
    this.touched.forEach(f => f());
  }

  setDisabledState(disabled: boolean) {
    this.innerDisabled = disabled;
  }
}
