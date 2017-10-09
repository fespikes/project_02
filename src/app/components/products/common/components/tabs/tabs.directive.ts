import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[tabs]'
})
export class TabsDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
