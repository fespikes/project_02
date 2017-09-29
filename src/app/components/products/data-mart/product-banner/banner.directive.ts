import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[banner-host]'
})
export class BannerDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
