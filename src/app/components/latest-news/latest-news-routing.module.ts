import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TheNewsComponent } from './the-news/the-news.component';
import { LatestNewsComponent } from './latest-news.component';

const latestNewsRoutes: Routes = [
	{
		path: 'latest-news/:id',
    component: LatestNewsComponent
	},
];


@NgModule({
  imports: [
    RouterModule.forChild(latestNewsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LatestNewsRoutingModule { }
