import { Component, HostBinding, OnInit, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tdc-nav-bottom',
  templateUrl: './nav-bottom.component.html',
  styleUrls: ['./nav-bottom.component.sass']
})
export class NavBottomComponent implements OnInit, AfterViewChecked {

  private csButton: any;

  @HostBinding('class.nav-bottom-box') nav = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toCustomerService($event) {
    if (this.csButton) {
      this.csButton.click();
    }
  }

  ngAfterViewChecked() {
    const csButtonId = '#__ewei__box__webchat__button__';
    this.csButton = document.querySelector(csButtonId);
  }

  toLatestNews() {
    const id = window.sessionStorage.getItem('tdc-web:latest-news:first-news-id');
    this.router.navigate(['/latest-news', id]);
  }

}
