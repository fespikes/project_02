import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'product-scenarios',
  templateUrl: './product-scenarios.component.html',
  styleUrls: ['./product-scenarios.component.sass'],
})
export class ProductScenariosComponent implements OnInit {
  @Input() scenariosItems: any[];
  constructor() { }

  ngOnInit() {
  }
}
