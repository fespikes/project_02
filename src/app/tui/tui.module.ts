import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { I18nModule } from '../i18n';

import { AvatarComponent } from './avatar';
import { AdvComponent, SlicesComponent } from './adv';
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
  MinValueValidatorDirective,
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
import { FilterPipe } from './filter.pipe';
import { LoadingDirective } from './loading/loading.directive';
import {
  MessageComponent,
  MessageContainerComponent,
} from './message';
import {
  MonthViewComponent,
  YearViewComponent,
  CalendarBodyComponent,
  DatepickerInputComponent,
  TCC_DATEPICKER_SCROLL_STRATEGY_PROVIDER,
  TccNativeDateModule,
  CalendarComponent,
  DatepickerInputDirective,
  DatepickerContentComponent,
  DatepickerComponent,
} from './datepicker';
import {OverlayModule} from '@angular/cdk/overlay';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    I18nModule,
    OverlayModule,
    TccNativeDateModule,
  ],
  declarations: [
    AdvComponent,
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
    MinValueValidatorDirective,
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
    FilterPipe,
    LoadingDirective,
    MessageComponent,
    MessageContainerComponent,
    CalendarComponent,
    DatepickerInputDirective,
    DatepickerContentComponent,
    DatepickerComponent,
    DatepickerInputComponent,
    MonthViewComponent,
    YearViewComponent,
    CalendarBodyComponent,
    SlicesComponent,
  ],
  exports: [
    AdvComponent,
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
    FilterPipe,
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
    MinValueValidatorDirective,
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
    LoadingDirective,
    CalendarComponent,
    DatepickerInputDirective,
    DatepickerComponent,
    DatepickerInputComponent,
    MonthViewComponent,
    YearViewComponent,
    CalendarBodyComponent,
    SlicesComponent
  ],
  providers: [
    ModalCountService,
    SubmenuService,
    TCC_DATEPICKER_SCROLL_STRATEGY_PROVIDER,
  ],
  entryComponents: [
    ModalContainerComponent,
    ModalConfirmComponent,
    ModalInfoComponent,
    MessageContainerComponent,
    DatepickerContentComponent,
  ],
})
export class TuiModule { }
