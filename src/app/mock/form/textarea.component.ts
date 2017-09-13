import {
  Component,
  Input,
  HostBinding,
} from '@angular/core';

import {
  NgModel,
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
} from '@angular/forms';

@Component({
  selector: 'tcc-textarea',
  template: '<textarea></textarea>',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: TextareaComponent,
    multi: true,
  }],
})
export class TextareaComponent implements ControlValueAccessor {
  @HostBinding('class.tcc-textarea') hostClass = true;
  @Input() placeholder: string;
  @Input() errorMsgs = [];
  @Input() rows = 4;

  writeValue() {}

  registerOnChange() {}

  registerOnTouched() {}
}
