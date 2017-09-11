import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { I18nModule } from '../i18n';

import { AvatarComponent } from './avatar';
import {
  BtnDirective,
  BtnOutlineDirective,
} from './btn';
import {
  CarouselComponent,
  CarouselContentDirective,
} from './carousel';
import {
  DropdownComponent,
  DropdownTriggerDirective,
  DropdownTitleComponent,
  DropdownItemComponent,
} from './dropdown';
import {
  CheckboxComponent,
  CheckboxGroupComponent,
  CheckboxItemComponent,
  CompelValidatorDirective,
  FormDirective,
  FormItemAddonDirective,
  FormItemComponent,
  FormErrorComponent,
  FormErrorPipe,
  InputErrorComponent,
  InputComponent,
  RadioComponent,
  RadioGroupComponent,
  RadioBtnGroupDirective,
  RadioItemComponent,
} from './form';
import {
  IconSymbolComponent,
  IconDirective,
} from './icon';
import {
  BgImgUrlDirective,
  ImgSrcDirective,
} from './img';
import {
  ModalContainerComponent,
  ModalCountService,
  ModalConfirmComponent,
  ModalInfoComponent,
} from './modal';
import { PaginationComponent } from './pagination';
import {
  SelectComponent,
  SelectOptionComponent,
} from './select';
import {
  SubmenuComponent,
  SubmenuListComponent,
  SubmenuService,
} from './submenu';
import {
  TabComponent,
  TabPaneDirective,
} from './tab';
import {
  TableComponent,
  TableHeadComponent,
  TableRowComponent,
  TableSelectDirective,
} from './table';
import { TooltipDirective } from './tooltip';
import { DefaultPipe } from './default.pipe';
import { PropertyComponent } from './property/property.component';
import {
  ChartComponent,
  ChartBaseComponent,
} from './chart';
import { SearchComponent } from './search/search.component';
import { TextareaComponent } from './form/textarea/textarea.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    I18nModule,
  ],
  declarations: [
    AvatarComponent,
    BgImgUrlDirective,
    BtnDirective,
    BtnOutlineDirective,
    CheckboxComponent,
    CheckboxGroupComponent,
    CheckboxItemComponent,
    CompelValidatorDirective,
    DefaultPipe,
    DropdownComponent,
    DropdownTriggerDirective,
    DropdownItemComponent,
    DropdownTitleComponent,
    FormDirective,
    FormErrorComponent,
    FormItemAddonDirective,
    FormItemComponent,
    FormErrorPipe,
    IconSymbolComponent,
    IconDirective,
    ImgSrcDirective,
    InputComponent,
    InputErrorComponent,
    ModalContainerComponent,
    ModalConfirmComponent,
    ModalInfoComponent,
    PaginationComponent,
    PropertyComponent,
    RadioComponent,
    RadioGroupComponent,
    RadioBtnGroupDirective,
    RadioItemComponent,
    SelectComponent,
    SelectOptionComponent,
    SubmenuComponent,
    SubmenuListComponent,
    TabComponent,
    TabPaneDirective,
    TableComponent,
    TableHeadComponent,
    TableRowComponent,
    TableSelectDirective,
    TooltipDirective,
    ChartComponent,
    ChartBaseComponent,
    SearchComponent,
    TextareaComponent,
    CarouselComponent,
    CarouselContentDirective,
  ],
  exports: [
    AvatarComponent,
    BgImgUrlDirective,
    BtnDirective,
    BtnOutlineDirective,
    CarouselComponent,
    CarouselContentDirective,
    CheckboxComponent,
    CheckboxGroupComponent,
    CheckboxItemComponent,
    CompelValidatorDirective,
    DefaultPipe,
    DropdownComponent,
    DropdownTriggerDirective,
    DropdownTitleComponent,
    DropdownItemComponent,
    FormDirective,
    FormErrorComponent,
    FormItemAddonDirective,
    FormItemComponent,
    IconSymbolComponent,
    IconDirective,
    InputComponent,
    InputErrorComponent,
    ImgSrcDirective,
    PaginationComponent,
    PropertyComponent,
    RadioComponent,
    RadioGroupComponent,
    RadioBtnGroupDirective,
    RadioItemComponent,
    SelectComponent,
    SelectOptionComponent,
    SubmenuComponent,
    SubmenuListComponent,
    TabComponent,
    TabPaneDirective,
    TableComponent,
    TableHeadComponent,
    TableRowComponent,
    TableSelectDirective,
    TooltipDirective,
    ChartComponent,
    ChartBaseComponent,
    SearchComponent,
    TextareaComponent,
  ],
  providers: [
    ModalCountService,
    SubmenuService,
  ],
  entryComponents: [
    ModalContainerComponent,
    ModalConfirmComponent,
    ModalInfoComponent,
  ],
})
export class TuiModule { }
