import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesComponent } from './modules.component';
import { ModulesRoutingModule } from './modules-routing.module';

import { DiscoverComponent } from './product/discover/discover.component';
import { GuardianComponent } from './product/guardian/guardian.component';
import { HadoopComponent } from './product/hadoop/hadoop.component';
import { HyperbaseComponent } from './product/hyperbase/hyperbase.componnet';
import { InceptorComponent } from './product/inceptor/inceptor.component';
import { SearchComponent } from './product/search/search.component';
import { SlipsteamComponent } from './product/slipsteam/slipsteam.component';
import { SophonComponent } from './product/sophon/sophon.component';

import { ModuleListComponent } from './module-list/module-list.component';

import { TuiModule } from '../../tui/tui.module';

@NgModule({
  imports: [
    CommonModule,
    ModulesRoutingModule,
    TuiModule,
  ],
  declarations: [
    ModulesComponent,
    DiscoverComponent,
    GuardianComponent,
    HadoopComponent,
    HyperbaseComponent,
    InceptorComponent,
    SearchComponent,
    SlipsteamComponent,
    SophonComponent,
    ModuleListComponent,
  ],
})
export class ModulesModule { }
