import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { TuiModule, TccModalService } from './tui';
import { TdcApiService } from './shared/services/api.service';

import { CommonService } from './components/common/services/common.service';

import { NavTopService } from './components/nav-top/nav-top.service';
import { TdcModule } from './components/common/components/index';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { HomeModule } from './components/home/home.module';
import { ModulesModule } from './components/modules/modules.module';
import { DocumentsSupportModule } from './components/documents-support/documents-support.module';
// import { ProductsModule } from './components/products/products.module';
// import { LatestNewsModule } from './components/latest-news/latest-news.module';
import { BusinessScenarioModule } from './components/business-scenario/business-scenario.module';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { ManagementCenterComponent } from './components/management-center/management-center.component';
import { NavTopComponent } from './components/nav-top/nav-top.component';

import { NavBottomComponent } from './components/nav-bottom/nav-bottom.component';

// import { AfterSaleServiceModule } from './components/after-sale-service/after-sale-service.module';
// import { AfterSaleServiceComponent } from './components/after-sale-service/after-sale-service.component';

import {
  I18nModule,
  TranslateService,
  TranslateResolver,
  TranslateToken,
  I18nLangService,
} from './i18n';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavTopComponent,
    NavBottomComponent,
    PageNotFoundComponent,
    ManagementCenterComponent,
    // AfterSaleServiceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule,
    TuiModule,
    TdcModule,
    SharedModule,
    HomeModule,
    BusinessScenarioModule,  //related to app-routing.module

    DocumentsSupportModule,
    AppRoutingModule,
  ],
  providers: [
    I18nLangService,
    TranslateService,
    TccModalService,
    TdcApiService,
    NavTopService,
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
