import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ScenarioComponent } from './scenario/scenario.component';
import { BusinessScenarioComponent } from './business-scenario.component';

const scenarioRoutes:Routes = [
  {
    path: 'business-scenario',
    component: BusinessScenarioComponent,
/*    children: [
      {
        path: ':token',
        component: ''
      }
    ]*/
  },
  {
    path: 'business-scenario/:token',
    component: ScenarioComponent
  }
];


@NgModule({
  imports: [
    // CommonModule,
    RouterModule.forChild(scenarioRoutes)
  ],
  declarations: [],
  exports: [
  	RouterModule
  ]
})
export class BusinessScenarioRoutingModule { }
