import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiModule } from '../tui';
import { I18nModule } from '../i18n';

import {
  IconStatusDirective,
  LogListComponent,
  LogListService,
} from './components';
// import { Base64Directive } from './base64.directive';

@NgModule({
  imports: [
    CommonModule,
    TuiModule,
    I18nModule,
  ],
  declarations: [
    IconStatusDirective,
    LogListComponent,
    // Base64Directive,
  ],
  exports: [
    TuiModule,
    IconStatusDirective,
    LogListComponent,
    // Base64Directive,
  ],
  providers: [
    LogListService,
  ],
})
export class SharedModule { }
