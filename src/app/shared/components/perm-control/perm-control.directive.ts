import {
  Directive,
  Input,
  ElementRef,
} from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { TccAuthService } from '../../services/auth.service';

@Directive({
  selector: '[tccPermControl]',
})
export class PermControlDirective {
  @Input() set tccPermControl(perm: string | string[]) {
    const perms = [].concat(perm);
    this.control(perms);
    if (perms.length > 0 && !this.denied) {
      this.control(perms);
    }
  }
  /**
   * @param  {_denied} boolean 如果设置或为true 则不能访问元素
   */
  @Input() set tccPermControlDenied(_denied: boolean) {
    const denied = _denied !== false;
    if (denied) {
      this.applyDeny();
    }
  }

  private denied;

  constructor(
    private auth: TccAuthService,
    private elementRef: ElementRef,
  ) { }

  control(perms: string[]) {
    const checkers = perms.map((perm) => {
      return this.auth.checkPerm(perm);
    });
    Observable.combineLatest(checkers)
      .map((results) => {
        const passed = results.indexOf(true);
        return !!~passed;
      })
      .subscribe((passed) => {
        if (passed) {
          this.purge();
        } else {
          this.applyDeny();
        }
      });
  }

  applyDeny() {
    const element: HTMLElement = this.elementRef.nativeElement;
    element.dataset.tccPermControlHide = 'true';
  }

  purge() {
    const element: HTMLElement = this.elementRef.nativeElement;
    delete element.dataset.tccPermControlHide;
  }
}
