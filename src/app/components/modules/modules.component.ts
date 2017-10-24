import { Component, OnInit, HostBinding } from '@angular/core';
import {  } from '@an';

import { ProductUtilService } from './services/product-util.service';

@Component({
  selector: 'tdc-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.sass'],
})
export class ModulesComponent implements OnInit {

  moduleTypes = [];
  moduleItems = [];

  constructor(
    private productUtilService: ProductUtilService
  ) { }

  ngOnInit() {

    let moduleTree = this.productUtilService.getModuleTree();
    this.moduleTypes = moduleTree.types;
    this.moduleItems = moduleTree.items;

    let moduleType = this.productUtilService.getModuleType(window.location.hash);
    this.moduleItems = this.productUtilService.refreshListState(this.moduleItems, moduleType);

    var sheets = document.styleSheets;
    console.log('modules-sheets=', sheets);
  }

  onModuleChange(module) {
  }
}
