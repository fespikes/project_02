import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[componentIntro]'
})
export class ComponentIntroDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
