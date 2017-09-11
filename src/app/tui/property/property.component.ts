import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'tcc-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.sass'],
})
export class PropertyComponent implements OnInit {
  @HostBinding('class.tcc-property') hostClass = true;
  @Input() icon: string;
  @Input() label: string;
  @Input() value: string;

  constructor() { }

  ngOnInit() {
  }

}
