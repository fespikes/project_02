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
  selector: 'tcc-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: InputComponent,
    multi: true,
  }],
})
export class InputComponent extends ElementBase<string> {
  @HostBinding('class.tcc-input') hostClass = true;
  /** 前缀图标 */
  @Input() prefix: string;
  /** 后缀图标 */
  @Input() suffix: string;
  @Input() placeholder: string;
  @Input() type = 'text';
  @Input() errorMsgs = [];

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
