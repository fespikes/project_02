import { Component, Input } from '@angular/core';

@Component({
  selector: 'tcc-form-item',
  template: '<ng-content></ng-content>',
})
export class FormItemComponent {
  @Input() label: string;
  @Input() labelFlex: number;
  @Input() inputFlex: number;
}
