import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LatestNewsRoutingModule } from './latest-news-routing.module';

import { LatestNewsComponent } from './latest-news.component';
import { LatestNewsService } from './latest-news.service';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
// import { BreadCrumbsComponent } from '../common/components/bread-crumbs/bread-crumbs.component';

@NgModule({
  imports: [
    CommonModule,
    LatestNewsRoutingModule
  ],
  declarations: [
  	LatestNewsComponent,
  	BreadCrumbsComponent,
    // BreadCrumbsComponent
  ],
  providers: [
  	LatestNewsService
  ]
})
export class LatestNewsModule { }
