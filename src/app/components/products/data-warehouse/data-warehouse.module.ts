
/**
deprecated
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataWarehouseRoutingModule } from './data-warehouse-routing.module';

import { FunctionalitiesComponent } from './functionalities/functionalities.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { ScenariosComponent } from './scenarios/scenarios.component';
import { ComponentIntroComponent } from './component-intro/component-intro.component';
import { ExpenseExplanationComponent } from './expense-explanation/expense-explanation.component';
import { MultiTenancyPlatformComponent } from './scenarios/multi-tenancy-platform/multi-tenancy-platform.component';
import { BuildDataWarehouseComponent } from './scenarios/build-data-warehouse/build-data-warehouse.component';
import { DataLakeComponent } from './scenarios/data-lake/data-lake.component';
import { DataGovernancePlatformComponent } from './scenarios/data-governance-platform/data-governance-platform.component';
import { TdhPlatformProductsComponent } from './component-intro/tdh-platform-products/tdh-platform-products.component';
import { TdhDevKitsComponent } from './component-intro/tdh-dev-kits/tdh-dev-kits.component';
import { OperationDevToolsComponent } from './component-intro/operation-dev-tools/operation-dev-tools.component';


@NgModule({
  imports: [
    CommonModule,
    DataWarehouseRoutingModule
  ],
  declarations: [
  	// FunctionalitiesComponent,
  	// AdvantagesComponent,
  	// ScenariosComponent,
  	// ComponentIntroComponent,
  	// ExpenseExplanationComponent
    
    MultiTenancyPlatformComponent,
  	BuildDataWarehouseComponent,
  	DataLakeComponent,
  	DataGovernancePlatformComponent,
    
  	TdhPlatformProductsComponent,
  	TdhDevKitsComponent,
  	OperationDevToolsComponent]
})
export class DataWarehouseModule { }
