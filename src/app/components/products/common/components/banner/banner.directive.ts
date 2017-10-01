import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[banner]'
})
export class BannerDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
