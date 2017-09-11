import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'tdc-nav-bottom',
  templateUrl: './nav-bottom.component.html',
  styleUrls: ['./nav-bottom.component.sass']
})
export class NavBottomComponent implements OnInit {

  @HostBinding('class.nav-bottom-box') nav = true;

  constructor() { }

  ngOnInit() {
  }

}
