import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products.component';

import { DataWarehouseComponent } from './data-warehouse/data-warehouse.component';
import { RelationalDatabaseComponent } from './relational-database/relational-database.component';
import { DeepLearningComponent } from './deep-learning/deep-learning.component';
import { RealtimeComputationComponent } from './realtime-computation/realtime-computation.component';
import { DataMartComponent } from './data-mart/data-mart.component';
import { InfoRetrievalComponent } from './info-retrieval/info-retrieval.component';
import { AnalysisMiningComponent } from './analysis-mining/analysis-mining.component';

const productRoutes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'data-warehouse', component: DataWarehouseComponent },
          { path: 'data-mart', component: DataMartComponent },
          { path: 'info-retrieval', component: InfoRetrievalComponent },
          { path: 'relational-database', component: RelationalDatabaseComponent },
          { path: 'deep-learning', component: DeepLearningComponent },
          { path: 'realtime-computation', component: RealtimeComputationComponent },
          // { path: 'analysis-mining', component: AnalysisMiningComponent },
          { path: '', redirectTo: '/products/data-warehouse', pathMatch: 'full' }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    // DataWarehouseModule,
    RouterModule.forChild(productRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule {}
