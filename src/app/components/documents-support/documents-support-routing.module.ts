import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DocumentsSupportComponent } from './documents-support.component';
import { DocumentsSearchComponent } from './documents-search/documents-search.component';
import { DocumentsDetailComponent } from './documents-detail/documents-detail.component';
import { DocumentsListComponent } from './documents-list/documents-list.component';
import { ProductDocumentComponent } from './documents-list/product-document/product-document.component';
import { NormalIssuesComponent } from './documents-list/normal-issues/normal-issues.component';
import { FreshGuidesComponent } from './documents-list/fresh-guides/fresh-guides.component';

import { TranslateDeactivator, TranslateResolver, TranslateToken } from '../../i18n/index';

const routes: Routes = [
  {
    path: 'documents-support',
    component: DocumentsSupportComponent
  },
  {
    path: 'documents-support/home',
    component: DocumentsSupportComponent
  },
  {
    path: 'documents-support/docs-search',
    component: DocumentsSearchComponent
  },
  {
    path: 'documents-support/docs',
    component: DocumentsListComponent,
    children: [
      {
        path: 'products',
        component: ProductDocumentComponent
      },
      {
        path: 'issues',
        component: NormalIssuesComponent
      },
      {
        path: 'guides',
        component: FreshGuidesComponent
      }
    ]
  },
  {
    path: 'docs-detail/:category/:version/:document/:section',
    //path: 'docs-detail',
    component: DocumentsDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        resolve: [TranslateResolver],
        canDeactivate: [TranslateDeactivator],
        children: routes,
      },
    ]),
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    TranslateResolver,
    TranslateDeactivator,
    {
      provide: TranslateToken,
      useValue: 'modules',
    },
  ],
})
export class DocumentsSupportRoutingModule { }
