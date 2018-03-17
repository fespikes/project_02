import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ModulesComponent } from './components/modules/modules.component';
import { BusinessScenariosComponent } from './components/business-scenarios/business-scenarios.component';
import { DocumentsSupportComponent } from './components/documents-support/documents-support.component';
import { ManagementCenterComponent } from './components/management-center/management-center.component';

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
    path: 'modules',
    loadChildren: './components/modules/modules.module#ModulesModule'
  },
  {
    path: 'after-sale-service',
    loadChildren: 'app/components/after-sale-service/after-sale-service.module#AfterSaleServiceModule'
  },
/*  {
    path: 'video-tutorial',
    loadChildren: 'app/components/video-tutorial/video-tutorial.module#VideoTutorialModule'
  },*/
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, 
      {
        useHash: true,
        // enableTracing: true, // <-- debugging purposes only
        preloadingStrategy: PreloadAllModules
      }
    ),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
