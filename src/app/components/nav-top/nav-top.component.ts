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
    this.navigationData = this.navTopService.getNavigation();
  }

  ngOnInit() {
    // console.log(this.navigationData);
  }

  getNavtopData(): any{
    return this.navigationData.navTop;
  }

  onMouseEnter(item: any) {
    this.showSubmenu = item.subMenu?true:false;

    this.subMenuItems = this.navigationData.subMenu[item.subMenu];

    console.log(this.subMenuItems);
  }

  onMouseleave() {
    this.showSubmenu = false;
  }

}
