import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products.component';
import { DataWarehouseComponent } from './data-warehouse/data-warehouse.component';

import { RelationalDatabaseComponent } from './relational-database/relational-database.component';
import { DeepLearningComponent } from './deep-learning/deep-learning.component';
import { RealtimeComputationComponent } from './realtime-computation/realtime-computation.component';

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


//S: data-mart
import { DataMartComponent } from './data-mart/data-mart.component';
import { DataMartBannerComponent } from './data-mart/data-mart-banner/data-mart-banner.component';
import { DataMartTabsComponent } from './data-mart/data-mart-tabs/data-mart-tabs.component';

import { DataMartFunctionalitiesComponent } from './data-mart/data-mart-functionalities/data-mart-functionalities.component';
import { DataMartAdvantagesComponent } from './data-mart/data-mart-advantages/data-mart-advantages.component';
import { DataMartComponentIntroComponent } from './data-mart/data-mart-component-intro/data-mart-component-intro.component';
  import { TdhPlatformProductsComponent as DataMartTdhPlatformProductsComponent } from './data-mart/data-mart-component-intro/tdh-platform-products/tdh-platform-products.component';
  import { TdhDevKitsComponent as DataMartTdhDevKitsComponent } from './data-mart/data-mart-component-intro/tdh-dev-kits/tdh-dev-kits.component';
  import { OperationDevToolsComponent as DataMartOperationDevToolsComponent } from './data-mart/data-mart-component-intro/operation-dev-tools/operation-dev-tools.component';

import { DataMartScenariosComponent } from './data-mart/data-mart-scenarios/data-mart-scenarios.component';
  import { SelfAnalysisPlatformComponent } from './data-mart/data-mart-scenarios/self-analysis-platform/self-analysis-platform.component';
  import { MarketingAnalysisSystemComponent } from './data-mart/data-mart-scenarios/marketing-analysis-system/marketing-analysis-system.component';
  import { CustomerServiceManagingComponent } from './data-mart/data-mart-scenarios/customer-service-managing/customer-service-managing.component';

//E: data-mart
//S: info-retrieval
import { InfoRetrievalComponent } from './info-retrieval/info-retrieval.component';
import { InfoRetrievalService } from './info-retrieval/info-retrieval.service';
import { InfoRetrievalFunctionalitiesComponent } from './info-retrieval/info-retrieval-functionalities/info-retrieval-functionalities.component';
import { InfoRetrievalAdvantagesComponent } from './info-retrieval/info-retrieval-advantages/info-retrieval-advantages.component';
import { InfoRetrievalBannerComponent } from './info-retrieval/info-retrieval-banner/info-retrieval-banner.component';
import { InfoRetrievalTabsComponent } from './info-retrieval/info-retrieval-tabs/info-retrieval-tabs.component';
import { InfoRetrievalScenariosComponent } from './info-retrieval/info-retrieval-scenarios/info-retrieval-scenarios.component';
  import { DataSearchEngineComponent } from './info-retrieval/info-retrieval-scenarios/data-search-engine/data-search-engine.component';
  import { LogAcquisitionAnalysisComponent } from './info-retrieval/info-retrieval-scenarios/log-acquisition-analysis/log-acquisition-analysis.component';
  import { BusinessAnalysisComponent } from './info-retrieval/info-retrieval-scenarios/business-analysis/business-analysis.component';

import { InfoRetrievalComponentIntroComponent } from './info-retrieval/info-retrieval-component-intro/info-retrieval-component-intro.component';
  import { OperationDevToolsComponent as InfoRetrievalOperationDevToolsComponent } from './info-retrieval/info-retrieval-component-intro/operation-dev-tools/operation-dev-tools.component';
  import { TdhDevKitsComponent as InfoRetrievalTdhDevKitsComponent } from './info-retrieval/info-retrieval-component-intro/tdh-dev-kits/tdh-dev-kits.component';
  import { TdhPlatformProductsComponent as InfoRetrievalTdhPlatformProductsComponent } from './info-retrieval/info-retrieval-component-intro/tdh-platform-products/tdh-platform-products.component';

import { AnalysisMiningComponent } from './analysis-mining/analysis-mining.component';
import { AnalysisMiningAdvantagesComponent } from './analysis-mining/analysis-mining-advantages/analysis-mining-advantages.component';
import { AnalysisMiningComponentIntroComponent } from './analysis-mining/analysis-mining-component-intro/analysis-mining-component-intro.component';
  import { OperationDevToolsComponent as AnalysisMiningOperationDevToolsComponent } from './analysis-mining/analysis-mining-component-intro/operation-dev-tools/operation-dev-tools.component';
  import { TdhDevKitsComponent as AnalysisMiningTdhDevKitsComponent } from './analysis-mining/analysis-mining-component-intro/tdh-dev-kits/tdh-dev-kits.component';
  import { TdhPlatformProductsComponent as AnalysisMiningTdhPlatformProductsComponent } from './analysis-mining/analysis-mining-component-intro/tdh-platform-products/tdh-platform-products.component';
import { AnalysisMiningFunctionalitiesComponent } from './analysis-mining/analysis-mining-functionalities/analysis-mining-functionalities.component';
import { AnalysisMiningScenariosComponent } from './analysis-mining/analysis-mining-scenarios/analysis-mining-scenarios.component';
  import { CreditRiskControlComponent } from './analysis-mining/analysis-mining-scenarios/credit-risk-control/credit-risk-control.component';
  import { PreciseMarketingComponent } from './analysis-mining/analysis-mining-scenarios/precise-marketing/precise-marketing.component';
  import { FraudCheckComponent } from './analysis-mining/analysis-mining-scenarios/fraud-check/fraud-check.component';


import { RelationalDatabaseAdvantagesComponent } from './relational-database/relational-database-advantages/relational-database-advantages.component';
import { RelationalDatabaseComponentIntroComponent } from './relational-database/relational-database-component-intro/relational-database-component-intro.component';
  import { OperationDevToolsComponent as RelationalDatabaseOperationDevToolsComponent } from './relational-database/relational-database-component-intro/operation-dev-tools/operation-dev-tools.component';
  import { TdhDevKitsComponent as RelationalDatabaseTdhDevKitsComponent } from './relational-database/relational-database-component-intro/tdh-dev-kits/tdh-dev-kits.component';
// import { TdhPlatformProductsComponent as RelationalDatabaseTdhPlatformProductsComponent } from './relational-database/relational-database-component-intro/tdh-platform-products/tdh-platform-products.component';
import { RelationalDatabaseFunctionalitiesComponent } from './relational-database/relational-database-functionalities/relational-database-functionalities.component';
import { RelationalDatabaseScenariosComponent } from './relational-database/relational-database-scenarios/relational-database-scenarios.component';
  import { ConcurrentEcommercePlatformComponent } from './relational-database/relational-database-scenarios/concurrent-ecommerce-platform/concurrent-ecommerce-platform.component';
  import { FinancialTransactionSystemComponent } from './relational-database/relational-database-scenarios/financial-transaction-system/financial-transaction-system.component';
  import { SeparateReadWriteComponent } from './relational-database/relational-database-scenarios/separate-read-write/separate-read-write.component';


import { DeepLearningAdvantagesComponent } from './deep-learning/deep-learning-advantages/deep-learning-advantages.component';
import { DeepLearningComponentIntroComponent } from './deep-learning/deep-learning-component-intro/deep-learning-component-intro.component';
  import { OperationDevToolsComponent as DeepLearningOperationDevToolsComponent } from './deep-learning/deep-learning-component-intro/operation-dev-tools/operation-dev-tools.component';
  import { TdhDevKitsComponent as DeepLearningTdhDevKitsComponent } from './deep-learning/deep-learning-component-intro/tdh-dev-kits/tdh-dev-kits.component';
  import { TdhPlatformProductsComponent as DeepLearningTdhPlatformProductsComponent } from './deep-learning/deep-learning-component-intro/tdh-platform-products/tdh-platform-products.component';
import { DeepLearningFunctionalitiesComponent } from './deep-learning/deep-learning-functionalities/deep-learning-functionalities.component';
import { DeepLearningScenariosComponent } from './deep-learning/deep-learning-scenarios/deep-learning-scenarios.component';
  import { ImgRecognitionSystemComponent } from './deep-learning/deep-learning-scenarios/img-recognition-system/img-recognition-system.component';
  import { CustomerLosingWarningComponent } from './deep-learning/deep-learning-scenarios/customer-losing-warning/customer-losing-warning.component';
  import { NaturalLanguageProcessingComponent } from './deep-learning/deep-learning-scenarios/natural-language-processing/natural-language-processing.component';

import { RealtimeComputationAdvantagesComponent } from './realtime-computation/realtime-computation-advantages/realtime-computation-advantages.component';
import { RealtimeComputationComponentIntroComponent } from './realtime-computation/realtime-computation-component-intro/realtime-computation-component-intro.component';
  import { OperationDevToolsComponent as RealtimeComputationOperationDevToolsComponent } from './realtime-computation/realtime-computation-component-intro/operation-dev-tools/operation-dev-tools.component';
  import { TdhDevKitsComponent as RealtimeComputationTdhDevKitsComponent } from './realtime-computation/realtime-computation-component-intro/tdh-dev-kits/tdh-dev-kits.component';
  import { TdhPlatformProductsComponent as RealtimeComputationTdhPlatformProductsComponent } from './realtime-computation/realtime-computation-component-intro/tdh-platform-products/tdh-platform-products.component';
import { RealtimeComputationFunctionalitiesComponent } from './realtime-computation/realtime-computation-functionalities/realtime-computation-functionalities.component';
import { RealtimeComputationScenariosComponent } from './realtime-computation/realtime-computation-scenarios/realtime-computation-scenarios.component';
  import { RaidDeployControlComponent } from './realtime-computation/realtime-computation-scenarios/raid-deploy-control/raid-deploy-control.component';
  import { FinancialRiskManagementComponent } from './realtime-computation/realtime-computation-scenarios/financial-risk-management/financial-risk-management.component';
  import { EquipmentsSecurityWarningComponent } from './realtime-computation/realtime-computation-scenarios/equipments-security-warning/equipments-security-warning.component';




const productRoutes: Routes = [
  {
    path: '',
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
                      { path: '', redirectTo: '/products/data-warehouse/scenarios/multi-tenancy-platform', pathMatch: 'full' }
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
                      { path: 'operation-dev-tools', component: OperationDevToolsComponent },
                      { path: '', redirectTo: '/products/data-warehouse/component-intro/tdh-platform-products', pathMatch: 'full' }                    ]
                  }
                ]
              },
              // { path: 'expense-explanation', component: ExpenseExplanationComponent },
              { path: '', redirectTo: '/products/data-warehouse/functionalities', pathMatch: 'full' }
            ]
           },
          { 
            path: 'data-mart',
            component: DataMartComponent,
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
                      { path: '', redirectTo: '/products/data-mart/scenarios/self-analysis-platform', pathMatch: 'full' },
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
                      { path: 'operation-dev-tools', component: DataMartOperationDevToolsComponent },
                      { path: '', redirectTo: '/products/data-mart/component-intro/tdh-platform-products', pathMatch: 'full' },
                    ]
                  }
                ]
              },
              // { path: 'expense-explanation', component: ExpenseExplanationComponent },
            ]
          },
          {
            path: 'info-retrieval',
            component: InfoRetrievalComponent,
            children: [
              { path: 'functionalities', component: InfoRetrievalFunctionalitiesComponent },
              { path: 'advantages', component: InfoRetrievalAdvantagesComponent },
              {
                path: 'scenarios',
                component: InfoRetrievalScenariosComponent,
                children: [
                  {
                    path: '',
                    children: [//enterprise-class
                      { path: 'data-search-engine', component: DataSearchEngineComponent },
                      { path: 'log-acquisition-analysis', component: LogAcquisitionAnalysisComponent },
                      { path: 'business-analysis', component: BusinessAnalysisComponent },
                      { path: '', redirectTo: '/products/info-retrieval/scenarios/data-search-engine', pathMatch: 'full' },
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
                      { path: 'tdh-platform-products', component: InfoRetrievalTdhPlatformProductsComponent },
                      { path: 'tdh-dev-kits', component: InfoRetrievalTdhDevKitsComponent },
                      { path: 'operation-dev-tools', component: InfoRetrievalOperationDevToolsComponent },
                      { path: '', redirectTo: '/products/info-retrieval/component-intro/tdh-platform-products', pathMatch: 'full' },
                    ]
                  }
                ]
              },
              // { path: 'expense-explanation', component: ExpenseExplanationComponent },
            ]
          },
          
          { path: 'relational-database', component: RelationalDatabaseComponent,
            children: [
              { path: 'functionalities', component: RelationalDatabaseFunctionalitiesComponent },
              { path: 'advantages', component: RelationalDatabaseAdvantagesComponent },
              {
                path: 'scenarios', 
                component: RelationalDatabaseScenariosComponent,
                children: [
                  {
                    path: '',
                    children: [//enterprise-class
                      { path: 'concurrent-ecommerce-platform', component: ConcurrentEcommercePlatformComponent },
                      { path: 'financial-transaction-system', component: FinancialTransactionSystemComponent },
                      { path: 'separate-read-write', component: SeparateReadWriteComponent },
                      { path: '', redirectTo: '/products/relational-database/scenarios/concurrent-ecommerce-platform', pathMatch: 'full' },
                    ]
                  }
                ],
              },
              {
                path: 'component-intro',
                component: RelationalDatabaseComponentIntroComponent,
                children: [
                  {
                    path: '',
                    children: [
                      { path: 'tdh-dev-kits', component: RelationalDatabaseOperationDevToolsComponent },
                      { path: 'operation-dev-tools', component: RelationalDatabaseTdhDevKitsComponent },
                      { path: '', redirectTo: '/products/relational-database/component-intro/tdh-dev-kits', pathMatch: 'full' },
                    ]
                  }
                ]
              },
              { path: '', redirectTo: 'products/relational-database/functionalities', pathMatch: 'full' }
            ]
          },
          { path: 'deep-learning', component: DeepLearningComponent,
            children: [
              { path: 'functionalities', component: DeepLearningFunctionalitiesComponent },
              { path: 'advantages', component: DeepLearningAdvantagesComponent },
              {
                path: 'scenarios',
                component: DeepLearningScenariosComponent,
                children: [
                  {
                    path: '',
                    children: [//enterprise-class
                      { path: 'img-recognition-system', component: ImgRecognitionSystemComponent },
                      { path: 'customer-losing-warning', component: CustomerLosingWarningComponent },
                      { path: 'natural-language-processing', component: NaturalLanguageProcessingComponent },
                      { path: '', redirectTo: '/products/deep-learning/scenarios/img-recognition-system', pathMatch: 'full' }
                    ]
                  }
                ],
              },
              {
                path: 'component-intro',
                component: DeepLearningComponentIntroComponent,
                children: [
                  {
                    path: '',
                    children: [
                      { path: 'tdh-platform-products', component: DeepLearningTdhPlatformProductsComponent },
                      { path: 'tdh-dev-kits', component: DeepLearningTdhDevKitsComponent },
                      { path: 'operation-dev-tools', component: DeepLearningOperationDevToolsComponent },
                      { path: '', redirectTo: '/products/deep-learning/component-intro/tdh-platform-products', pathMatch: 'full' }
                    ]
                  }
                ]
              },
              { path: '', redirectTo: '/products/deep-learning/functionalities', pathMatch: 'full' }
            ]
          },
          { path: 'realtime-computation', component: RealtimeComputationComponent,
            children: [
              { path: 'functionalities', component: RealtimeComputationFunctionalitiesComponent },
              { path: 'advantages', component: RealtimeComputationAdvantagesComponent },
              {
                path: 'scenarios', 
                component: RealtimeComputationScenariosComponent,
                children: [
                  {
                    path: '',
                    children: [//enterprise-class
                      { path: 'raid-deploy-control', component: RaidDeployControlComponent },
                      { path: 'equipments-security-warning', component: EquipmentsSecurityWarningComponent },
                      { path: 'financial-risk-management', component: FinancialRiskManagementComponent },
                      { path: '', redirectTo: '/products/realtime-computation/scenarios/raid-deploy-control', pathMatch: 'full' }
                    ]
                  }
                ],
              },
              {
                path: 'component-intro', 
                component: RealtimeComputationComponentIntroComponent,
                children: [
                  {
                    path: '',
                    children: [
                      { path: 'tdh-platform-products', component: RealtimeComputationTdhPlatformProductsComponent },
                      { path: 'tdh-dev-kits', component: RealtimeComputationTdhDevKitsComponent },
                      { path: 'operation-dev-tools', component: RealtimeComputationOperationDevToolsComponent },
                      { path: '', redirectTo: '/products/realtime-computation/component-intro/tdh-platform-products', pathMatch: 'full' }
                    ]
                  }
                ]
              },
              { path: '', redirectTo: '/products/realtime-computation/functionalities', pathMatch: 'full' }
            ]
          },
          {
            path: 'analysis-mining', component: AnalysisMiningComponent,
            children: [

              { path: 'functionalities', component: AnalysisMiningFunctionalitiesComponent },
              { path: 'advantages', component: AnalysisMiningAdvantagesComponent },
              {
                path: 'scenarios', 
                component: AnalysisMiningScenariosComponent,
                children: [
                  {
                    path: '',
                    children: [//enterprise-class
                      { path: 'credit-risk-control', component: CreditRiskControlComponent },
                      { path: 'precise-marketing', component: PreciseMarketingComponent },
                      { path: 'fraud-check', component: FraudCheckComponent },
                      { path: '', redirectTo: '/products/analysis-mining/scenarios/credit-risk-control', pathMatch: 'full' }
                    ]
                  }
                ],
              },
              {
                path: 'component-intro', 
                component: AnalysisMiningComponentIntroComponent,
                children: [
                  {
                    path: '',
                    children: [
                      { path: 'tdh-platform-products', component: AnalysisMiningTdhPlatformProductsComponent },
                      { path: 'tdh-dev-kits', component: AnalysisMiningTdhDevKitsComponent },
                      { path: 'operation-dev-tools', component: AnalysisMiningOperationDevToolsComponent },
                      { path: '', redirectTo: '/products/analysis-mining/component-intro/tdh-platform-products', pathMatch: 'full' }
                    ]
                  }
                ]
              },
              { path: '', redirectTo: '/products/analysis-mining/functionalities', pathMatch: 'full' }
            ]
          },
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
