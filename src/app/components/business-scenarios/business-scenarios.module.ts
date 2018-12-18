import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TdcApiService } from '../../shared/services/api.service';

import { ScenarioComponent } from './scenario/scenario.component';
import { BusinessScenariosComponent } from './business-scenarios.component';
import { BusinessScenariosRoutingModule } from './business-scenarios-routing.module';
import { BusinessScenariosService } from './business-scenarios.service';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';

import { TuiModule } from '../../tui/tui.module';

@NgModule({
  imports: [
    CommonModule,
    TuiModule,
    BusinessScenariosRoutingModule
  ],
  declarations: [
    ScenarioComponent,
    BusinessScenariosComponent,
    BreadCrumbsComponent
  ],
  providers: [
    BusinessScenariosService,
    TdcApiService
  ]
})
export class BusinessScenariosModule { }
