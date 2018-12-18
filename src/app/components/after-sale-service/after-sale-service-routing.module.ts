import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AfterSaleServiceComponent } from './after-sale-service.component';

const afterSaleServiceRoutes: Routes = [
  {
    path: '',
    // path: 'after-sale-service',
    component: AfterSaleServiceComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(afterSaleServiceRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AfterSaleServiceRoutingModule { }
