import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { InfoRetrievalService } from './info-retrieval.service';

import { InfoRetrievalComponent } from './info-retrieval.component';
import { InfoRetrievalFunctionalitiesComponent } from './info-retrieval-functionalities/info-retrieval-functionalities.component';
import { InfoRetrievalAdvantagesComponent } from './info-retrieval-advantages/info-retrieval-advantages.component';
import { InfoRetrievalScenariosComponent } from './info-retrieval-scenarios/info-retrieval-scenarios.component';
	import { DataSearchEngineComponent } from './info-retrieval-scenarios/data-search-engine/data-search-engine.component';
	import { LogAcquisitionAnalysisComponent } from './info-retrieval-scenarios/log-acquisition-analysis/log-acquisition-analysis.component';
	import { BusinessAnalysisComponent } from './info-retrieval-scenarios/business-analysis/business-analysis.component';

import { InfoRetrievalComponentIntroComponent } from './info-retrieval-component-intro/info-retrieval-component-intro.component';
	import { OperationDevToolsComponent } from './info-retrieval-component-intro/operation-dev-tools/operation-dev-tools.component';
	import { TdhDevKitsComponent } from './info-retrieval-component-intro/tdh-dev-kits/tdh-dev-kits.component';
	import { TdhPlatformProductsComponent } from './info-retrieval-component-intro/tdh-platform-products/tdh-platform-products.component';
	

const infoRetrievalRoutes: Routes = [
	{
		path: '',
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
							{ path: 'business-analysis', component: BusinessAnalysisComponent }
						]
					}
				],
			},
			{
				path: 'component-intro',
				component: InfoRetrievalComponentIntroComponent,
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
			// { path: 'expense-explanation', component: ExpenseExplanationComponent },
		]
	},

];

@NgModule({
  imports: [
    CommonModule,
		RouterModule.forChild(infoRetrievalRoutes)
  ],
  declarations: [],
	exports: [RouterModule]
})
export class InfoRetrievalRoutingModule { }
