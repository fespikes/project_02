import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModulesComponent } from './modules.component';
import { ProductComponent } from './product/product.component';
import { ProductIntroduceComponent } from './product/introduce/product-introduce.component';
import { ProductAdvantageComponent } from './product/advantage/product-advantage.component';

import { TranslateDeactivator, TranslateResolver, TranslateToken } from '../../i18n/index';

const routes: Routes = [
    {
      path: '',
      component: ModulesComponent,
      children: [
        {
          path: 'platform/inceptor',
          component: ProductComponent,
        }, {
          path: 'platform/slipstream',
          component: ProductComponent,
        }, {
          path: 'platform/discover',
          component: ProductComponent,
        }, {
          path: 'platform/hyperbase',
          component: ProductComponent,
        }, {
          path: 'platform/search',
          component: ProductComponent,
        }, {
          path: 'platform/sophon',
          component: ProductComponent,
        }, {
          path: 'platform/kafka',
          component: ProductComponent,
        }, {
          path: 'platform/redis',
          component: ProductComponent,
        }, {
          path: 'platform/guardian',
          component: ProductComponent,
        }, {
          path: 'platform/hadoop',
          component: ProductComponent,
        }, {
          path: 'tool/pilot',
          component: ProductComponent,
        }, {
          path: 'tool/workflow',
          component: ProductComponent,
        }, {
          path: 'tool/transporter',
          component: ProductComponent,
        }, {
          path: 'tool/governor',
          component: ProductComponent,
        }, {
          path: 'tool/rubik',
          component: ProductComponent,
        }, {
          path: 'tool/zeppelin',
          component: ProductComponent,
        }, {
          path: 'tool/midas',
          component: ProductComponent,
        }, {
          path: 'tool/milano',
          component: ProductComponent,
        }, {
          path: 'tool/terminal',
          component: ProductComponent,
        }, {
          path: 'system/txsql',
          component: ProductComponent,
        }, {
          path: 'system/prometheus',
          component: ProductComponent,
        }, {
          path: 'system/tos',
          component: ProductComponent,
        }, {
          path: '**',
          redirectTo: 'platform/inceptor',
        },
      ],
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

