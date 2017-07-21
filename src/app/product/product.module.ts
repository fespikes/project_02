import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductLayoutComponent } from './product-layout/product-layout.component';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
  ],
  declarations: [
    ProductLayoutComponent,
  ],
})
export class ProductModule { }
