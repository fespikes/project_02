import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TdcApiService } from '../../shared/services/api.service';
import { ModulesComponent } from './modules.component';
import { ModulesRoutingModule } from './modules-routing.module';

import { ProductComponent } from './product/product.component';
import { ModuleListComponent } from './list/module-list.component';
import { ModuleTabComponent } from './product/tab/module-tab.component';
import { ProductIntroduceComponent } from './product/introduce/product-introduce.component';
import { ProductAdvantageComponent } from './product/advantage/product-advantage.component';

import { TuiModule } from '../../tui/tui.module';
import { TdcModule } from '../common/components/tdc.module';
import { I18nModule } from '../../i18n';
import { SharedModule } from '../../shared';

import { ProductContentService } from './services/product-content.service';
import { ProductBannerService } from './services/product-banner.service';
import { ProductUtilService } from './services/product-util.service';
import { ProductResService } from './services/product-res.service';

import { DocumentSearchService } from '../documents-support/documents-search/documents-search.service';

@NgModule({
  imports: [
    CommonModule,
    ModulesRoutingModule,
    TuiModule,
    TdcModule,
    I18nModule,
    SharedModule,
  ],
  declarations: [
    ModulesComponent,
    ModuleListComponent,
    ModuleTabComponent,
    ProductComponent,
    ProductIntroduceComponent,
    ProductAdvantageComponent,
  ],
  providers: [
    DocumentSearchService,
    ProductContentService,
    ProductBannerService,
    ProductUtilService,
    ProductResService,
    TdcApiService,
  ],
})
export class ModulesModule { }
