import { Component, OnInit } from '@angular/core';

import { BreadCrumbsComponent as TheBreadCrumbsComponent }  from '../../common/components/bread-crumbs/bread-crumbs.component';

@Component({
  selector: 'bread-crumbs',
  styleUrls: ['../../common/components/bread-crumbs/bread-crumbs.component.sass'],
  templateUrl: '../../common/components/bread-crumbs/bread-crumbs.component.html',
})
export class BreadCrumbsComponent extends TheBreadCrumbsComponent {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
