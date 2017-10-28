import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TdcApiService } from '../../shared/services/api.service';

import { ScenarioComponent } from './scenario/scenario.component';
import { BusinessScenarioComponent } from './business-scenario.component';
import { BusinessScenarioRoutingModule } from './business-scenario-routing.module';
import { BusinessScenarioService } from './business-scenario.service';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';

@NgModule({
  imports: [
    CommonModule,
    BusinessScenarioRoutingModule
  ],
  declarations: [
  	ScenarioComponent,
    BreadCrumbsComponent,
  	BusinessScenarioComponent
  ],
  providers: [
  	BusinessScenarioService,
    TdcApiService
  ]
})
export class BusinessScenarioModule { }
