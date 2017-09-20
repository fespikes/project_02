import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'product-introduce',
  templateUrl: './product-introduce.component.html',
  styleUrls: ['./product-introduce.component.sass'],
})
export class ProductIntroduceComponent implements OnInit {
  @Input() introduceItems: any[];
  constructor() { }

  ngOnInit() {
  }
}
