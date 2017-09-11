import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'tcc-radio',
  template: `<label class="input-radio"><ng-content></ng-content></label>`,
})
export class RadioComponent {
  @HostBinding('class.tcc-radio') true;
}
