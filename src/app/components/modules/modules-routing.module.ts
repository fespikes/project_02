import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DiscoverComponent } from './product/discover/discover.component';
import { GuardianComponent } from './product/guardian/guardian.component';
import { HadoopComponent } from './product/hadoop/hadoop.component';
import { HyperbaseComponent } from './product/hyperbase/hyperbase.componnet';
import { InceptorComponent } from './product/inceptor/inceptor.component';
import { SearchComponent } from './product/search/search.component';
import { SlipsteamComponent } from './product/slipsteam/slipsteam.component';
import { SophonComponent } from './product/sophon/sophon.component';

import { ModulesComponent } from './modules.component'

const routes: Routes = [
    {
      path: 'modules',
      component: ModulesComponent,
      children: [
        {
          path: 'product/inceptor',
          component: InceptorComponent,
        },
        {
          path: 'product/slipsteam',
          component: SlipsteamComponent,
        },
        {
          path: 'product/discover',
          component: DiscoverComponent,
        },
        {
          path: 'product/hyperbase',
          component: HyperbaseComponent,
        },
        {
          path: 'product/search',
          component: SearchComponent,
        },
        {
          path: 'product/sophon',
          component: SophonComponent,
        },
        {
          path: 'product/guardian',
          component: GuardianComponent,
        },
        {
          path: 'product/hadoop',
          component: HadoopComponent,
        },
      ]
    },
  ];

  @NgModule({
    imports: [
      RouterModule.forChild(routes),
    ],
    exports: [
      RouterModule,
    ],
  })
  export class ModulesRoutingModule {
  }

