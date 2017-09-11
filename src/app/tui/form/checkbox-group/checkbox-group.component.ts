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
  selector: 'tcc-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CheckboxGroupComponent,
      multi: true,
    },
  ],
})
export class CheckboxGroupComponent extends ElementBase<any[]> {
  @HostBinding('class.tcc-checkbox-group') hostClass = true;
  @Input() errorMsgs = [];
  @ViewChild(NgModel) model: NgModel;
  dirty = false;

  constructor(
    @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
    @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
  ) {
    super(validators, asyncValidators);
  }

  addItem(item: string) {
    const originItems = this.value.slice();
    if (!originItems.includes(item)) {
      originItems.push(item);
      this.value = originItems;
      this.dirty = true;
    }
  }

  removeItem(item: string) {
    const originItems = this.value.slice();
    const index = originItems.indexOf(item);
    if (~index) {
      originItems.splice(index, 1);
      this.value = originItems;
      this.dirty = true;
    }
  }
}
