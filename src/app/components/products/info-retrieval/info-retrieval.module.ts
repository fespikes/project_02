import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { InfoRetrievalRoutingModule } from './info-retrieval-routing.module';

import { InfoRetrievalComponent } from './info-retrieval.component';
import { InfoRetrievalService } from './info-retrieval.service';
import { InfoRetrievalBannerComponent } from './info-retrieval-banner/info-retrieval-banner.component';
import { InfoRetrievalTabsComponent } from './info-retrieval-tabs/info-retrieval-tabs.component';
import { InfoRetrievalFunctionalitiesComponent } from './info-retrieval-functionalities/info-retrieval-functionalities.component';
import { InfoRetrievalAdvantagesComponent } from './info-retrieval-advantages/info-retrieval-advantages.component';
import { InfoRetrievalScenariosComponent } from './info-retrieval-scenarios/info-retrieval-scenarios.component';
	import { DataSearchEngineComponent } from './info-retrieval-scenarios/data-search-engine/data-search-engine.component';
	import { LogAcquisitionAnalysisComponent } from './info-retrieval-scenarios/log-acquisition-analysis/log-acquisition-analysis.component';
	import { BusinessAnalysisComponent } from './info-retrieval-scenarios/business-analysis/business-analysis.component';

import { InfoRetrievalComponentIntroComponent } from './info-retrieval-component-intro/info-retrieval-component-intro.component';
	import { OperationDevToolsComponent } from './info-retrieval-component-intro/operation-dev-tools/operation-dev-tools.component';
	import { TdhDevKitsComponent } from './info-retrieval-component-intro/tdh-dev-kits/tdh-dev-kits.component';
	import { TdhPlatformProductsComponent } from './info-retrieval-component-intro/tdh-platform-products/tdh-platform-products.component';

@NgModule({
  imports: [
    CommonModule,
    InfoRetrievalRoutingModule
  ],
  declarations: [

		InfoRetrievalComponent,
		InfoRetrievalBannerComponent,
		InfoRetrievalTabsComponent,
		InfoRetrievalFunctionalitiesComponent,
		InfoRetrievalAdvantagesComponent,
		InfoRetrievalScenariosComponent,
		DataSearchEngineComponent,
		LogAcquisitionAnalysisComponent,
		BusinessAnalysisComponent,
		InfoRetrievalComponentIntroComponent,
		OperationDevToolsComponent,
		TdhDevKitsComponent,
		TdhPlatformProductsComponent
  ],
  providers: [
  	InfoRetrievalService
  ],
/*  entryComponents: [
    TheBannerComponent,
    TheTabsComponent,
    TheFunctionalitiesComponent,
    TheAdvantagesComponent,
    TheScenariosComponent,
    TheComponentIntroComponent,
    TheScenariosChildComponent,
    TheComponentIntroChildComponent
   ]*/
})
export class InfoRetrievalModule { }
