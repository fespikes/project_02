import {
  Component,
  Optional,
  Inject,
  Input,
  ViewChild,
  HostBinding,
} from '@angular/core';

import {
  NgModel,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  NG_ASYNC_VALIDATORS,
} from '@angular/forms';

import { ElementBase } from '../element-base';

@Component({
  selector: 'tcc-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.sass'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: TextareaComponent,
    multi: true,
  }],
})
export class TextareaComponent extends ElementBase<string> {
  @HostBinding('class.tcc-textarea') hostClass = true;
  @Input() placeholder: string;
  @Input() errorMsgs = [];
  @Input() rows = 4;

  get parsedPlaceholder() {
    return this.placeholder || '';
  }

  @ViewChild(NgModel) model: NgModel;

  constructor(
    @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
    @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
  ) {
    super(validators, asyncValidators);
  }

}
