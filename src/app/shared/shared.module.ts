import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiModule } from '../tui';
import { I18nModule } from '../i18n';

import {
  IconStatusDirective,
  LogListComponent,
  LogListService,
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
  ],
  exports: [
    TuiModule,
    IconStatusDirective,
    LogListComponent,
  ],
  providers: [
    LogListService,
  ],
})
export class SharedModule { }
