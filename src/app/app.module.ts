import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './product/product.module';
import { AppComponent } from './app.component';
import { ProductLayoutComponent } from "./product/product-layout/product-layout.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    HomeModule,
    AppRoutingModule,
    ProductModule,
    RouterModule.forRoot([
      {
        path: 'product',
      component: ProductLayoutComponent
    }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
