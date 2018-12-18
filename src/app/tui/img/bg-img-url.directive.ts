import { Directive, Input, OnChanges, ElementRef } from '@angular/core';
import * as path from 'path';

import { IMAGE_PREFIX } from './image-prefix';

@Directive({
  selector: '[tdcBgImgUrl]',
})
export class BgImgUrlDirective implements OnChanges {
  @Input() tdcBgImgUrl: string;
  @Input() tccBgImgPrefix: string;

  constructor(private el: ElementRef) {}

  makeImgUrl() {
    const separator = '/';
    const replace   = new RegExp(separator + '{1,}', 'g');
    return [this.tccBgImgPrefix || IMAGE_PREFIX, this.tdcBgImgUrl].join(separator).replace(replace, separator);
  }

  ngOnChanges() {
    if (this.tdcBgImgUrl) {
      this.el.nativeElement.style.backgroundImage = `url(${this.makeImgUrl()})`;
    }
  }
}
