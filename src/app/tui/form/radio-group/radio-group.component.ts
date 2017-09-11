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
  selector: 'tcc-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.sass'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: RadioGroupComponent,
    multi: true,
  }],
})
export class RadioGroupComponent extends ElementBase<string> {
  @HostBinding('class.tcc-radio-group') hostClass = true;
  @Input() errorMsgs = [];
  @ViewChild(NgModel) model: NgModel;
  @Input() name: string;
  dirty = false;

  constructor(
    @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
    @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
  ) {
    super(validators, asyncValidators);
  }

  updateValue(newValue) {
    this.value = newValue;
    this.dirty = true;
  }

}
