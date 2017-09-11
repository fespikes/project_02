import {
  Directive,
  HostBinding,
  ElementRef,
} from '@angular/core';

@Directive({
  selector: '[tccCarouselContent]',
})
export class CarouselContentDirective {
  width = 0;
  isActive = false;
  nativeElement: HTMLElement;

  @HostBinding('class.slick-slide') slickSlide = true;

  @HostBinding('class.slick-active')
  get setActiveClass() {
    return this.isActive === true;
  }

  @HostBinding('style.width.px')
  get setWidth() {
    return this.width;
  }

  constructor(private _el: ElementRef) {
    this.nativeElement = this._el.nativeElement;
  }
}
