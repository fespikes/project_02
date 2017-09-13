import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products.component';
import { DataWarehouseComponent } from './data-warehouse/data-warehouse.component';
import { DataMartComponent } from './data-mart/data-mart.component';
import { InfoRetrievalComponent } from './info-retrieval/info-retrieval.component';
import { RelationalDatabaseComponent } from './relational-database/relational-database.component';
import { DeepLearningComponent } from './deep-learning/deep-learning.component';
import { RealtimeComputationComponent } from './realtime-computation/realtime-computation.component';
import { AnalysisMiningComponent } from './analysis-mining/analysis-mining.component';

// import { DataWarehouseModule } from './data-warehouse/data-warehouse.module';

//test S:
import { FunctionalitiesComponent } from './data-warehouse/functionalities/functionalities.component';
import { AdvantagesComponent } from './data-warehouse/advantages/advantages.component';
import { ScenariosComponent } from './data-warehouse/scenarios/scenarios.component';
import { ComponentIntroComponent } from './data-warehouse/component-intro/component-intro.component';
import { ExpenseExplanationComponent } from './data-warehouse/expense-explanation/expense-explanation.component';
//test E

const productRoutes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'data-warehouse', component: DataWarehouseComponent,

          ////////
            children: [
              {
                path: '',
                children: [
                  { path: 'functionalities', component: FunctionalitiesComponent },
                  { path: 'advantages', component: AdvantagesComponent },
                  { path: 'scenarios', component: ScenariosComponent },
                  { path: 'component-intro', component: ComponentIntroComponent },
                  { path: 'expense-explanation', component: ExpenseExplanationComponent }
                ]
              }
            ]
            //////

           },
          { path: 'data-mart', component: DataMartComponent },
          { path: 'info-retrieval', component: InfoRetrievalComponent },
          
          { path: 'relational-database', component: RelationalDatabaseComponent },
          { path: 'deep-learning', component: DeepLearningComponent },
          { path: 'realtime-computation', component: RealtimeComputationComponent },
          { path: 'analysis-mining', component: AnalysisMiningComponent },

          { path: '', component: DataWarehouseComponent }
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
