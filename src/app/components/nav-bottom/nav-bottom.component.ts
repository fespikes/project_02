import { Component, HostBinding, OnInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'tdc-nav-bottom',
  templateUrl: './nav-bottom.component.html',
  styleUrls: ['./nav-bottom.component.sass']
})
export class NavBottomComponent implements OnInit, AfterViewChecked {

  @HostBinding('class.nav-bottom-box') nav = true;

  constructor() { }

  private csButton: any; 

  ngOnInit() {
  }

  toCustomerService($event) {
  	this.csButton && this.csButton.click();
  }

  ngAfterViewChecked() {
  	let csButtonId = '#__ewei__box__webchat__button__';
  	this.csButton = document.querySelector(csButtonId);
  }

}
