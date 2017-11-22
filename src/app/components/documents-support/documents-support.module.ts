import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DocumentsSupportRoutingModule } from './documents-support-routing.module';

import { DocumentsSupportComponent } from './documents-support.component';
import { DocumentsSearchComponent } from './documents-search/documents-search.component';
import { DocumentsDetailComponent } from './documents-detail/documents-detail.component';
import { DocumentsListComponent } from './documents-list/documents-list.component';
import { ProductDocumentComponent } from './documents-list/product-document/product-document.component';
import { NormalIssuesComponent } from './documents-list/normal-issues/normal-issues.component';
import { FreshGuidesComponent } from './documents-list/fresh-guides/fresh-guides.component';
import { ProductListComponent } from './documents-list/product-document/product-list/product-list.component';
import { HorizontalListComponent } from './common/components/list/horizontal-list.component';

import { BreadcrumbComponent } from './common/components/breadcrumb/breadcrumb.component';
import { SearchComponent } from './common/components/search/search.component';
import { DocTreeComponent } from './documents-detail/tree/doc-tree.component';
import { DocsListComponent } from './documents-search/list/docs-list.component';

import { DocumentUtilService } from './services/document.util.service';
import { DocumentAPIService } from './services/document.api.service';
import { DocumentResService } from './services/document.res.service';
import { DocumentSearchService } from './documents-search/documents-search.service';
import { DocumentStorageService } from './services/document.storage.service';
import { TdcApiService } from '../../shared/services/api.service';

import { TuiModule } from '../../tui/tui.module';
import { TdcModule } from '../common/components/tdc.module';
import { I18nModule } from '../../i18n';
import { SharedModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DocumentsSupportRoutingModule,
    TuiModule,
    TdcModule,
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
    ProductListComponent,
    SearchComponent,
    DocTreeComponent,
    DocsListComponent,
    HorizontalListComponent,
    BreadcrumbComponent
  ],
  providers: [
    TdcApiService,
    DocumentSearchService,
    DocumentStorageService,
    DocumentResService,
    DocumentUtilService,
    DocumentAPIService
  ]
})
export class DocumentsSupportModule { }
