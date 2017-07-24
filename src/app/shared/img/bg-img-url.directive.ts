import { Directive, Input, OnChanges, ElementRef } from '@angular/core';
import * as path from 'path';

import { IMAGE_PREFIX } from './image-prefix';

@Directive({
  selector: '[tdcBgImgUrl]',
})
export class BgImgUrlDirective implements OnChanges {
  @Input() tdcBgImgUrl: string;
  @Input() tdcBgImgPrefix: string;

  constructor(private el: ElementRef) {}

  makeImgUrl() {
    return path.join(this.tdcBgImgPrefix || IMAGE_PREFIX, this.tdcBgImgUrl);
  }

  ngOnChanges() {
    if (this.tdcBgImgUrl) {
      this.el.nativeElement.style.backgroundImage = `url(${this.makeImgUrl()})`;
    }
  }
}
