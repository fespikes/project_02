import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { ProductUtilService } from './services/product-util.service';

@Component({
  selector: 'tdc-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.sass'],
})
export class ModulesComponent implements OnInit {

  moduleTree = [];

  constructor(
    private productUtilService: ProductUtilService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initTreeState();//for the first stepped into

    this.listenRouteChange();
  }

  listenRouteChange() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event) => {
        if((event as any).url && (event as any).url.indexOf('/modules') > -1) {
          this.initTreeState();
        }
      });
  }

  initTreeState() {
    this.moduleTree = this.productUtilService.getModuleTree();
    const moduleType = this.productUtilService.getModuleType(window.location.hash);
    this.moduleTree = this.productUtilService.refreshTreeState(this.moduleTree, moduleType);
  }
}
