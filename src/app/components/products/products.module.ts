import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiModule, TccModalService } from '../../tui';

import { ProductsRoutingModule } from './products-routing.module';

import { ProductsComponent } from './products.component';
import { DataWarehouseComponent } from './data-warehouse/data-warehouse.component';
import { DataMartComponent } from './data-mart/data-mart.component';
import { InfoRetrievalComponent } from './info-retrieval/info-retrieval.component';
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


import { DataMartService } from './data-mart/data-mart.service';
import { DataMartFunctionalitiesComponent } from './data-mart/data-mart-functionalities/data-mart-functionalities.component';

import { FunctionalitiesComponent as TheFunctionalitiesComponent } from './common/components/functionalities/functionalities/functionalities.component';
import { AdvantagesComponent as TheAdvantagesComponent } from './common/components/advantages/advantages/advantages.component';
import { ScenariosComponent as TheScenariosComponent } from './common/components/scenarios/scenarios/scenarios.component';
import { ComponentIntroComponent as TheComponentIntroComponent } from './common/components/component-intro/component-intro/component-intro.component';
import { BannerComponent as TheBannerComponent } from './common/components/banner/banner/banner.component';
import { TabsComponent as TheTabsComponent } from './common/components/tabs/tabs/tabs.component';

//to be confirmed
import { FunctionalitiesDirective } from './common/components/functionalities/functionalities.directive';
import { DataMartAdvantagesComponent } from './data-mart/data-mart-advantages/data-mart-advantages.component';
import { AdvantagesDirective } from './common/components/advantages/advantages.directive';
import { ScenariosDirective } from './common/components/scenarios/scenarios.directive';
import { DataMartScenariosComponent } from './data-mart/data-mart-scenarios/data-mart-scenarios.component';
import { DataMartComponentIntroComponent } from './data-mart/data-mart-component-intro/data-mart-component-intro.component';
import { ComponentIntroDirective } from './common/components/component-intro/component-intro.directive';
import { DataMartBannerComponent } from './data-mart/data-mart-banner/data-mart-banner.component';
import { BannerComponent } from './common/components/banner/banner.component';
import { TabsComponent } from './common/components/tabs/tabs.component';
import { BannerDirective } from './common/components/banner/banner.directive';
import { TabsDirective } from './common/components/tabs/tabs.directive';
import { DataMartTabsComponent } from './data-mart/data-mart-tabs/data-mart-tabs.component';

@NgModule({
  imports: [
    CommonModule,
    TuiModule,
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
    DataMartTabsComponent
  ],
  providers: [
    TccModalService,
    DataMartService
  ],
  entryComponents: [
    TheBannerComponent,
    TheTabsComponent,
    TheFunctionalitiesComponent,
    TheAdvantagesComponent,
    TheScenariosComponent,
    TheComponentIntroComponent,
   ]
})
export class ProductsModule { }
