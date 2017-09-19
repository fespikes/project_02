import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { TuiModule, TccModalService } from './tui';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { HomeModule } from './components/home/home.module';
import { ModulesModule } from './components/modules/modules.module';
import { ProductsModule } from './components/products/products.module';
import { BusinessScenarioModule } from './components/business-scenario/business-scenario.module';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';

import { NavTopComponent } from './components/nav-top/nav-top.component';
import { NavBottomComponent } from './components/nav-bottom/nav-bottom.component';

import {
  I18nModule,
  TranslateService,
  TranslateResolver,
  TranslateToken,
  I18nLangService,
} from './i18n';

import { DocumentsSupportComponent } from './components/documents-support/documents-support.component';
import { ManagementCenterComponent } from './components/management-center/management-center.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavTopComponent,
    NavBottomComponent,
    PageNotFoundComponent,
    DocumentsSupportComponent,
    ManagementCenterComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TuiModule,
    SharedModule,

    HomeModule,
    ProductsModule,
    BusinessScenarioModule,
    ModulesModule,

    AppRoutingModule,
  ],
  providers: [
    I18nLangService,
    TranslateService,
    TccModalService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
