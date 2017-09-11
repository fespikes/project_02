/**
 * tooltip封装了来自balloon-css的第三方库
 *
 * 注意：在使用中发现，如果文本内容过多，并且出现在浏览器靠边界的位置，可能会出现横向的滚动条。
 */
import { Directive, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[tccTooltip]',
})
export class TooltipDirective implements OnChanges {
  @Input() tccTooltip: string;
  @Input() tccTooltipPos: string;
  @HostBinding('attr.data-balloon') tooltip: string;
  @HostBinding('attr.data-balloon-pos') pos: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    const {
      tccTooltip: tooltipChange,
      tccTooltipPos: posChange,
    } = changes;

    if (tooltipChange && tooltipChange.currentValue) {
      this.tooltip = tooltipChange.currentValue;
    }

    if (posChange && posChange.currentValue) {
      this.pos = posChange.currentValue;
    }
  }

}
