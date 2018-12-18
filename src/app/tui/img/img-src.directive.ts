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
    const separator = '/';
    const replace   = new RegExp(separator + '{1,}', 'g');
    return [this.tdcImgPrefix || IMAGE_PREFIX, this.tdcImgSrc].join(separator).replace(replace, separator);
  }

  ngOnChanges() {
    if (this.tdcImgSrc) {
      this.el.nativeElement.src = this.makeImgSrc();
    }
  }
}
