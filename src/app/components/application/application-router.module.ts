import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, Routes, RouterModule } from '@angular/router';

import { ApplicationComponent } from './application.component';
import { ApplyOptionsComponent } from './apply-options/apply-options.component';
import { EssentialComponent } from './essential/essential.component';
import { ConfigurationComponent } from './configuration/configuration.component';

const applicationRoutes: Routes = [
	{
		path: '',
		component: ApplicationComponent,
		children: [
      {
        path: 'apply-options',
        component: ApplyOptionsComponent
      },
      {
        path: 'essential',
        component: EssentialComponent
      },
      {
		    path: 'configuration',
		    component: ConfigurationComponent
		  },
  		{
  			path: '',
  			redirectTo: '/application/apply-options',
  			pathMatch: 'full'
  		},
		]
	}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(applicationRoutes)
  ],
  exports: [
  	RouterModule
  ],
  declarations: [
  ]
})
export class ApplicationRouterModule { }
