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
          path: 'product/slipstream',
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
        {
          path: 'suite/pilot',
          component: ProductComponent,
        },
        {
          path: 'suite/workflow',
          component: ProductComponent,
        },
        {
          path: 'suite/transporter',
          component: ProductComponent,
        },
        {
          path: 'suite/governor',
          component: ProductComponent,
        },
        {
          path: 'suite/rubik',
          component: ProductComponent,
        },
        {
          path: 'tool/waterdrop',
          component: ProductComponent,
        },
        {
          path: 'tool/txsql',
          component: ProductComponent,
        },
        {
          path: 'tool/prometheus',
          component: ProductComponent,
        },
        {
          path: 'tool/kafka',
          component: ProductComponent,
        },
        {
          path: 'tool/zeppelin',
          component: ProductComponent,
        },
        {
          path: 'tool/midas',
          component: ProductComponent,
        },
        {
          path: 'tool/terminal',
          component: ProductComponent,
        },
        {
          path: 'tool/redis',
          component: ProductComponent,
        }
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

