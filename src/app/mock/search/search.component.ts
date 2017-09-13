import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'tcc-search',
  template: '',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SearchComponent),
    multi: true,
  }],
})
export class SearchComponent implements ControlValueAccessor {

  search() {}

  writeValue() {}

  registerOnChange() {}

  registerOnTouched() { }
}
