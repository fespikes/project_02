import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsSupportRoutingModule } from './documents-support-routing.module';

import { DocumentsSupportComponent } from './documents-support.component';
import { DocumentsSearchComponent } from './documents-search/documents-search.component';
import { DocumentsDetailComponent } from './documents-detail/documents-detail.component';
import { DocumentsListComponent } from './documents-list/documents-list.component';
import { ProductDocumentComponent } from './documents-list/product-document/product-document.component';
import { NormalIssuesComponent } from './documents-list/normal-issues/normal-issues.component';
import { FreshGuidesComponent } from './documents-list/fresh-guides/fresh-guides.component';

import { TabComponent } from '../common/components/tab/tab.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SearchComponent } from './search/search.component';

import { DocumentUtilService } from './services/document.util.service';
import { DocumentSearchService } from './services/document.search.service';
import { TdcApiService } from '../../shared/services/api.service';

import { TuiModule } from '../../tui/tui.module';
import { I18nModule } from '../../i18n';
import { SharedModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    DocumentsSupportRoutingModule,
    TuiModule,
    I18nModule,
    SharedModule
  ],
  declarations: [
    DocumentsSupportComponent,
    DocumentsListComponent,
    DocumentsDetailComponent,
    DocumentsSearchComponent,
    ProductDocumentComponent,
    NormalIssuesComponent,
    FreshGuidesComponent,
    TabComponent,
    SearchComponent,
    BreadcrumbComponent
  ],
  providers: [
    TdcApiService,
    DocumentUtilService,
    DocumentSearchService
  ]
})
export class DocumentsSupportModule { }
