import {
  Directive,
  Input,
  Host,
} from '@angular/core';

import { IconDirective } from '../../../tui';

const IconMappings = {
  PREPARING: 'preparing',
  RUNNING: 'circle',
  STOPPED: 'ban2',
  DELETED: 'trash',
};

const ColorMappings = {
  PREPARING: 'primary',
  RUNNING: 'success',
  STOPPED: 'danger',
  DELETED: 'default',
};

@Directive({
  selector: '[tccIconStatus]',
})
export class IconStatusDirective {
  @Input() set tccIconStatus(status) {
    const icon = IconMappings[status];
    const color = ColorMappings[status];
    this.icon.setIcon(`#${icon}`);
    this.icon.setColor(color);
  }

  constructor(@Host() private icon: IconDirective) { }
}
