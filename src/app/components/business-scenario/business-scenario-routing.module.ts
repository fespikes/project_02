import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BusinessScenarioComponent } from './business-scenario.component';

const businessRoutes: Routes = [

  // { path: 'business-scenario', component: BusinessScenarioComponent },
  // { path: 'business-scenario/:id', component: BusinessScenarioComponent }
/*  {
    path: '',
    component: BusinessScenarioComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'relational-database', component: RelationalDatabaseComponent },
          { path: 'realtime-computation', component: RealtimeComputationComponent },
          { path: 'info-retrieval', component: InfoRetrievalComponent },
          { path: 'deep-learning', component: DeepLearningComponent },
          { path: 'data-warehouse', component: DataWarehouseComponent }，
          { path: 'data-analysis-dig', component: DataWarehouseComponent }，
          { path: 'data-mart', component: DataMartComponent },
          { path: 'others', component: DataMartComponent }
          // { path: '', component: DataWarehouseComponent }
        ]
      }
    ]
  }*/
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(businessRoutes)
  ],
  declarations: [
  	RouterModule
  ]
})
export class BusinessScenarioRoutingModule { }
