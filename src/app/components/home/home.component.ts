import { Component, OnInit, HostBinding } from '@angular/core';
import {Router} from "@angular/router";
import { HomeService } from './home.service';

@Component({
  selector: 'tdc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {

  advs: any;
  
  @HostBinding('class.tdc-home-body') hostClass = true;

  constructor(
    private router: Router, private homeService:HomeService
  ) {
    const data = this.homeService.getData('');
    this.advs = data.advList;
  }

  ngOnInit() {
  }

  product() {
    this.router.navigateByUrl('product');
  }

}
