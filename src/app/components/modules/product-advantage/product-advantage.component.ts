import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'product-advantage',
  templateUrl: './product-advantage.component.html',
  styleUrls: ['./product-advantage.component.sass'],
})
export class ProductAdvantageComponent implements OnInit {
  @Input() productAdvantage: Object;

  constructor() { }

  ngOnInit() {

  }
}
