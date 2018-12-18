import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hot-modules',
  templateUrl: './hot-modules.component.html',
  styleUrls: ['./hot-modules.component.sass']
})
export class HotModulesComponent implements OnInit {

  @Input()
  data: any;

  current: any;

  constructor() { }

  ngOnInit() {

    const items = this.data.items;
    this.current = items[0];

  }

  onSelected(item) {
    this.current = item;
  }

}
