import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TuiModule, TccModalService } from '../../tui';
import { TdcModule } from '../common/components/tdc.module';

import { ProductsRoutingModule } from './products-routing.module';

import { ProductsComponent } from './products.component';
import { ProductsService } from './products.service';

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
import { FunctionalitiesComponent } from './common/components/functionalities/functionalities.component';
import { AdvantagesComponent as TheAdvantagesComponent } from './common/components/advantages/advantages/advantages.component';
import { AdvantagesComponent } from './common/components/advantages/advantages.component'
import { ScenariosComponent as TheScenariosComponent } from './common/components/scenarios/scenarios/scenarios.component';
import { ScenariosComponent } from './common/components/scenarios/scenarios.component';
import { ComponentIntroComponent as TheComponentIntroComponent } from './common/components/component-intro/component-intro/component-intro.component';
import { ComponentIntroComponent } from './common/components/component-intro/component-intro.component';
import { BannerComponent as TheBannerComponent } from './common/components/banner/banner/banner.component';
import { TabsComponent as TheTabsComponent } from './common/components/tabs/tabs/tabs.component';
import { ComponentIntroChildComponent as TheComponentIntroChildComponent } from './common/components/component-intro-child/component-intro-child/component-intro-child.component';
import { ScenariosChildComponent as TheScenariosChildComponent } from './common/components/scenarios-child/scenarios-child/scenarios-child.component';
import { ComponentIntroChildComponent } from './common/components/component-intro-child/component-intro-child.component';
import { BannerComponent } from './common/components/banner/banner.component';
import { TabsComponent } from './common/components/tabs/tabs.component';
import { ScenariosChildComponent } from './common/components/scenarios-child/scenarios-child.component';
//E: products common

//data-warehouse
import { DataWarehouseComponent } from './data-warehouse/data-warehouse.component';
import { DataWarehouseService } from './data-warehouse/data-warehouse.service';
import { DataWarehouseBannerComponent } from './data-warehouse/data-warehouse-banner/data-warehouse-banner.component';
import { DataWarehouseTabsComponent } from './data-warehouse/data-warehouse-tabs/data-warehouse-tabs.component';
import { DataWarehouseFunctionalitiesComponent } from './data-warehouse/data-warehouse-functionalities/data-warehouse-functionalities.component';
import { DataWarehouseAdvantagesComponent } from './data-warehouse/data-warehouse-advantages/data-warehouse-advantages.component';
import { DataWarehouseScenariosComponent } from './data-warehouse/data-warehouse-scenarios/data-warehouse-scenarios.component';
import { DataWarehouseComponentIntroComponent } from './data-warehouse/data-warehouse-component-intro/data-warehouse-component-intro.component';

//data mart
// import { DataMartModule } from './data-mart/data-mart.module';
import { DataMartService } from './data-mart/data-mart.service';
import { DataMartComponent } from './data-mart/data-mart.component';
import { DataMartBannerComponent } from './data-mart/data-mart-banner/data-mart-banner.component';
import { DataMartTabsComponent } from './data-mart/data-mart-tabs/data-mart-tabs.component';

import { DataMartFunctionalitiesComponent } from './data-mart/data-mart-functionalities/data-mart-functionalities.component';
import { DataMartAdvantagesComponent } from './data-mart/data-mart-advantages/data-mart-advantages.component';
import { DataMartComponentIntroComponent } from './data-mart/data-mart-component-intro/data-mart-component-intro.component';
import { DataMartScenariosComponent } from './data-mart/data-mart-scenarios/data-mart-scenarios.component';

//S: info-retrieval
// import { InfoRetrievalModule } from './info-retrieval/info-retrieval.module';
import { InfoRetrievalComponent } from './info-retrieval/info-retrieval.component';
import { InfoRetrievalService } from './info-retrieval/info-retrieval.service';
import { InfoRetrievalBannerComponent } from './info-retrieval/info-retrieval-banner/info-retrieval-banner.component';
import { InfoRetrievalTabsComponent } from './info-retrieval/info-retrieval-tabs/info-retrieval-tabs.component';
import { InfoRetrievalFunctionalitiesComponent } from './info-retrieval/info-retrieval-functionalities/info-retrieval-functionalities.component';
import { InfoRetrievalAdvantagesComponent } from './info-retrieval/info-retrieval-advantages/info-retrieval-advantages.component';
import { InfoRetrievalScenariosComponent } from './info-retrieval/info-retrieval-scenarios/info-retrieval-scenarios.component';
import { InfoRetrievalComponentIntroComponent } from './info-retrieval/info-retrieval-component-intro/info-retrieval-component-intro.component';

import { RelationalDatabaseComponent } from './relational-database/relational-database.component';
import { RelationalDatabaseService } from './relational-database/relational-database.service';
import { RelationalDatabaseAdvantagesComponent } from './relational-database/relational-database-advantages/relational-database-advantages.component';
import { RelationalDatabaseBannerComponent } from './relational-database/relational-database-banner/relational-database-banner.component';
import { RelationalDatabaseComponentIntroComponent } from './relational-database/relational-database-component-intro/relational-database-component-intro.component';
import { RelationalDatabaseFunctionalitiesComponent } from './relational-database/relational-database-functionalities/relational-database-functionalities.component';
import { RelationalDatabaseScenariosComponent } from './relational-database/relational-database-scenarios/relational-database-scenarios.component';
import { RelationalDatabaseTabsComponent } from './relational-database/relational-database-tabs/relational-database-tabs.component';

import { AnalysisMiningService } from './analysis-mining/analysis-mining.service';
import { AnalysisMiningComponent } from './analysis-mining/analysis-mining.component';
import { AnalysisMiningAdvantagesComponent } from './analysis-mining/analysis-mining-advantages/analysis-mining-advantages.component';
import { AnalysisMiningBannerComponent } from './analysis-mining/analysis-mining-banner/analysis-mining-banner.component';
import { AnalysisMiningComponentIntroComponent } from './analysis-mining/analysis-mining-component-intro/analysis-mining-component-intro.component';
import { AnalysisMiningFunctionalitiesComponent } from './analysis-mining/analysis-mining-functionalities/analysis-mining-functionalities.component';
import { AnalysisMiningScenariosComponent } from './analysis-mining/analysis-mining-scenarios/analysis-mining-scenarios.component';
import { AnalysisMiningTabsComponent } from './analysis-mining/analysis-mining-tabs/analysis-mining-tabs.component';


import { DeepLearningComponent } from './deep-learning/deep-learning.component';
import { DeepLearningService } from './deep-learning/deep-learning.service';
import { DeepLearningAdvantagesComponent } from './deep-learning/deep-learning-advantages/deep-learning-advantages.component';
import { DeepLearningBannerComponent } from './deep-learning/deep-learning-banner/deep-learning-banner.component';
import { DeepLearningComponentIntroComponent } from './deep-learning/deep-learning-component-intro/deep-learning-component-intro.component';
import { DeepLearningFunctionalitiesComponent } from './deep-learning/deep-learning-functionalities/deep-learning-functionalities.component';
import { DeepLearningScenariosComponent } from './deep-learning/deep-learning-scenarios/deep-learning-scenarios.component';
import { DeepLearningTabsComponent } from './deep-learning/deep-learning-tabs/deep-learning-tabs.component';


import { RealtimeComputationComponent } from './realtime-computation/realtime-computation.component';
import { RealtimeComputationService } from './realtime-computation/realtime-computation.service';
import { RealtimeComputationAdvantagesComponent } from './realtime-computation/realtime-computation-advantages/realtime-computation-advantages.component';
import { RealtimeComputationBannerComponent } from './realtime-computation/realtime-computation-banner/realtime-computation-banner.component';
import { RealtimeComputationComponentIntroComponent } from './realtime-computation/realtime-computation-component-intro/realtime-computation-component-intro.component';
import { RealtimeComputationFunctionalitiesComponent } from './realtime-computation/realtime-computation-functionalities/realtime-computation-functionalities.component';
import { RealtimeComputationScenariosComponent } from './realtime-computation/realtime-computation-scenarios/realtime-computation-scenarios.component';
import { RealtimeComputationTabsComponent } from './realtime-computation/realtime-computation-tabs/realtime-computation-tabs.component';


@NgModule({
  imports: [
    CommonModule,
    TuiModule,
    TdcModule,
    ProductsRoutingModule
  ],
  declarations: [
  	ProductsComponent,

    TabsDirective,
    BannerDirective,
    AdvantagesDirective,
    ScenariosDirective,
    ComponentIntroDirective,
    ScenariosChildDirective,
    ComponentIntroChildDirective,
    FunctionalitiesDirective,


  	DataWarehouseComponent,
    DataWarehouseBannerComponent,
    RelationalDatabaseComponent,
    DeepLearningComponent,
    RealtimeComputationComponent,
    AnalysisMiningComponent,

    DataWarehouseTabsComponent,
    DataWarehouseFunctionalitiesComponent,
    DataWarehouseAdvantagesComponent,
    DataWarehouseScenariosComponent,
    DataWarehouseComponentIntroComponent,
    BannerComponent,
    TabsComponent,
    ScenariosChildComponent,
    ComponentIntroChildComponent,

    TheFunctionalitiesComponent,
    FunctionalitiesComponent,
    TheAdvantagesComponent,
    AdvantagesComponent,
    TheScenariosComponent,
    ScenariosComponent,
    TheComponentIntroComponent,
    ComponentIntroComponent,
    TheBannerComponent,
    TheTabsComponent,
    TheScenariosChildComponent,
    TheComponentIntroChildComponent,

//data-mart
    DataMartComponent,
    DataMartFunctionalitiesComponent,
    DataMartAdvantagesComponent,
    DataMartScenariosComponent,
    DataMartComponentIntroComponent,
    DataMartBannerComponent,
    DataMartTabsComponent,

//info-retrieval

    InfoRetrievalComponent,
    InfoRetrievalBannerComponent,
    InfoRetrievalTabsComponent,
    InfoRetrievalFunctionalitiesComponent,
    InfoRetrievalAdvantagesComponent,
    InfoRetrievalScenariosComponent,
    InfoRetrievalComponentIntroComponent,

    RelationalDatabaseAdvantagesComponent,
    RelationalDatabaseBannerComponent,
    RelationalDatabaseComponentIntroComponent,
    RelationalDatabaseFunctionalitiesComponent,
    RelationalDatabaseScenariosComponent,
    RelationalDatabaseTabsComponent,

    AnalysisMiningAdvantagesComponent,
    AnalysisMiningBannerComponent,
    AnalysisMiningComponentIntroComponent,
    AnalysisMiningFunctionalitiesComponent,
    AnalysisMiningScenariosComponent,
    AnalysisMiningTabsComponent,

    DeepLearningAdvantagesComponent,
    DeepLearningBannerComponent,
    DeepLearningComponentIntroComponent,
    DeepLearningFunctionalitiesComponent,
    DeepLearningScenariosComponent,
    DeepLearningTabsComponent,

    RealtimeComputationAdvantagesComponent,
    RealtimeComputationBannerComponent,
    RealtimeComputationComponentIntroComponent,
    RealtimeComputationFunctionalitiesComponent,
    RealtimeComputationScenariosComponent,
    RealtimeComputationTabsComponent,
  ],
  providers: [
    TccModalService,
    ProductsService,
    DataWarehouseService,
    DataMartService,
    InfoRetrievalService,
    AnalysisMiningService,
    DeepLearningService,
    RealtimeComputationService,
    RelationalDatabaseService
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
