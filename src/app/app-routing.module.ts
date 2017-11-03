import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
// import { ProductsComponent } from './components/products/products.component';
import { ModulesComponent } from './components/modules/modules.component';
import { BusinessScenarioComponent } from './components/business-scenario/business-scenario.component';
import { DocumentsSupportComponent } from './components/documents-support/documents-support.component';
import { ManagementCenterComponent } from './components/management-center/management-center.component';

// import { LatestNewsComponent } from './components/latest-news/latest-news.component';
// import { AfterSaleServiceComponent } from './components/after-sale-service/after-sale-service.component';


const routes: Routes = [
  {
    path: 'gallery',
    loadChildren: './gallery/gallery.module#GalleryModule',
  },
  {
    path: 'products',
    loadChildren: './components/products/products.module#ProductsModule',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'business-scenarios',
    component: BusinessScenarioComponent

    //below code made error when adding business-scenario/:type
    // loadChildren: './components/business-scenario/business-scenario.module#BusinessScenarioModule'
    //TODO: lazy load
  },

  {
    path: 'modules',
    loadChildren: './components/modules/modules.module#ModulesModule'
  },
  {
    path: 'latest-news',
    loadChildren: 'app/components/latest-news/latest-news.module#LatestNewsModule'
  },
  {
    path: 'after-sale-service',
    // component: AfterSaleServiceComponent,
    loadChildren: 'app/components/after-sale-service/after-sale-service.module#AfterSaleServiceModule'
  },
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
