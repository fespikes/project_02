import { Component, Input } from '@angular/core';

@Component({
  selector: 'tcc-radio-item',
  template: '<ng-content></ng-content>',
})
export class RadioItemComponent {
  @Input() value: string;
}
