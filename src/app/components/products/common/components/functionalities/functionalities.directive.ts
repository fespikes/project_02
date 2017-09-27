import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[functionalities]'
})
export class FunctionalitiesDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
