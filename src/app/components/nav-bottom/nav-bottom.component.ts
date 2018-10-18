import { Component, HostBinding, OnInit, AfterViewChecked } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { toggles } from 'toggles';

const oem = toggles.oem;
@Component({
  selector: 'tdc-nav-bottom',
  templateUrl: './nav-bottom.component.html',
  styleUrls: ['./nav-bottom.component.sass']
})
export class NavBottomComponent implements OnInit, AfterViewChecked {

  @HostBinding('class.nav-bottom-box') nav = true;

  constructor(private router:Router) { }

  private csButton: any;
  oem = oem;

  ngOnInit() {
    this.oem = oem;
  }

  toCustomerService($event) {
  	this.csButton && this.csButton.click();
  }

  ngAfterViewChecked() {
  	let csButtonId = '#__ewei__box__webchat__button__';
  	this.csButton = document.querySelector(csButtonId);
  }

  toLatestNews() {
    let id = window.sessionStorage.getItem('tdc-web:latest-news:first-news-id');
    this.router.navigate(['/latest-news', id]);
  }

}
