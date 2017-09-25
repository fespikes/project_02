import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScenarioComponent } from './scenario/scenario.component';
import { BusinessScenarioComponent } from './business-scenario.component';
import { BusinessScenarioRoutingModule } from './business-scenario-routing.module';
import { BusinessScenarioService } from './business-scenario.service';


@NgModule({
  imports: [
    CommonModule,
    BusinessScenarioRoutingModule
  ],
  declarations: [
  	ScenarioComponent,
  	BusinessScenarioComponent
  ],
  providers: [
  	BusinessScenarioService
  ]
})
export class BusinessScenarioModule { }
