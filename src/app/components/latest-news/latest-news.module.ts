import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LatestNewsRoutingModule } from './latest-news-routing.module';

import { TheNewsComponent } from './the-news/the-news.component';
import { LatestNewsComponent } from './latest-news.component';
import { LatestNewsService } from './latest-news.service';

@NgModule({
  imports: [
    CommonModule,
    LatestNewsRoutingModule
  ],
  declarations: [
  	TheNewsComponent,
  	LatestNewsComponent
  ],
  providers: [
  	LatestNewsService
  ]
})
export class LatestNewsModule { }
