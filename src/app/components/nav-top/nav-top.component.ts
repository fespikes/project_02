import { Component, OnInit, HostBinding } from '@angular/core';

import { NavTopService } from './nav-top.service';
import { NgIf } from '@angular/common';

const CONSTANT = {
  submenuTypes: {
    products: 'products',
    modules: 'modules'
  }
}

@Component({
  selector: 'tdc-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.sass']
})
export class NavTopComponent implements OnInit {

  @HostBinding('class.nav-wrapper') hostClass = true;

  private navigationData: any;
  private subMenuItems: any;
  private showSubmenu = false;
  submenuType = CONSTANT.submenuTypes;

  constructor(private navTopService: NavTopService) {
    //if using the api, use Rxjs
    this.navigationData = this.navTopService.getNavigation();
  }

  ngOnInit() {// console.log(this.navigationData);
  }

  onMouseEnter(item: any) {
    this.subMenuItems = this.navigationData.subMenu[item.subMenu];

    this.showSubmenu = item.subMenu ? true : false;
  }

  onMouseleave() {
    // this.showSubmenu = false;
  }

  onClick() {
    this.showSubmenu = false;
  }

  toAdminCenter() {
    console.log('TODO: to the admin center.')
    //TODO: 
  }

}
