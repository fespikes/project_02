import {TccDateFormats} from './date-formats';

export const TCC_NATIVE_DATE_FORMATS: TccDateFormats = {
  parse: {
    dateInput: null,
  },
  display: {
    dateInput: {year: 'numeric', month: 'numeric', day: 'numeric'},
    monthYearLabel: {year: 'numeric', month: 'long'},
    dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
    monthYearA11yLabel: {year: 'numeric', month: 'long'},
    weekdayLabel: {weekday: 'short', month: 'short', day: 'numeric'},
  },
};
