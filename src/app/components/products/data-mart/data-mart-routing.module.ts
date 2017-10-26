import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DataMartService } from './data-mart.service';
import { DataMartComponent } from './data-mart.component';
import { DataMartBannerComponent } from './data-mart-banner/data-mart-banner.component';
import { DataMartTabsComponent } from './data-mart-tabs/data-mart-tabs.component';

import { DataMartFunctionalitiesComponent } from './data-mart-functionalities/data-mart-functionalities.component';
import { DataMartAdvantagesComponent } from './data-mart-advantages/data-mart-advantages.component';
import { DataMartComponentIntroComponent } from './data-mart-component-intro/data-mart-component-intro.component';
  import { TdhPlatformProductsComponent } from './data-mart-component-intro/tdh-platform-products/tdh-platform-products.component';
  import { TdhDevKitsComponent } from './data-mart-component-intro/tdh-dev-kits/tdh-dev-kits.component';
  import { OperationDevToolsComponent } from './data-mart-component-intro/operation-dev-tools/operation-dev-tools.component';

import { DataMartScenariosComponent } from './data-mart-scenarios/data-mart-scenarios.component';
  import { SelfAnalysisPlatformComponent } from './data-mart-scenarios/self-analysis-platform/self-analysis-platform.component';
  import { MarketingAnalysisSystemComponent } from './data-mart-scenarios/marketing-analysis-system/marketing-analysis-system.component';
  import { CustomerServiceManagingComponent } from './data-mart-scenarios/customer-service-managing/customer-service-managing.component';


const dataMartRoutes: Routes = [
  {
  	path: '',
  	component: DataMartComponent,

  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dataMartRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class DataMartRoutingModule { }
