import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModulesComponent } from './modules.component';
import { ProductComponent } from './product/product.component';

import { TranslateDeactivator, TranslateResolver, TranslateToken } from '../../i18n';

const routes: Routes = [
    {
      path: 'modules',
      component: ModulesComponent,
      children: [
        {
          path: 'product/inceptor',
          component: ProductComponent,
        },
        {
          path: 'product/slipsteam',
          component: ProductComponent,
        },
        {
          path: 'product/discover',
          component: ProductComponent,
        },
        {
          path: 'product/hyperbase',
          component: ProductComponent,
        },
        {
          path: 'product/search',
          component: ProductComponent,
        },
        {
          path: 'product/sophon',
          component: ProductComponent,
        },
        {
          path: 'product/guardian',
          component: ProductComponent,
        },
        {
          path: 'product/hadoop',
          component: ProductComponent,
        },
      ]
    },
  ];

  @NgModule({
    imports: [
      RouterModule.forChild([
        {
          path: '',
          resolve: [TranslateResolver],
          canDeactivate: [TranslateDeactivator],
          children: routes,
        },
      ]),
    ],
    exports: [
      RouterModule,
    ],
    providers: [
      TranslateResolver,
      TranslateDeactivator,
      {
        provide: TranslateToken,
        useValue: 'modules',
      },
    ],
  })
  export class ModulesRoutingModule {
  }

