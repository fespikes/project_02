import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SubmenuService {
  // 在菜单展开或收缩时会触发`onToggle`事件
  onToggle = new EventEmitter();

  constructor() { }

  notifyToggle() {
    // 在菜单变化稳定之后发出事件
    setTimeout(() => {
      this.onToggle.emit();
    });
  }
}
