import { Component, OnInit, HostBinding } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'tdc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  
  @HostBinding('class.tdc-home-body') hostClass = true;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  product() {
    this.router.navigateByUrl('product');
  }

}
