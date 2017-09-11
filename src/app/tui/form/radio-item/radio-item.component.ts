import {
  Component,
  Optional,
  Inject,
  Input,
  ViewChild,
  Host,
  HostBinding,
} from '@angular/core';

import { RadioGroupComponent } from '../radio-group/radio-group.component';

@Component({
  selector: 'tcc-radio-item',
  templateUrl: './radio-item.component.html',
  styleUrls: ['./radio-item.component.sass'],
})
export class RadioItemComponent {
  @HostBinding('class.tcc-radio-item') hostClass = true;

  @HostBinding('class.selected')
  get selected() {
    return this.radioValue === this.radioGroup.value;
  }

  // tslint:disable-next-line
  @Input('value') radioValue: string;
  radioGroup: RadioGroupComponent;

  constructor(
    @Host() radioGroup: RadioGroupComponent,
  ) {
    this.radioGroup = radioGroup;
  }

}
