import {
  Component,
  AfterContentInit,
  Input,
  Output,
  EventEmitter,
  Inject,
} from '@angular/core';

import { CalendarCell } from '../calendar-cell.model';
import {
  DateAdapter,
  TCC_DATE_FORMATS,
  TccDateFormats,
} from '../datetime/';

@Component({
  selector: 'tcc-year-view',
  templateUrl: './year-view.component.html',
  styleUrls: ['./year-view.component.sass'],
})
export class YearViewComponent<D> implements AfterContentInit {

   /** The date to display in this year view (everything other than the year is ignored). */
   @Input()
   get activeDate(): D { return this._activeDate; }
   set activeDate(value: D) {
     const oldActiveDate = this._activeDate;
     this._activeDate = value || this._dateAdapter.today();
     if (this._dateAdapter.getYear(oldActiveDate) !== this._dateAdapter.getYear(this._activeDate)) {
       this._init();
     }
   }
   private _activeDate: D;

   /** The currently selected date. */
   @Input()
   get selected(): D { return this._selected; }
   set selected(value: D) {
     this._selected = value;
     this._selectedMonth = this._getMonthInCurrentYear(this.selected);
   }
   private _selected: D;

   /** A function used to filter which dates are selectable. */
   @Input() dateFilter: (date: D) => boolean;

   /** Emits when a new month is selected. */
   @Output() selectedChange = new EventEmitter<D>();

   /** Grid of calendar cells representing the months of the year. */
   _months: CalendarCell[][];

   /** The label for this year (e.g. "2017"). */
   _yearLabel: string;

   /** The month in this year that today falls on. Null if today is in a different year. */
   _todayMonth: number | null;

   /**
    * The month in this year that the selected Date falls on.
    * Null if the selected Date is in a different year.
    */
   _selectedMonth: number | null;

   constructor(
     public _dateAdapter: DateAdapter<D>,
    @Inject(TCC_DATE_FORMATS) private _dateFormats: TccDateFormats) {
     this._activeDate = this._dateAdapter.today();
   }

   ngAfterContentInit() {
     this._init();
   }

   /** Handles when a new month is selected. */
   _monthSelected(month: number) {
     const daysInMonth = this._dateAdapter.getNumDaysInMonth(
         this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1));
     this.selectedChange.emit(this._dateAdapter.createDate(
         this._dateAdapter.getYear(this.activeDate), month,
         Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth)));
   }

   /** Initializes this month view. */
   private _init() {
     this._selectedMonth = this._getMonthInCurrentYear(this.selected);
     this._todayMonth = this._getMonthInCurrentYear(this._dateAdapter.today());
     this._yearLabel = this._dateAdapter.getYearName(this.activeDate);

     const monthNames = this._dateAdapter.getMonthNames('short');
     // First row of months only contains 5 elements so we can fit the year label on the same row.
     this._months = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]].map(row => row.map(
         month => this._createCellForMonth(month, monthNames[month])));
   }

   /**
    * Gets the month in this year that the given Date falls on.
    * Returns null if the given Date is in another year.
    */
   private _getMonthInCurrentYear(date: D) {
     return date && this._dateAdapter.getYear(date) === this._dateAdapter.getYear(this.activeDate) ?
         this._dateAdapter.getMonth(date) : null;
   }

   /** Creates an MdCalendarCell for the given month. */
   private _createCellForMonth(month: number, monthName: string) {
     const ariaLabel = this._dateAdapter.format(
         this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1),
         this._dateFormats.display.monthYearA11yLabel);
     return new CalendarCell(
         month, monthName.toLocaleUpperCase(), ariaLabel, this._isMonthEnabled(month));
   }

   /** Whether the given month is enabled. */
   private _isMonthEnabled(month: number) {
     if (!this.dateFilter) {
       return true;
     }

     const firstOfMonth = this._dateAdapter.createDate(
         this._dateAdapter.getYear(this.activeDate), month, 1);

     // If any date in the month is enabled count the month as enabled.
     for (let date = firstOfMonth; this._dateAdapter.getMonth(date) === month;
          date = this._dateAdapter.addCalendarDays(date, 1)) {
       if (this.dateFilter(date)) {
         return true;
       }
     }

     return false;
   }

}
