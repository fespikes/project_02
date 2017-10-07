import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesComponent } from './modules.component';
import { ModulesRoutingModule } from './modules-routing.module';

import { ProductComponent } from './product/product.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { ModuleTableComponent } from './module-table/module-table.component';
import { ProductIntroduceComponent } from './product-introduce/product-introduce.component';
import { ProductAdvantageComponent } from './product-advantage/product-advantage.component';

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
    ModuleTableComponent,
    ProductComponent,
    ProductIntroduceComponent,
    ProductAdvantageComponent,
  ],
  providers: [
    ProductContentService,
    ProductBannerService,
    ProductUtilService,
  ],
})
export class ModulesModule { }
