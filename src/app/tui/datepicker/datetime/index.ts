import {NgModule} from '@angular/core';
import {DateAdapter} from './date-adapter';
import {NativeDateAdapter} from './native-date-adapter';
import {TCC_DATE_FORMATS} from './date-formats';
import {TCC_NATIVE_DATE_FORMATS} from './native-date-formats';


export * from './date-adapter';
export * from './date-formats';
export * from './native-date-adapter';
export * from './native-date-formats';


@NgModule({
  providers: [{provide: DateAdapter, useClass: NativeDateAdapter}],
})
export class NativeDateModule {}


@NgModule({
  imports: [NativeDateModule],
  providers: [{provide: TCC_DATE_FORMATS, useValue: TCC_NATIVE_DATE_FORMATS}],
})
export class TccNativeDateModule {}
