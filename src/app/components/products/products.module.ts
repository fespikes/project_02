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
import { BannerDirective } from './data-mart/product-banner/banner.directive';
import { ProductBannerComponent } from './data-mart/product-banner/product-banner.component';
import { BannerComponent } from './data-mart/product-banner/banner/banner.component';
import { DataMartService } from './data-mart/data-mart.service';
import { ProductTabComponent } from './data-mart/product-tab/product-tab.component';
import { ProductTabDirective } from './data-mart/product-tab/product-tab.directive';

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
    
    BannerDirective,
    ProductBannerComponent,
    BannerComponent,
    ProductTabComponent,
    ProductTabDirective,
    
  ],
  providers: [
    TccModalService,
    DataMartService
  ],
  entryComponents: [ BannerComponent ]
})
export class ProductsModule { }
