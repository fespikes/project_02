import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[advantages]'
})
export class AdvantagesDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
