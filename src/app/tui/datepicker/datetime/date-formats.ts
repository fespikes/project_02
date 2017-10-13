import {InjectionToken} from '@angular/core';

export class TccDateFormats {
  parse: {
    dateInput: any,
  };
  display: {
    dateInput: any,
    monthYearLabel: any,
    dateA11yLabel: any,
    monthYearA11yLabel: any,
    weekdayLabel: any,
  };
}


export const TCC_DATE_FORMATS = new InjectionToken<TccDateFormats>('tcc-date-formats');
