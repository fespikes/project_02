import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { I18nModule } from '../i18n';
import { TccModalService } from '../tui';
import { SharedModule } from '../shared';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { GaIconComponent } from './ga-icon/ga-icon.component';
import { GaButtonComponent } from './ga-button/ga-button.component';
import { GaDropdownComponent } from './ga-dropdown/ga-dropdown.component';
import { GaFormComponent } from './ga-form/ga-form.component';
import { GaPaginationComponent } from './ga-pagination/ga-pagination.component';
import { GaTableComponent } from './ga-table/ga-table.component';
import { GaTableIdComponent } from './ga-table/ga-table-id/ga-table-id.component';
import { GaTableOperationComponent } from './ga-table/ga-table-operation/ga-table-operation.component';
import { GaTableSublistComponent } from './ga-table/ga-table-sublist/ga-table-sublist.component';
import { GaSubmenuComponent } from './ga-submenu/ga-submenu.component';
import { GaDashboardComponent } from './ga-dashboard/ga-dashboard.component';
import {
  GaModalComponent,
  GaModalHelloComponent,
  GaModalScrollableComponent,
  GaModalMultipleComponent,
  GaModalWithCloseCallbackComponent,
  GaModalWithDataComponent,
  GaModalWithInjectorComponent,
} from './ga-modal/ga-modal.component';
import { GaTabComponent } from './ga-tab/ga-tab.component';
import { GaLayoutComponent } from './ga-layout/ga-layout.component';
import { GaPropertyComponent } from './ga-property/ga-property.component';
import { GaSelectComponent } from './ga-select/ga-select.component';
import { GaInputComponent } from './ga-input/ga-input.component';
import { GaFilteringComponent } from './ga-filtering/ga-filtering.component';
import { GaCarouselComponent } from './ga-carousel/ga-carousel.component';
import { GaAvatarComponent } from './ga-avatar/ga-avatar.component';
import { GaLoadingComponent } from './ga-loading/ga-loading.component';
import { GaMessageComponent } from './ga-message/ga-message.component';
import { GaLayoutVerticalComponent } from './ga-layout/ga-layout-vertical/ga-layout-vertical.component';
import { GaLayoutSimpleComponent } from './ga-layout/ga-layout-simple/ga-layout-simple.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GalleryRoutingModule,
    I18nModule,
    SharedModule,
  ],
  declarations: [
    GalleryComponent,
    GaIconComponent,
    GaButtonComponent,
    GaDropdownComponent,
    GaFormComponent,
    GaPaginationComponent,
    GaSubmenuComponent,
    GaDashboardComponent,
    GaModalComponent,
    GaTabComponent,
    GaTableIdComponent,
    GaTableOperationComponent,
    GaTableSublistComponent,
    GaTableComponent,
    GaModalHelloComponent,
    GaModalScrollableComponent,
    GaModalMultipleComponent,
    GaModalWithCloseCallbackComponent,
    GaModalWithDataComponent,
    GaModalWithInjectorComponent,
    GaLayoutComponent,
    GaPropertyComponent,
    GaSelectComponent,
    GaInputComponent,
    GaFilteringComponent,
    GaCarouselComponent,
    GaAvatarComponent,
    GaLoadingComponent,
    GaMessageComponent,
    GaLayoutVerticalComponent,
    GaLayoutSimpleComponent,
  ],
  providers: [
    TccModalService,
  ],
  entryComponents: [
    GaModalHelloComponent,
    GaModalScrollableComponent,
    GaModalMultipleComponent,
    GaModalWithCloseCallbackComponent,
    GaModalWithDataComponent,
    GaModalWithInjectorComponent,
  ],
})
export class GalleryModule { }
