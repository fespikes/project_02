import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[componentIntroChild]'
})
export class ComponentIntroChildDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
