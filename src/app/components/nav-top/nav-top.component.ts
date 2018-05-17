import { AfterViewInit, Component, OnInit, HostBinding, HostListener, ElementRef } from '@angular/core';
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
export class NavTopComponent implements OnInit, AfterViewInit{

  @HostBinding('class.nav-wrapper') hostClass = true;

  navigationData: any;
  subMenuItems: any;
  showSubmenu = false;
  submenuType = CONSTANT.submenuTypes;
  navHammer: any;

  responsive: any = {
    showMask: false,
    showMenu: false,
    isMobile: (<any> window).isMobile.phone,
    showSubmenu: false,
    submenuType: '',
  }

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
      if(e && e.url) {
        if(e.url.indexOf('/docs-detail')>-1 || e.url.indexOf('/docs-search')>-1 ) {
          topNav.className = 'top-nav fixed';
        }else {
          topNav.className = 'top-nav';
        }
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

  ngAfterViewInit() {
    this.bindResponsive();
  }

  bindResponsive() {
    const me = this;
    const touchActions = ['auto', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'];
    const nav = document.querySelector('.top-nav');
    
    if(nav && (<any> window).isMobile.any) {
      this.navHammer = this.navHammer || new (<any> window).Hammer(nav, {
        // touchAction: 'auto'
      });
      // console.log('this.navHammer.un:', this.navHammer, this.navHammer.un);
      this.navHammer.on('tap', (e) => {
        switch (e.target.className) {
          case 'r-drop-menu':
            this.responsive.showMask = true;
            this.responsive.showMenu = true;
            break;
          case 'r-cross':
            this.responsive.showMenu = false;
            this.responsive.showMask = false;
            this.responsive.showSubmenu = false;
            break;
          case 'r-products':
            this.responsive.showMenu = false;
            this.subMenuItems = this.navigationData.subMenu['products'];
            this.responsive.showSubmenu = true;
            this.responsive.submenuType = 'products';
            break;
          case 'r-modules':
            this.responsive.showMenu = false;
            this.subMenuItems = this.navigationData.subMenu['modules'];
            this.responsive.showSubmenu = true;
            this.responsive.submenuType = 'modules';
            break;
          // case 'r-anchor':
          case 'r-anchor-h':
          case 'r-anchor-p':
            setTimeout(() => {
              this.responsive.showMask = false;
              this.responsive.showSubmenu = false;
              this.showSubmenu = false;
            }, 16.67);
            break;
          case 'r-back':
            this.responsive.showMenu = true;
            this.responsive.showMask = true;
            this.responsive.showSubmenu = false;
            break;
          case 'r-submenu-top':
            console.log('r-submenu-top');
            break;
          default:
            // code...
            break;
        }
      });
    }
  }

  onTap() {
    setTimeout(cb => {
      this.responsive.showMask = false;
      this.responsive.showSubmenu = false;
      this.showSubmenu = false;
    }, 16.67);
  }

}
