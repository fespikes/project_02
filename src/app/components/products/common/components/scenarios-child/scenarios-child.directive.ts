import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[scenariosChild]'
})
export class ScenariosChildDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
