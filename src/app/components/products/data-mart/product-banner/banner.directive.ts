import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[product-banner]'
})
export class BannerDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
