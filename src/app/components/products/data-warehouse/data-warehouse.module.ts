import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataWarehouseRoutingModule } from './data-warehouse-routing.module';

import { FunctionalitiesComponent } from './functionalities/functionalities.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { ScenariosComponent } from './scenarios/scenarios.component';
import { ComponentIntroComponent } from './component-intro/component-intro.component';
import { ExpenseExplanationComponent } from './expense-explanation/expense-explanation.component';


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
  ]
})
export class DataWarehouseModule { }
