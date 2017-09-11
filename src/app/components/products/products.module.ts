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
import { FunctionalitiesComponent } from './data-warehouse/functionalities/functionalities.component';
import { AdvantagesComponent } from './data-warehouse/advantages/advantages.component';
import { ScenariosComponent } from './data-warehouse/scenarios/scenarios.component';
import { ComponentIntroComponent } from './data-warehouse/component-intro/component-intro.component';
import { ExpenseExplanationComponent } from './data-warehouse/expense-explanation/expense-explanation.component';


@NgModule({
  imports: [
    CommonModule,
    TuiModule,
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
  	
  ],
  providers: [
    TccModalService,
  ]
})
export class ProductsModule { }
