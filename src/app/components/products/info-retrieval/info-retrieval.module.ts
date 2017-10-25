import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//S: common
  import { TabsDirective } from '../common/components/tabs/tabs.directive';
  import { BannerDirective } from '../common/components/banner/banner.directive';
  import { FunctionalitiesDirective } from '../common/components/functionalities/functionalities.directive';
  import { AdvantagesDirective } from '../common/components/advantages/advantages.directive';
  import { ScenariosDirective } from '../common/components/scenarios/scenarios.directive';
  import { ComponentIntroDirective } from '../common/components/component-intro/component-intro.directive';
  import { ComponentIntroChildDirective } from '../common/components/component-intro-child/component-intro-child.directive';
  import { ScenariosChildDirective } from '../common/components/scenarios-child/scenarios-child.directive';

// import { FunctionalitiesComponent as TheFunctionalitiesComponent } from '../common/components/functionalities/functionalities/functionalities.component';
// import { AdvantagesComponent as TheAdvantagesComponent } from '../common/components/advantages/advantages/advantages.component';
// import { ScenariosComponent as TheScenariosComponent } from '../common/components/scenarios/scenarios/scenarios.component';
// import { ComponentIntroComponent as TheComponentIntroComponent } from '../common/components/component-intro/component-intro/component-intro.component';
// import { BannerComponent as TheBannerComponent } from '../common/components/banner/banner/banner.component';
// import { TabsComponent as TheTabsComponent } from '../common/components/tabs/tabs/tabs.component';
// import { ComponentIntroChildComponent as TheComponentIntroChildComponent } from '../common/components/component-intro-child/component-intro-child/component-intro-child.component';
// import { ScenariosChildComponent as TheScenariosChildComponent } from '../common/components/scenarios-child/scenarios-child/scenarios-child.component';
// import { ComponentIntroChildComponent } from '../common/components/component-intro-child/component-intro-child.component';
// import { BannerComponent } from '../common/components/banner/banner.component';
// import { TabsComponent } from '../common/components/tabs/tabs.component';
// import { ScenariosChildComponent } from '../common/components/scenarios-child/scenarios-child.component';
//E: common
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
		TabsDirective,
    BannerDirective,
    AdvantagesDirective,
    ScenariosDirective,
    ComponentIntroDirective,
    ScenariosChildDirective,
    ComponentIntroChildDirective,
    FunctionalitiesDirective,

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
