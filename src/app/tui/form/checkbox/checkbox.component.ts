import {
  Component,
  Optional,
  Inject,
  Input,
  ViewChild,
  HostBinding,
  forwardRef,
} from '@angular/core';

import {
  NgModel,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  NG_ASYNC_VALIDATORS,
} from '@angular/forms';

import { ElementBase } from '../element-base';

@Component({
  selector: 'tcc-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.sass'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxComponent),
    multi: true,
  }],
})
export class CheckboxComponent extends ElementBase<string> {
  @HostBinding('class.tcc-checkbox') hostClass = true;
  @ViewChild(NgModel) model: NgModel;

  constructor(
    @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
    @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
  ) {
    super(validators, asyncValidators);
  }

}
