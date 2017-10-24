import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiModule, TccModalService } from '../../tui';
import { TdcModule } from '../common/components/tdc.module';

import { ProductsRoutingModule } from './products-routing.module';

import { ProductsComponent } from './products.component';
import { ProductsService } from './products.service';

import { DataWarehouseComponent } from './data-warehouse/data-warehouse.component';
import { RelationalDatabaseComponent } from './relational-database/relational-database.component';
import { DeepLearningComponent } from './deep-learning/deep-learning.component';
import { RealtimeComputationComponent } from './realtime-computation/realtime-computation.component';
import { AnalysisMiningComponent } from './analysis-mining/analysis-mining.component';

import { DataWarehouseModule } from './data-warehouse/data-warehouse.module';

import { FunctionalitiesComponent } from './data-warehouse/functionalities/functionalities.component';
import { AdvantagesComponent } from './data-warehouse/advantages/advantages.component';
import { ScenariosComponent } from './data-warehouse/scenarios/scenarios.component';
import { ComponentIntroComponent } from './data-warehouse/component-intro/component-intro.component';
import { ExpenseExplanationComponent } from './data-warehouse/expense-explanation/expense-explanation.component';

//S: products common
  //common directives
  import { FunctionalitiesDirective } from './common/components/functionalities/functionalities.directive';
  import { AdvantagesDirective } from './common/components/advantages/advantages.directive';
  import { ScenariosDirective } from './common/components/scenarios/scenarios.directive';
  import { ComponentIntroDirective } from './common/components/component-intro/component-intro.directive';
  import { BannerDirective } from './common/components/banner/banner.directive';
  import { TabsDirective } from './common/components/tabs/tabs.directive';
  import { ComponentIntroChildDirective } from './common/components/component-intro-child/component-intro-child.directive';
  import { ScenariosChildDirective } from './common/components/scenarios-child/scenarios-child.directive';
  
import { FunctionalitiesComponent as TheFunctionalitiesComponent } from './common/components/functionalities/functionalities/functionalities.component';
import { AdvantagesComponent as TheAdvantagesComponent } from './common/components/advantages/advantages/advantages.component';
import { ScenariosComponent as TheScenariosComponent } from './common/components/scenarios/scenarios/scenarios.component';
import { ComponentIntroComponent as TheComponentIntroComponent } from './common/components/component-intro/component-intro/component-intro.component';
import { BannerComponent as TheBannerComponent } from './common/components/banner/banner/banner.component';
import { TabsComponent as TheTabsComponent } from './common/components/tabs/tabs/tabs.component';
import { ComponentIntroChildComponent as TheComponentIntroChildComponent } from './common/components/component-intro-child/component-intro-child/component-intro-child.component';
import { ScenariosChildComponent as TheScenariosChildComponent } from './common/components/scenarios-child/scenarios-child/scenarios-child.component';
import { ComponentIntroChildComponent } from './common/components/component-intro-child/component-intro-child.component';
import { BannerComponent } from './common/components/banner/banner.component';
import { TabsComponent } from './common/components/tabs/tabs.component';
import { ScenariosChildComponent } from './common/components/scenarios-child/scenarios-child.component';
//E: products common

//data mart
import { DataMartService } from './data-mart/data-mart.service';
import { DataMartComponent } from './data-mart/data-mart.component';
import { DataMartBannerComponent } from './data-mart/data-mart-banner/data-mart-banner.component';
import { DataMartTabsComponent } from './data-mart/data-mart-tabs/data-mart-tabs.component';

import { DataMartFunctionalitiesComponent } from './data-mart/data-mart-functionalities/data-mart-functionalities.component';
import { DataMartAdvantagesComponent } from './data-mart/data-mart-advantages/data-mart-advantages.component';
import { DataMartScenariosComponent } from './data-mart/data-mart-scenarios/data-mart-scenarios.component';
import { DataMartComponentIntroComponent } from './data-mart/data-mart-component-intro/data-mart-component-intro.component';
  import { TdhPlatformProductsComponent } from './data-mart/data-mart-component-intro/tdh-platform-products/tdh-platform-products.component';
  import { TdhDevKitsComponent } from './data-mart/data-mart-component-intro/tdh-dev-kits/tdh-dev-kits.component';
  import { OperationDevToolsComponent } from './data-mart/data-mart-component-intro/operation-dev-tools/operation-dev-tools.component';

  import { SelfAnalysisPlatformComponent } from './data-mart/data-mart-scenarios/self-analysis-platform/self-analysis-platform.component';
  import { MarketingAnalysisSystemComponent } from './data-mart/data-mart-scenarios/marketing-analysis-system/marketing-analysis-system.component';
  import { CustomerServiceManagingComponent } from './data-mart/data-mart-scenarios/customer-service-managing/customer-service-managing.component';

//S: info-retrieval
import { InfoRetrievalComponent } from './info-retrieval/info-retrieval.component';
import { InfoRetrievalService } from './info-retrieval/info-retrieval.service';
import { InfoRetrievalBannerComponent } from './info-retrieval/info-retrieval-banner/info-retrieval-banner.component';
import { InfoRetrievalTabsComponent } from './info-retrieval/info-retrieval-tabs/info-retrieval-tabs.component';
import { InfoRetrievalFunctionalitiesComponent } from './info-retrieval/info-retrieval-functionalities/info-retrieval-functionalities.component';
import { InfoRetrievalAdvantagesComponent } from './info-retrieval/info-retrieval-advantages/info-retrieval-advantages.component';
import { InfoRetrievalScenariosComponent } from './info-retrieval/info-retrieval-scenarios/info-retrieval-scenarios.component';
import { InfoRetrievalComponentIntroComponent } from './info-retrieval/info-retrieval-component-intro/info-retrieval-component-intro.component';

@NgModule({
  imports: [
    CommonModule,
    TuiModule,
    TdcModule,
    DataWarehouseModule,
    ProductsRoutingModule
  ],
  declarations: [
  	ProductsComponent,

  	DataWarehouseComponent,
  	DataMartComponent,
  	InfoRetrievalComponent,
  	RelationalDatabaseComponent,
  	DeepLearningComponent,
  	RealtimeComputationComponent,
  	AnalysisMiningComponent,

    FunctionalitiesComponent,
    AdvantagesComponent,
    ScenariosComponent,
    ComponentIntroComponent,
    ExpenseExplanationComponent,

    TabsComponent,
    DataMartFunctionalitiesComponent,
    FunctionalitiesDirective,

    TheFunctionalitiesComponent,
    TheAdvantagesComponent,
    TheScenariosComponent,
    TheComponentIntroComponent,
    TheBannerComponent,
    TheTabsComponent,

    TheScenariosChildComponent,
    TheComponentIntroChildComponent,

    DataMartAdvantagesComponent,
    AdvantagesDirective,
    ScenariosDirective,
    DataMartScenariosComponent,
    DataMartComponentIntroComponent,
    ComponentIntroDirective,
    DataMartBannerComponent,
    BannerComponent,
    BannerDirective,
    TabsDirective,
    DataMartTabsComponent,
    ScenariosChildComponent,
    ComponentIntroChildComponent,
    ScenariosChildDirective,
    ComponentIntroChildDirective,
    SelfAnalysisPlatformComponent,
    MarketingAnalysisSystemComponent,
    CustomerServiceManagingComponent,
    TdhPlatformProductsComponent,
    TdhDevKitsComponent,
    OperationDevToolsComponent,
    InfoRetrievalBannerComponent,
    InfoRetrievalTabsComponent,
    InfoRetrievalFunctionalitiesComponent,
    InfoRetrievalAdvantagesComponent,
    InfoRetrievalScenariosComponent,
    InfoRetrievalComponentIntroComponent
  ],
  providers: [
    TccModalService,
    ProductsService,
    DataMartService,
    InfoRetrievalService,
  ],
  entryComponents: [
    TheBannerComponent,
    TheTabsComponent,
    TheFunctionalitiesComponent,
    TheAdvantagesComponent,
    TheScenariosComponent,
    TheComponentIntroComponent,
    TheScenariosChildComponent,
    TheComponentIntroChildComponent
   ]
})
export class ProductsModule { }
