import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ScenarioComponent } from './scenario/scenario.component';
import { BusinessScenariosComponent } from './business-scenarios.component';

const scenarioRoutes:Routes = [
  {
    path: 'business-scenarios',
    component: BusinessScenariosComponent,
  },
  {
    path: 'business-scenario/:type',
    component: ScenarioComponent
  }
];


@NgModule({
  imports: [
    // CommonModule,
    RouterModule.forChild(scenarioRoutes)
  ],
  exports: [
  	RouterModule
  ]
})
export class BusinessScenariosRoutingModule { }
