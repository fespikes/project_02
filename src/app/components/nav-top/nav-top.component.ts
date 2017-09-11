import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'tdc-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.sass']
})
export class NavTopComponent implements OnInit {

  @HostBinding('class.tcc-nav-wrapper') hostClass = true;

  constructor() { }

  ngOnInit() {
  	this.getNavtopData();
  }

  getNavtopData(): void{

  	//get the data of nav top bar
  }

}
