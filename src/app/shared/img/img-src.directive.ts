import { Directive, Input, OnChanges, ElementRef } from '@angular/core';
import * as path from 'path';

import { IMAGE_PREFIX } from './image-prefix';

@Directive({
  selector: '[tdcImgSrc]',
})
export class ImgSrcDirective implements OnChanges {
  @Input() tdcImgSrc: string;
  @Input() tdcImgPrefix: string;

  constructor(private el: ElementRef) {}

  makeImgSrc() {
    return path.join(this.tdcImgPrefix || IMAGE_PREFIX, this.tdcImgSrc);
  }

  ngOnChanges() {
    if (this.tdcImgSrc) {
      this.el.nativeElement.src = this.makeImgSrc();
    }
  }
}
