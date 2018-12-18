import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TuiModule, TccModalService } from '../../tui';

import { SharedModule } from '../../shared';

import { HomeService } from './home.service';
import { HomeComponent } from './home.component';
import { SlicesComponent } from './slices/slices.component';
import { HotModulesComponent } from './hot-modules/hot-modules.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    BrowserAnimationsModule,
    TuiModule
  ],
  declarations: [
    HomeComponent,
    SlicesComponent,
    HotModulesComponent,
  ],
  providers: [
    TccModalService,
    HomeService
  ]
})
export class HomeModule { }
