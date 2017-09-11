import {
  Directive,
  Input,
  OnDestroy,
  HostBinding,
  HostListener,
  ElementRef,
} from '@angular/core';

import { DropdownComponent } from './dropdown.component';

@Directive({
  selector: '[tccDropdownTrigger]',
})
export class DropdownTriggerDirective implements OnDestroy {
  @HostBinding('class.tcc-dropdown-trigger') hostClass = true;
  @HostBinding('class.tcc-dropdown-open') openClass = false;
  @Input() tccDropdownTrigger: DropdownComponent;
  private documentClickHandler: EventListener;

  @HostListener('mouseup') onHostClick() {
    const open = this.tccDropdownTrigger.open = !this.tccDropdownTrigger.open;
    this.openClass = open;
    if (!open) {
      this.removeDocClickHandler();
    } else {
      this.addDocClickHandler();
    }
  }

  addDocClickHandler() {
    this.documentClickHandler = (function(event) {
      const isValidClick = !this.ref.nativeElement.contains(event.target);
      if (isValidClick) {
        this.tccDropdownTrigger.open = false;
        this.openClass = false;
      }
    }).bind(this);
    document.addEventListener('click', this.documentClickHandler);
  }

  removeDocClickHandler() {
    document.removeEventListener('click', this.documentClickHandler);
  }

  constructor(private ref: ElementRef) {}

  ngOnDestroy() {
    this.removeDocClickHandler();
  }

}
