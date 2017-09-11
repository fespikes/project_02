import {
  Component,
  Host,
  HostBinding,
  Input,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { CheckboxGroupComponent } from '../checkbox-group/checkbox-group.component';

@Component({
  selector: 'tcc-checkbox-item',
  templateUrl: './checkbox-item.component.html',
  styleUrls: ['./checkbox-item.component.sass'],
})
export class CheckboxItemComponent implements OnInit, OnDestroy {
  @HostBinding('class.tcc-checkbox-item') hostClass = true;
  // tslint:disable-next-line
  @Input('value') checkboxValue: string;
  value = false;
  checkboxGroup: CheckboxGroupComponent;
  checkboxGroupSub: Subscription;

  constructor(
    @Host() checkboxGroup: CheckboxGroupComponent,
  ) {
    this.checkboxGroup = checkboxGroup;
  }

  ngOnInit() {
    const {model} = this.checkboxGroup;
    // ngModel的初始值不会触发`valueChanges`事件
    this.setValue(model.value);
    this.checkboxGroupSub = model.control.valueChanges
    .subscribe((collection: any[]) => {
      this.setValue(collection);
    });
  }

  setValue(collection: any[]) {
    if (!Array.isArray(collection)) {
      return;
    }
    this.value = !!~collection.indexOf(this.checkboxValue);
  }

  ngOnDestroy() {
    this.checkboxGroupSub.unsubscribe();
  }

  updateCheckboxGroupValue() {
    if (this.value) {
      this.checkboxGroup.addItem(this.checkboxValue);
    } else {
      this.checkboxGroup.removeItem(this.checkboxValue);
    }
  }

}
