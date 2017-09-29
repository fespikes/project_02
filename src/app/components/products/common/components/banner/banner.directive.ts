import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[bannerBox]'
})
export class BannerDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
