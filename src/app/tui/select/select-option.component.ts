import {
  Component,
  HostBinding,
  HostListener,
  Host,
  Input,
  OnInit,
  OnDestroy,
} from '@angular/core';

import { SelectComponent } from './select.component';

@Component({
  selector: 'tcc-select-option',
  template: '<ng-content></ng-content>',
})
export class SelectOptionComponent implements OnInit, OnDestroy {
  @HostBinding('class.tcc-select-option') true;

  /** 数据值 */
  @Input() value: any;

  /** 展示标签 */
  @Input() label: any;

  selectComponent: SelectComponent;

  @HostListener('click') clickHandler() {
    this.selectComponent.select(this.value);
  }

  constructor(
    @Host() selectComponent: SelectComponent,
  ) {
    this.selectComponent = selectComponent;
  }

  ngOnInit() {
    this.selectComponent.addOption(this.value, this.label);
  }

  ngOnDestroy() {
    this.selectComponent.removeOption(this.value);
  }
}
