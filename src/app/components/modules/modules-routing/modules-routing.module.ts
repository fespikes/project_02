import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ModulesComponent } from '../modules.component';

const adminRoutes: Routes = [
  {
    path: 'modules',
    component: ModulesComponent,
    children: [
      {
        path: '',
        children: [
          {
            path: 'tdh-platform-products',
            children: [
              {
                path: ''
              }
            ]
          },
          // { path: 'data-mart', component: DataMartComponent },

          // { path: '', component: DataWarehouseComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})


export class ModulesRoutingModule { }
