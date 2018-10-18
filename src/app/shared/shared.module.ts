import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiModule } from '../tui';
import { I18nModule } from '../i18n';

import {
  IconStatusDirective,
  LogListComponent,
  LogListService,
  PermControlDirective,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    TuiModule,
    I18nModule,
  ],
  declarations: [
    IconStatusDirective,
    LogListComponent,
    PermControlDirective,
  ],
  exports: [
    TuiModule,
    IconStatusDirective,
    LogListComponent,
    PermControlDirective,
    I18nModule
  ],
  providers: [
    LogListService,
  ],
})
export class SharedModule { }
