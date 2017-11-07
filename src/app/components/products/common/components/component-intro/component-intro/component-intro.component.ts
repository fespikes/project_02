import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './component-intro.component.html',
  styleUrls: ['./component-intro.component.sass']
})
export class ComponentIntroComponent implements OnInit {

  data: any;

  private current: any;
	
  constructor() { }

  ngOnInit() {
  	this.current = this.data.tabs[0];
  }

  onMouseOver(tab) {
  	if (!tab) return;
  	this.current = tab;
  }
  
}
