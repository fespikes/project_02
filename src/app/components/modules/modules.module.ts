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
//import { TreeComponent } from '../../tui/tree/tree.component';

@NgModule({
  imports: [
    CommonModule,
    ModulesRoutingModule,
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
    //TreeComponent,
  ],
})
export class ModulesModule { }
