import {
  Component,
  Input,
  HostBinding,
  Host,
  ContentChild,
} from '@angular/core';
import { RequiredValidator } from '@angular/forms';

import { FormDirective } from './form.directive';

@Component({
  selector: 'tcc-form-item',
  templateUrl: './form-item.component.html',
})
export class FormItemComponent {
  @HostBinding('class.tcc-form-item') true;
  @Input() label: string;
  @Input() labelFlex: number;
  @Input() inputFlex: number;
  @ContentChild(RequiredValidator) requiredValidator: RequiredValidator;

  get required(): boolean | string {
    if (!this.requiredValidator) {
      return false;
    }
    return this.requiredValidator.required;
  }

  // flex样式会从tccFormItem指令的input逐步退化到tccForm指令的input
  get _labelFlex() {
    return this.labelFlex || this.form.labelFlex;
  }

  get _inputFlex() {
    return this.inputFlex || this.form.inputFlex;
  }

  constructor(@Host() private form: FormDirective) {
  }

}
