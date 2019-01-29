import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { LatestNewsComponent } from './latest-news.component';
import { AuthGuard } from '../../auth.guard';

const latestNewsRoutes: Routes = [
  {
    path: 'latest-news/:id',
    component: LatestNewsComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
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
