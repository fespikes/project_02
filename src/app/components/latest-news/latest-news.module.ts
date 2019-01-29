import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';

import { LatestNewsRoutingModule } from './latest-news-routing.module';

import { LatestNewsComponent } from './latest-news.component';
import { LatestNewsService } from './latest-news.service';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
import { AdminComponent } from './admin/admin.component';
import { Base64Directive } from 'app/shared/base64.directive';
// import { BreadCrumbsComponent } from '../common/components/bread-crumbs/bread-crumbs.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LatestNewsRoutingModule,
    QuillModule
  ],
  declarations: [
    LatestNewsComponent,
    BreadCrumbsComponent,
    AdminComponent,
    Base64Directive,
    // BreadCrumbsComponent
  ],
  providers: [
    LatestNewsService
  ]
})
export class LatestNewsModule { }
