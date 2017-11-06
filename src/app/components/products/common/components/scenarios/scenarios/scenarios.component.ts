import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './scenarios.component.html',
  styleUrls: ['./scenarios.component.sass']
})
export class ScenariosComponent implements OnInit {

  data: any;

  current: number;

  constructor() { }

  ngOnInit() {
  	this.current = this.data.tabs[0];
  }

  clickedTab(tab) {
  	if (!tab) return;
  	this.current = tab;
  }

}
