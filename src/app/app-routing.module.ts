import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductsComponent } from './components/products/products.component';
import { ModulesComponent } from './components/modules/modules.component';
import { BusinessScenarioComponent } from './components/business-scenario/business-scenario.component';
import { DocumentsSupportComponent } from './components/documents-support/documents-support.component';
import { ManagementCenterComponent } from './components/management-center/management-center.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  // {
  //   path: 'products',
  //   component: ProductsComponent
  // },
  {
    path: 'modules',
    component: ModulesComponent
  },
  {
    path: 'business-scenario',
    component: BusinessScenarioComponent
  },
  {
    path: 'documents-support',
    component: DocumentsSupportComponent
  },
  {
    path: 'management-center',
    component: ManagementCenterComponent
  },
/*
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'crisis-center',
    loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule',
    data: { preload: true }
  },*/
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true}),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
