import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TranslateDeactivator, TranslateResolver, TranslateToken } from '../i18n';
import { GalleryComponent } from './gallery.component';
import { GaDashboardComponent } from './ga-dashboard/ga-dashboard.component';
import { GaIconComponent } from './ga-icon/ga-icon.component';
import { GaAvatarComponent } from './ga-avatar/ga-avatar.component';
import { GaButtonComponent } from './ga-button/ga-button.component';
import { GaCarouselComponent } from './ga-carousel/ga-carousel.component';
import { GaDropdownComponent } from './ga-dropdown/ga-dropdown.component';
import { GaFormComponent } from './ga-form/ga-form.component';
import { GaPaginationComponent } from './ga-pagination/ga-pagination.component';
import { GaTableComponent } from './ga-table/ga-table.component';
import { GaSubmenuComponent } from './ga-submenu/ga-submenu.component';
import { GaModalComponent } from './ga-modal/ga-modal.component';
import { GaTabComponent } from './ga-tab/ga-tab.component';
import {
  GaLayoutComponent,
  GaLayoutVerticalComponent,
  GaLayoutSimpleComponent,
} from './ga-layout';
import { GaPropertyComponent } from './ga-property/ga-property.component';
import { GaSelectComponent } from './ga-select/ga-select.component';
import { GaInputComponent } from './ga-input/ga-input.component';
import { GaFilteringComponent } from './ga-filtering/ga-filtering.component';
import { GaLoadingComponent } from './ga-loading/ga-loading.component';
import { GaMessageComponent } from './ga-message/ga-message.component';

const routes: Routes = [
  {
    path: 'layout',
    component: GaLayoutComponent,
    children: [
      {
        path: '',
        component: GaLayoutSimpleComponent,
      },
      {
        path: 'vertical',
        component: GaLayoutVerticalComponent,
      },
    ],
  },
  {
    path: '',
    component: GalleryComponent,
    resolve: [TranslateResolver],
    canDeactivate: [TranslateDeactivator],
    children: [
      {
        path: '',
        component: GaDashboardComponent,
      },
      {
        path: 'icon',
        component: GaIconComponent,
      },
      {
        path: 'avatar',
        component: GaAvatarComponent,
      },
      {
        path: 'button',
        component: GaButtonComponent,
      },
      {
        path: 'carousel',
        component: GaCarouselComponent,
      },
      {
        path: 'dropdown',
        component: GaDropdownComponent,
      },
      {
        path: 'form',
        component: GaFormComponent,
      },
      {
        path: 'pagination',
        component: GaPaginationComponent,
      },
      {
        path: 'table',
        component: GaTableComponent,
      },
      {
        path: 'submenu',
        component: GaSubmenuComponent,
      },
      {
        path: 'submenu/:path',
        component: GaSubmenuComponent,
      },
      {
        path: 'submenu/finance/overview',
        component: GaSubmenuComponent,
      },
      {
        path: 'message',
        component: GaMessageComponent,
      },
      {
        path: 'modal',
        component: GaModalComponent,
      },
      {
        path: 'tab',
        component: GaTabComponent,
      },
      {
        path: 'property',
        component: GaPropertyComponent,
      },
      {
        path: 'select',
        component: GaSelectComponent,
      },
      {
        path: 'input',
        component: GaInputComponent,
      },
      {
        path: 'filtering',
        component: GaFilteringComponent,
      },
      {
        path: 'loading',
        component: GaLoadingComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    TranslateResolver,
    TranslateDeactivator,
    {
      provide: TranslateToken,
      useValue: 'gallery',
    },
  ],
})
export class GalleryRoutingModule { }
