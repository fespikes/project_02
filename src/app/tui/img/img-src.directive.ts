import { Directive, Input, OnChanges, ElementRef } from '@angular/core';
import * as path from 'path';

import { IMAGE_PREFIX } from './image-prefix';

@Directive({
  selector: '[tccImgSrc]',
})
export class ImgSrcDirective implements OnChanges {
  @Input() tccImgSrc: string;
  @Input() tccImgPrefix: string;

  constructor(private el: ElementRef) {}

  makeImgSrc() {
    return path.join(this.tccImgPrefix || IMAGE_PREFIX, this.tccImgSrc);
  }

  ngOnChanges() {
    if (this.tccImgSrc) {
      this.el.nativeElement.src = this.makeImgSrc();
    }
  }
}
