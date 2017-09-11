import {
  Component,
  OnDestroy,
  HostBinding,
  ElementRef,
  Input,
} from '@angular/core';

@Component({
  selector: 'tcc-dropdown',
  template: '<ng-content></ng-content>',
})
export class DropdownComponent {
  @HostBinding('style.display') hostDisplay = 'none';
  @HostBinding('class.tcc-dropdown') hostClass = true;
  @HostBinding('attr.tcc-dropdown-pos') get posAttr() {
    return this.tccDropdownPos;
  }
  @HostBinding('attr.tcc-dropdown-skin') get skinAttr() {
    return this.tccDropdownSkin;
  }
  @Input() tccDropdownPos = 'down';
  @Input() tccDropdownSkin = 'default';
  private _open: boolean;

  set open(open: boolean) {
    this._open = open;
    if (open) {
      this.hostDisplay = 'block';
    } else {
      this.hostDisplay = 'none';
    }
  }

  get open() {
    return this._open;
  }

  constructor(private ref: ElementRef) {}

}
