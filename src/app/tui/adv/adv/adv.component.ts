import { Component, OnInit, Input, EventEmitter, HostBinding, Output } from '@angular/core';

@Component({
  selector: 'tui-adv',
  templateUrl: './adv.component.html',
  styleUrls: ['./adv.component.sass'],
})
export class AdvComponent implements OnInit {
  @HostBinding('class.tui-adv') hostClass = true;
  @Input() advList: any;

  advLength: number;
  currentAdv: any;  // TODO: switch the adv
  currentIdx = 0;
  interval: any;
  @Output()
  onSliceSelected: EventEmitter<any>;

  constructor() {
    this.onSliceSelected = new EventEmitter();
  }

  ngOnInit() {
    this.advLength = this.advList.length;

    this.currentAdv = this.advList[this.currentIdx];
    if (this.advLength > 1) {
      this.setInterval(this.currentIdx);
    }
  }

  setIndex(idx) {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.currentIdx = idx;
    this.currentAdv = this.advList[this.currentIdx];
  }

  setInterval(idx) {
    this.setIndex(idx);

    this.interval = setInterval(() => {
      const id = (this.currentIdx + 1) % this.advLength;
      this.currentIdx = id;
      this.currentAdv = this.advList[this.currentIdx];
    }, 3000);
  }

  goPrevious(e) {
    this.currentIdx > 0 ? (this.currentIdx--) : (this.currentIdx = this.advLength - 1);
    this.setInterval(this.currentIdx);
  }

  goAfter(e) {
    this.currentIdx++;
    if (this.currentIdx >= this.advLength) {
      this.currentIdx = 0;
    }
    this.setInterval(this.currentIdx);
  }

  itemOnMouseenter(idx: number) {
    this.setIndex(idx);
  }

  itemOnMouseleave(idx: number) {
    this.setInterval(idx);
  }

}
