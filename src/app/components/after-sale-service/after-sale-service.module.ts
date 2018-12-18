import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfterSaleServiceRoutingModule } from './after-sale-service-routing.module';
import { AfterSaleServiceComponent } from './after-sale-service.component';

@NgModule({
  imports: [
    CommonModule,
    AfterSaleServiceRoutingModule
  ],
  declarations: [
    AfterSaleServiceComponent
  ]
})
export class AfterSaleServiceModule { }
