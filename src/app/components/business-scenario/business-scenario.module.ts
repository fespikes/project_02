import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessScenarioRoutingModule } from './business-scenario-routing.module';
import { BusinessScenarioComponent } from './business-scenario.component';

@NgModule({
  imports: [
    CommonModule,
    // BusinessScenarioRoutingModule
  ],
  declarations: [
  	BusinessScenarioComponent
  ]
})
export class BusinessScenarioModule { }
