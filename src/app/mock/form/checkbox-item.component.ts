import { Component, Input } from '@angular/core';

@Component({
  selector: 'tcc-checkbox-item',
  template: '<ng-content></ng-content>',
})
export class CheckboxItemComponent {
  @Input() value: string;
}
