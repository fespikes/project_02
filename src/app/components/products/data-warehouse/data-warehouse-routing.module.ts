
/**
deprecated
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DataWarehouseComponent } from './data-warehouse.component';

import { FunctionalitiesComponent } from './functionalities/functionalities.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { ScenariosComponent } from './scenarios/scenarios.component';
import { ComponentIntroComponent } from './component-intro/component-intro.component';
import { ExpenseExplanationComponent } from './expense-explanation/expense-explanation.component';

const dataWarehouseRoutes: Routes = [
  {
    path: '',
    // path: 'data-warehouse', 
    // component: DataWarehouseComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'functionalities', component: FunctionalitiesComponent },
          { path: 'advantages', component: AdvantagesComponent },
          { path: 'scenarios', component: ScenariosComponent },
          { path: 'component-intro', component: ComponentIntroComponent },
          { path: 'expense-explanation', component: ExpenseExplanationComponent }
        ]
      }
  	]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dataWarehouseRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [

  ]
})
export class DataWarehouseRoutingModule { }
