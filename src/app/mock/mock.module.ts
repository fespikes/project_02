import { NgModule } from '@angular/core';

import { DefaultPipeStub, TranslatePipeStub} from './pipe';
import {
  MockSelectComponent,
  InputComponent,
  FormItemComponent,
  CheckboxComponent,
  CheckboxGroupComponent,
  CheckboxItemComponent,
  RadioGroupComponent,
  RadioItemComponent,
  SelectOptionComponent,
  TextareaComponent,
} from './form';
import { TabPaneDirective } from './tab-pane.directive';

import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    DefaultPipeStub,
    MockSelectComponent,
    InputComponent,
    TextareaComponent,
    FormItemComponent,
    CheckboxComponent,
    CheckboxGroupComponent,
    CheckboxItemComponent,
    RadioGroupComponent,
    RadioItemComponent,
    SelectOptionComponent,
    TabPaneDirective,
    TranslatePipeStub,
    SearchComponent,
  ],
  exports: [
    DefaultPipeStub,
    MockSelectComponent,
    InputComponent,
    TextareaComponent,
    FormItemComponent,
    CheckboxComponent,
    CheckboxGroupComponent,
    CheckboxItemComponent,
    RadioGroupComponent,
    RadioItemComponent,
    SelectOptionComponent,
    TabPaneDirective,
    TranslatePipeStub,
  ],
})
export class MockModule { }
