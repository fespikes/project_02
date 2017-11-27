import { Component, OnInit, HostBinding, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router';

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
export class NavTopComponent implements OnInit{

  @HostBinding('class.nav-wrapper') hostClass = true;

  navigationData: any;
  subMenuItems: any;
  showSubmenu = false;
  submenuType = CONSTANT.submenuTypes;

  constructor(
    private navTopService: NavTopService,
    private router: Router,
    private el: ElementRef
    ) {
    //if using the api, use Rxjs
    this.navigationData = this.navTopService.getNavigation();
  }

  ngOnInit() {
    let topNav = this.el.nativeElement.querySelector('.top-nav');

    this.router.events.subscribe((e: NavigationEnd)=>{
      if ((e && e.url && e.url.indexOf('/docs-detail'))>-1 ||
        (e && e.url && e.url.indexOf('/docs-search'))>-1 ) {
        topNav.className = 'top-nav fixed';
      } else {
        topNav.className = 'top-nav';
      }
    });
  }

  onMouseEnter(item: any) {
    this.subMenuItems = this.navigationData.subMenu[item.subMenu];

    this.showSubmenu = item.subMenu ? true : false;
  }

  onMouseleave() {
    this.showSubmenu = false;
  }

  onClick() {
    this.showSubmenu = false;
  }

  toAdminCenter() {
    console.log('TODO: to the admin center.')
    //TODO:
  }

}
