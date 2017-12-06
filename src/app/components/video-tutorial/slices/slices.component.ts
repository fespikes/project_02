import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { SlicesComponent as TheSlicesComponent } from '../../common/components/slices/slices.component';

@Component({
  selector: 'tui-slices-modules',
  templateUrl: '../../common/components/slices/slices.component.html',
  styleUrls: ['../../common/components/slices/slices.component.sass'],
})
export class SlicesComponent extends TheSlicesComponent {

  @Input()
  data: any;

  constructor(
    el: ElementRef
  ) {
    super(el);
  }

  ngOnInit() {
    this.default();
  }

}
