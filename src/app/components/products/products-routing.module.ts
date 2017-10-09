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
//deprecated
import { FunctionalitiesComponent } from './data-warehouse/functionalities/functionalities.component';

import { AdvantagesComponent } from './data-warehouse/advantages/advantages.component';
import { ScenariosComponent } from './data-warehouse/scenarios/scenarios.component';
  import { MultiTenancyPlatformComponent } from './data-warehouse/scenarios/multi-tenancy-platform/multi-tenancy-platform.component';
  import { BuildDataWarehouseComponent } from './data-warehouse/scenarios/build-data-warehouse/build-data-warehouse.component';
  import { DataLakeComponent } from './data-warehouse/scenarios/data-lake/data-lake.component';
  import { DataGovernancePlatformComponent } from './data-warehouse/scenarios/data-governance-platform/data-governance-platform.component';

//deprecated, remove after abstraction
import { ComponentIntroComponent } from './data-warehouse/component-intro/component-intro.component';
  import { TdhPlatformProductsComponent } from './data-warehouse/component-intro/tdh-platform-products/tdh-platform-products.component';
  import { TdhDevKitsComponent } from './data-warehouse/component-intro/tdh-dev-kits/tdh-dev-kits.component';
  import { OperationDevToolsComponent } from './data-warehouse/component-intro/operation-dev-tools/operation-dev-tools.component';

import { ExpenseExplanationComponent } from './data-warehouse/expense-explanation/expense-explanation.component';

import { DataMartFunctionalitiesComponent } from './data-mart/data-mart-functionalities/data-mart-functionalities.component';
import { DataMartAdvantagesComponent } from './data-mart/data-mart-advantages/data-mart-advantages.component';
import { DataMartScenariosComponent } from './data-mart/data-mart-scenarios/data-mart-scenarios.component';
  import { SelfAnalysisPlatformComponent } from './data-mart/data-mart-scenarios/self-analysis-platform/self-analysis-platform.component';
  import { MarketingAnalysisSystemComponent } from './data-mart/data-mart-scenarios/marketing-analysis-system/marketing-analysis-system.component';
  import { CustomerServiceManagingComponent } from './data-mart/data-mart-scenarios/customer-service-managing/customer-service-managing.component';

import { DataMartComponentIntroComponent } from './data-mart/data-mart-component-intro/data-mart-component-intro.component';
  import { TdhPlatformProductsComponent as DataMartTdhPlatformProductsComponent } from './data-mart/data-mart-component-intro/tdh-platform-products/tdh-platform-products.component';
  import { TdhDevKitsComponent as DataMartTdhDevKitsComponent } from './data-mart/data-mart-component-intro/tdh-dev-kits/tdh-dev-kits.component';
  import { OperationDevToolsComponent as DataMartOperationDevToolsComponent } from './data-mart/data-mart-component-intro/operation-dev-tools/operation-dev-tools.component';

const productRoutes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'data-warehouse', component: DataWarehouseComponent,
            children: [

              { path: 'functionalities', component: FunctionalitiesComponent },
              { path: 'advantages', component: AdvantagesComponent },
              {
                path: 'scenarios', 
                component: ScenariosComponent,
                children: [
                  {
                    path: '',
                    children: [//enterprise-class
                      { path: 'multi-tenancy-platform', component: MultiTenancyPlatformComponent },
                      { path: 'build-data-warehouse', component: BuildDataWarehouseComponent },
                      { path: 'data-lake', component: DataLakeComponent },
                      { path: 'data-governance-platform', component: DataGovernancePlatformComponent },
                      // { path: '',   redirectTo: '/multi-tenancy-platform', pathMatch: 'full' }
                    ]
                  }
                ],
              },
              {
                path: 'component-intro', 
                component: ComponentIntroComponent,
                children: [
                  {
                    path: '',
                    children: [
                      { path: 'tdh-platform-products', component: TdhPlatformProductsComponent },
                      { path: 'tdh-dev-kits', component: TdhDevKitsComponent },
                      { path: 'operation-dev-tools', component: OperationDevToolsComponent }
                    ]
                  }
                ]
              },
              { path: 'expense-explanation', component: ExpenseExplanationComponent },
              //{ path: 'products/data-warehouse', redirectTo: 'products/data-warehouse/functionalities', pathMatch: 'full' }
            ]
           },
          { path: 'data-mart', component: DataMartComponent,
            children: [

              { path: 'functionalities', component: DataMartFunctionalitiesComponent },
              { path: 'advantages', component: DataMartAdvantagesComponent },
              {
                path: 'scenarios',
                component: DataMartScenariosComponent,
                children: [
                  {
                    path: '',
                    children: [//enterprise-class
                      { path: 'self-analysis-platform', component: SelfAnalysisPlatformComponent },
                      { path: 'marketing-analysis-system', component: MarketingAnalysisSystemComponent },
                      { path: 'customer-service-managing', component: CustomerServiceManagingComponent },
                    ]
                  },
                ],
              },
              {
                path: 'component-intro', 
                component: DataMartComponentIntroComponent,
                children: [
                  {
                    path: '',
                    children: [
                      { path: 'tdh-platform-products', component: DataMartTdhPlatformProductsComponent },
                      { path: 'tdh-dev-kits', component: DataMartTdhDevKitsComponent },
                      { path: 'operation-dev-tools', component: DataMartOperationDevToolsComponent }
                    ]
                  }
                ]
              },
              { path: 'expense-explanation', component: ExpenseExplanationComponent },
              //{ path: 'products/data-warehouse', redirectTo: 'products/data-warehouse/functionalities', pathMatch: 'full' }
            ]
          },
          { path: 'info-retrieval', component: InfoRetrievalComponent,
            children: [

              { path: 'functionalities', component: FunctionalitiesComponent },
              { path: 'advantages', component: AdvantagesComponent },
              {
                path: 'scenarios', 
                component: ScenariosComponent,
                children: [
                  {
                    path: '',
                    children: [//enterprise-class
                      { path: 'multi-tenancy-platform', component: MultiTenancyPlatformComponent },
                      { path: 'build-data-warehouse', component: BuildDataWarehouseComponent },
                      { path: 'data-lake', component: DataLakeComponent },
                      { path: 'data-governance-platform', component: DataGovernancePlatformComponent },
                      // { path: '',   redirectTo: '/multi-tenancy-platform', pathMatch: 'full' }
                    ]
                  }
                ],
              },
              {
                path: 'component-intro', 
                component: ComponentIntroComponent,
                children: [
                  {
                    path: '',
                    children: [
                      { path: 'tdh-platform-products', component: TdhPlatformProductsComponent },
                      { path: 'tdh-dev-kits', component: TdhDevKitsComponent },
                      { path: 'operation-dev-tools', component: OperationDevToolsComponent }
                    ]
                  }
                ]
              },
              { path: 'expense-explanation', component: ExpenseExplanationComponent },
              //{ path: 'products/data-warehouse', redirectTo: 'products/data-warehouse/functionalities', pathMatch: 'full' }
            ]
          },
          
          { path: 'relational-database', component: RelationalDatabaseComponent,
            children: [

              { path: 'functionalities', component: FunctionalitiesComponent },
              { path: 'advantages', component: AdvantagesComponent },
              {
                path: 'scenarios', 
                component: ScenariosComponent,
                children: [
                  {
                    path: '',
                    children: [//enterprise-class
                      { path: 'multi-tenancy-platform', component: MultiTenancyPlatformComponent },
                      { path: 'build-data-warehouse', component: BuildDataWarehouseComponent },
                      { path: 'data-lake', component: DataLakeComponent },
                      { path: 'data-governance-platform', component: DataGovernancePlatformComponent },
                      // { path: '',   redirectTo: '/multi-tenancy-platform', pathMatch: 'full' }
                    ]
                  }
                ],
              },
              {
                path: 'component-intro', 
                component: ComponentIntroComponent,
                children: [
                  {
                    path: '',
                    children: [
                      { path: 'tdh-platform-products', component: TdhPlatformProductsComponent },
                      { path: 'tdh-dev-kits', component: TdhDevKitsComponent },
                      { path: 'operation-dev-tools', component: OperationDevToolsComponent }
                    ]
                  }
                ]
              },
              { path: 'expense-explanation', component: ExpenseExplanationComponent },
              //{ path: 'products/data-warehouse', redirectTo: 'products/data-warehouse/functionalities', pathMatch: 'full' }
            ]
          },
          { path: 'deep-learning', component: DeepLearningComponent,
            children: [

              { path: 'functionalities', component: FunctionalitiesComponent },
              { path: 'advantages', component: AdvantagesComponent },
              {
                path: 'scenarios', 
                component: ScenariosComponent,
                children: [
                  {
                    path: '',
                    children: [//enterprise-class
                      { path: 'multi-tenancy-platform', component: MultiTenancyPlatformComponent },
                      { path: 'build-data-warehouse', component: BuildDataWarehouseComponent },
                      { path: 'data-lake', component: DataLakeComponent },
                      { path: 'data-governance-platform', component: DataGovernancePlatformComponent },
                      // { path: '',   redirectTo: '/multi-tenancy-platform', pathMatch: 'full' }
                    ]
                  }
                ],
              },
              {
                path: 'component-intro', 
                component: ComponentIntroComponent,
                children: [
                  {
                    path: '',
                    children: [
                      { path: 'tdh-platform-products', component: TdhPlatformProductsComponent },
                      { path: 'tdh-dev-kits', component: TdhDevKitsComponent },
                      { path: 'operation-dev-tools', component: OperationDevToolsComponent }
                    ]
                  }
                ]
              },
              { path: 'expense-explanation', component: ExpenseExplanationComponent },
              //{ path: 'products/data-warehouse', redirectTo: 'products/data-warehouse/functionalities', pathMatch: 'full' }
            ]
          },
          { path: 'realtime-computation', component: RealtimeComputationComponent,
            children: [

              { path: 'functionalities', component: FunctionalitiesComponent },
              { path: 'advantages', component: AdvantagesComponent },
              {
                path: 'scenarios', 
                component: ScenariosComponent,
                children: [
                  {
                    path: '',
                    children: [//enterprise-class
                      { path: 'multi-tenancy-platform', component: MultiTenancyPlatformComponent },
                      { path: 'build-data-warehouse', component: BuildDataWarehouseComponent },
                      { path: 'data-lake', component: DataLakeComponent },
                      { path: 'data-governance-platform', component: DataGovernancePlatformComponent },
                      // { path: '',   redirectTo: '/multi-tenancy-platform', pathMatch: 'full' }
                    ]
                  }
                ],
              },
              {
                path: 'component-intro', 
                component: ComponentIntroComponent,
                children: [
                  {
                    path: '',
                    children: [
                      { path: 'tdh-platform-products', component: TdhPlatformProductsComponent },
                      { path: 'tdh-dev-kits', component: TdhDevKitsComponent },
                      { path: 'operation-dev-tools', component: OperationDevToolsComponent }
                    ]
                  }
                ]
              },
              { path: 'expense-explanation', component: ExpenseExplanationComponent },
              //{ path: 'products/data-warehouse', redirectTo: 'products/data-warehouse/functionalities', pathMatch: 'full' }
            ]
          },
          {
            path: 'analysis-mining', component: AnalysisMiningComponent,
            children: [

              { path: 'functionalities', component: FunctionalitiesComponent },
              { path: 'advantages', component: AdvantagesComponent },
              {
                path: 'scenarios', 
                component: ScenariosComponent,
                children: [
                  {
                    path: '',
                    children: [//enterprise-class
                      { path: 'multi-tenancy-platform', component: MultiTenancyPlatformComponent },
                      { path: 'build-data-warehouse', component: BuildDataWarehouseComponent },
                      { path: 'data-lake', component: DataLakeComponent },
                      { path: 'data-governance-platform', component: DataGovernancePlatformComponent },
                      // { path: '',   redirectTo: '/multi-tenancy-platform', pathMatch: 'full' }
                    ]
                  }
                ],
              },
              {
                path: 'component-intro', 
                component: ComponentIntroComponent,
                children: [
                  {
                    path: '',
                    children: [
                      { path: 'tdh-platform-products', component: TdhPlatformProductsComponent },
                      { path: 'tdh-dev-kits', component: TdhDevKitsComponent },
                      { path: 'operation-dev-tools', component: OperationDevToolsComponent }
                    ]
                  }
                ]
              },
              { path: 'expense-explanation', component: ExpenseExplanationComponent },
              //{ path: 'products/data-warehouse', redirectTo: 'products/data-warehouse/functionalities', pathMatch: 'full' }
            ]
          }

          // ,{ path: '', redirectTo: '/data-warehouse', pathMatch: 'full' }
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
