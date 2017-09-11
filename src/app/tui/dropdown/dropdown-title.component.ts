import {
  Component,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'tcc-dropdown-title',
  template: '<ng-content></ng-content>',
})
export class DropdownTitleComponent {
  @HostBinding('class.tcc-dropdown-title') hostClass = true;
}
