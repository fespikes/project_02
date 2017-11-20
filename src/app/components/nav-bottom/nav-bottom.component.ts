import { Component, HostBinding, OnInit, AfterViewChecked } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'tdc-nav-bottom',
  templateUrl: './nav-bottom.component.html',
  styleUrls: ['./nav-bottom.component.sass']
})
export class NavBottomComponent implements OnInit, AfterViewChecked {

  @HostBinding('class.nav-bottom-box') nav = true;

  constructor(private router:Router) { }

  private csButton: any;
  private firstNewsInput: any;

  ngOnInit() {
  }

  toCustomerService($event) {
  	this.csButton && this.csButton.click();
  }

  ngAfterViewChecked() {
  	let csButtonId = '#__ewei__box__webchat__button__';
  	this.csButton = document.querySelector(csButtonId);
    this.firstNewsInput = document.querySelector('#firstNewsId');
  }

  toLatestNews() {
    this.firstNewsInput && this.router.navigate(['/latest-news', this.firstNewsInput.value]);
  }

}
