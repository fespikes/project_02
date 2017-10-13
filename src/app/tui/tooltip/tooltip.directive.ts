/**
 * tooltip封装了来自balloon-css的第三方库
 *
 * 注意：在使用中发现，如果文本内容过多，并且出现在浏览器靠边界的位置，可能会出现横向的滚动条。
 */
import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[tccTooltip]',
})
export class TooltipDirective {
  @Input() tccTooltip: string;
  @Input() tccTooltipPos = 'up';
  @HostBinding('attr.data-balloon') get tooltip() {
    return this.tccTooltip;
  }
  @HostBinding('attr.data-balloon-pos') get pos() {
    return this.tccTooltipPos;
  }

  constructor() { }
}
