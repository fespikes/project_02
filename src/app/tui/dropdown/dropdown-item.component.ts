import {
  Component,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'tcc-dropdown-item',
  template: '<ng-content></ng-content>',
})
export class DropdownItemComponent {
  @HostBinding('class.tcc-dropdown-item') hostClass = true;
}
