import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiModule, TccModalService } from '../../tui';

import { I18nModule } from 'app/i18n';
import { ApplicationRouterModule } from './application-router.module';
import { ApplicationComponent } from './application.component';
import { ApplyOptionsComponent } from './apply-options/apply-options.component';
import { EssentialComponent } from './essential/essential.component';
import { ConfigurationComponent } from './configuration/configuration.component';

import { ApplicationService } from './application.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    I18nModule,
    TuiModule,
    ApplicationRouterModule
  ],
  declarations: [
  	ApplicationComponent,
    ApplyOptionsComponent,
    EssentialComponent,
    ConfigurationComponent
  ],
  providers: [
    ApplicationService
  ],
  entryComponents: [
  ]
})
export class ApplicationModule { }
