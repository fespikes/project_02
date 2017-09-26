import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[productTab]'
})
export class ProductTabDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
