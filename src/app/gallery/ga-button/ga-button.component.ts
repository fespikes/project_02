import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './ga-button.component.html',
  styleUrls: ['./ga-button.component.sass'],
})
export class GaButtonComponent implements OnInit {
  btnColors = ['primary', 'success', 'danger', 'warning', 'default'];

  constructor() { }

  ngOnInit() {
  }

}
