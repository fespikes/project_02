import { Component, Input, HostBinding } from '@angular/core';

import { SubmenuService } from './submenu.service';

@Component({
  selector: 'tcc-submenu',
  templateUrl: './submenu.component.html',
})
export class SubmenuComponent {
  @Input() backUrl: string;
  @HostBinding('class.tcc-submenu-collapsed') collapsed = false;
  @HostBinding('class.tcc-submenu') true;

  constructor(private service: SubmenuService) {
  }

  toggle() {
    this.collapsed = !this.collapsed;
    this.service.notifyToggle();
  }
}
