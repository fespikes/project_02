import { Component, OnInit, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'tcc-input-error',
  templateUrl: './input-error.component.html',
})
export class InputErrorComponent implements OnInit {
  @Input() input: NgModel;
  constructor() { }

  ngOnInit() {
  }

}
