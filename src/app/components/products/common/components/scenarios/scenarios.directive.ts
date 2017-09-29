import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[scenarios]'
})
export class ScenariosDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
