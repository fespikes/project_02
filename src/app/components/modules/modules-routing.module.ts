import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModulesComponent } from './modules.component';
import { ProductComponent } from './product/product.component';
import { ProductIntroduceComponent } from './product-introduce/product-introduce.component';
import { ProductAdvantageComponent } from './product-advantage/product-advantage.component';

import { TranslateDeactivator, TranslateResolver, TranslateToken } from '../../i18n';

const routes: Routes = [
    {
      path: 'modules',
      component: ModulesComponent,
      children: [
        {
          path: 'product/inceptor',
          component: ProductComponent,
          children: [
            {
              path: 'introduce',
              component: ProductIntroduceComponent
            },
            {
              path: 'advantage',
              component: ProductAdvantageComponent
            },
            {
              path: '**',
              component: ProductIntroduceComponent
            }
          ]
        },
        {
          path: 'product/slipstream',
          component: ProductComponent,
          children: [
            {
              path: 'introduce',
              component: ProductIntroduceComponent
            },
            {
              path: 'advantage',
              component: ProductAdvantageComponent
            },
            {
              path: '**',
              component: ProductIntroduceComponent
            }
          ]
        },
        {
          path: 'product/discover',
          component: ProductComponent,
          children: [
            {
              path: 'introduce',
              component: ProductIntroduceComponent
            },
            {
              path: 'advantage',
              component: ProductAdvantageComponent
            },
            {
              path: '**',
              component: ProductIntroduceComponent
            }
          ]
        },
        {
          path: 'product/hyperbase',
          component: ProductComponent,
          children: [
            {
              path: 'introduce',
              component: ProductIntroduceComponent
            },
            {
              path: 'advantage',
              component: ProductAdvantageComponent
            },
            {
              path: '**',
              component: ProductIntroduceComponent
            }
          ]
        },
        {
          path: 'product/search',
          component: ProductComponent,
          children: [
            {
              path: 'introduce',
              component: ProductIntroduceComponent
            },
            {
              path: 'advantage',
              component: ProductAdvantageComponent
            },
            {
              path: '**',
              component: ProductIntroduceComponent
            }
          ]
        },
        {
          path: 'product/sophon',
          component: ProductComponent,
          children: [
            {
              path: 'introduce',
              component: ProductIntroduceComponent
            },
            {
              path: 'advantage',
              component: ProductAdvantageComponent
            },
            {
              path: '**',
              component: ProductIntroduceComponent
            }
          ]
        },
        {
          path: 'product/guardian',
          component: ProductComponent,
          children: [
            {
              path: 'introduce',
              component: ProductIntroduceComponent
            },
            {
              path: 'advantage',
              component: ProductAdvantageComponent
            },
            {
              path: '**',
              component: ProductIntroduceComponent
            }
          ]
        },
        {
          path: 'product/hadoop',
          component: ProductComponent,
          children: [
            {
              path: 'introduce',
              component: ProductIntroduceComponent
            },
            {
              path: 'advantage',
              component: ProductAdvantageComponent
            },
            {
              path: '**',
              component: ProductIntroduceComponent
            }
          ]
        },
        {
          path: 'suite/:name',
          component: ProductComponent,
          children: [
            {
              path: 'introduce',
              component: ProductIntroduceComponent
            },
            {
              path: 'advantage',
              component: ProductAdvantageComponent
            },
            {
              path: '**',
              component: ProductIntroduceComponent
            }
          ]
        },
        {
          path: 'suite/workflow',
          component: ProductComponent,
          children: [
            {
              path: 'introduce',
              component: ProductIntroduceComponent
            },
            {
              path: 'advantage',
              component: ProductAdvantageComponent
            },
            {
              path: '**',
              component: ProductIntroduceComponent
            }
          ]
        },
        {
          path: 'suite/transporter',
          component: ProductComponent,
          children: [
            {
              path: 'introduce',
              component: ProductIntroduceComponent
            },
            {
              path: 'advantage',
              component: ProductAdvantageComponent
            },
            {
              path: '**',
              component: ProductIntroduceComponent
            }
          ]
        },
        {
          path: 'suite/governor',
          component: ProductComponent,
          children: [
            {
              path: 'introduce',
              component: ProductIntroduceComponent
            },
            {
              path: 'advantage',
              component: ProductAdvantageComponent
            },
            {
              path: '**',
              component: ProductIntroduceComponent
            }
          ]
        },
        {
          path: 'suite/rubik',
          component: ProductComponent,
          children: [
            {
              path: 'introduce',
              component: ProductIntroduceComponent
            },
            {
              path: 'advantage',
              component: ProductAdvantageComponent
            },
            {
              path: '**',
              component: ProductIntroduceComponent
            }
          ]
        },
        {
          path: 'tool/:name',
          component: ProductComponent,
          children: [
            {
              path: 'introduce',
              component: ProductIntroduceComponent
            },
            {
              path: 'advantage',
              component: ProductAdvantageComponent
            },
            {
              path: '**',
              component: ProductIntroduceComponent
            }
          ]
        },
        {
          path: 'tool/txsql',
          component: ProductComponent,
          children: [
            {
              path: 'introduce',
              component: ProductIntroduceComponent
            },
            {
              path: 'advantage',
              component: ProductAdvantageComponent
            },
            {
              path: '**',
              component: ProductIntroduceComponent
            }
          ]
        },
        {
          path: 'tool/prometheus',
          component: ProductComponent,
          children: [
            {
              path: 'introduce',
              component: ProductIntroduceComponent
            },
            {
              path: 'advantage',
              component: ProductAdvantageComponent
            },
            {
              path: '**',
              component: ProductIntroduceComponent
            }
          ]
        },
        {
          path: 'tool/kafka',
          component: ProductComponent,
          children: [
            {
              path: 'introduce',
              component: ProductIntroduceComponent
            },
            {
              path: 'advantage',
              component: ProductAdvantageComponent
            },
            {
              path: '**',
              component: ProductIntroduceComponent
            }
          ]
        },
        {
          path: 'tool/zeppelin',
          component: ProductComponent,
          children: [
            {
              path: 'introduce',
              component: ProductIntroduceComponent
            },
            {
              path: 'advantage',
              component: ProductAdvantageComponent
            },
            {
              path: '**',
              component: ProductIntroduceComponent
            }
          ]
        },
        {
          path: 'tool/midas',
          component: ProductComponent,
          children: [
            {
              path: 'introduce',
              component: ProductIntroduceComponent
            },
            {
              path: 'advantage',
              component: ProductAdvantageComponent
            },
            {
              path: '**',
              component: ProductIntroduceComponent
            }
          ]
        },
        {
          path: 'tool/terminal',
          component: ProductComponent,
          children: [
            {
              path: 'introduce',
              component: ProductIntroduceComponent
            },
            {
              path: 'advantage',
              component: ProductAdvantageComponent
            },
            {
              path: '**',
              component: ProductIntroduceComponent
            }
          ]
        },
        {
          path: 'tool/redis',
          component: ProductComponent,
          children: [
            {
              path: 'introduce',
              component: ProductIntroduceComponent
            },
            {
              path: 'advantage',
              component: ProductAdvantageComponent
            },
            {
              path: '**',
              component: ProductIntroduceComponent
            }
          ]
        },
        {
          path: '**',
          redirectTo: 'product/inceptor/introduce'
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

