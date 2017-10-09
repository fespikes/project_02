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

import { BreadcrumbComponent } from './common/breadcrumb/breadcrumb.component';
import { SearchComponent } from './common/search/search.component';

import { DocumentUtilService } from './services/document.util.service';
import { DocumentAPIService } from './services/document.api.service';
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
    BreadcrumbComponent
  ],
  providers: [
    TdcApiService,
    DocumentUtilService,
    DocumentAPIService
  ]
})
export class DocumentsSupportModule { }
