import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesComponent } from './modules.component';
import { ModulesRoutingModule } from './modules-routing.module';

import { ProductComponent } from './product/product.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { ProductIntroduceComponent } from './product-introduce/product-introduce.component';
import { ProductAdvantageComponent } from './product-advantage/product-advantage.component';
import { ProductScenariosComponent } from './product-scenarios/product-scenarios.component';
import { RealTimeCollectionComponent } from './product-scenarios/scenarios-tab/real-time-collection/real-time-collection.component';
import { RealTimeMonitoringComponent } from './product-scenarios/scenarios-tab/real-time-monitoring/real-time-monitoring.component';
import { RiskPredictComponent } from './product-scenarios/scenarios-tab/risk-predict/risk-predict.component';

import { TuiModule } from '../../tui/tui.module';
import { I18nModule } from '../../i18n';
import { SharedModule } from '../../shared';

import { ProductContentService } from './services/product-content.service';
import { ProductBannerService } from './services/product-banner.service';
import { ProductUtilService } from './services/product-util.service';

@NgModule({
  imports: [
    CommonModule,
    ModulesRoutingModule,
    TuiModule,
    I18nModule,
    SharedModule,
  ],
  declarations: [
    ModulesComponent,
    ModuleListComponent,
    ProductComponent,
    ProductIntroduceComponent,
    ProductAdvantageComponent,
    ProductScenariosComponent,
    RealTimeCollectionComponent,
    RealTimeMonitoringComponent,
    RiskPredictComponent,
  ],
  providers: [
    ProductContentService,
    ProductBannerService,
    ProductUtilService,
  ],
})
export class ModulesModule { }
