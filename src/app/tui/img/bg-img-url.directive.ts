import { Directive, Input, OnChanges, ElementRef } from '@angular/core';
import * as path from 'path';

import { IMAGE_PREFIX } from './image-prefix';

@Directive({
  selector: '[tccBgImgUrl]',
})
export class BgImgUrlDirective implements OnChanges {
  @Input() tccBgImgUrl: string;
  @Input() tccBgImgPrefix: string;

  constructor(private el: ElementRef) {}

  makeImgUrl() {
    return path.join(this.tccBgImgPrefix || IMAGE_PREFIX, this.tccBgImgUrl);
  }

  ngOnChanges() {
    if (this.tccBgImgUrl) {
      this.el.nativeElement.style.backgroundImage = `url(${this.makeImgUrl()})`;
    }
  }
}
