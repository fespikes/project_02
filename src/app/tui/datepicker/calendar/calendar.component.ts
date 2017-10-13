import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  Inject,
  AfterContentInit,
  ElementRef,
  NgZone,
} from '@angular/core';

import {first} from '@angular/cdk/rxjs';

import {
  DateAdapter,
  TCC_DATE_FORMATS,
  TccDateFormats,
} from '../datetime/';

@Component({
  selector: 'tcc-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass'],
})
export class CalendarComponent<D> implements AfterContentInit {

  /** A date representing the period (month or year) to start the calendar in. */
  @Input() startAt: D;

  /** Whether the calendar should be started in month or year view. */
  @Input() startView: 'month' | 'year' = 'month';

  /** The currently selected date. */
  @Input() selected: D | null;

  /** The minimum selectable date. */
  @Input() minDate: D | null;

  /** The maximum selectable date. */
  @Input() maxDate: D | null;

  /** A function used to filter which dates are selectable. */
  @Input() dateFilter: (date: D) => boolean;

  /** Emits when the currently selected date changes. */
  @Output() selectedChange = new EventEmitter<D>();

  /** Emits when any date is selected. */
  @Output() userSelection = new EventEmitter<void>();

  /** Whether the calendar is in month view. */
  _monthView: boolean;

  /**
   * The current active date. This determines which time period is shown and which date is
   * highlighted when using keyboard navigation.
   */
  get _activeDate(): D { return this._clampedActiveDate; }
  set _activeDate(value: D) {
    this._clampedActiveDate = this._dateAdapter.clampDate(value, this.minDate, this.maxDate);
  }
  private _clampedActiveDate: D;

  /** Date filter for the month and year views. */
  _dateFilterForViews = (date: D) => {
    return !!date &&
        (!this.dateFilter || this.dateFilter(date)) &&
        (!this.minDate || this._dateAdapter.compareDate(date, this.minDate) >= 0) &&
        (!this.maxDate || this._dateAdapter.compareDate(date, this.maxDate) <= 0);
  }

  // 根据当前的view显示controls bar中文字
  get _getControlsText(): string {
    return this._monthView ?
    this._dateAdapter.format(this._activeDate, this._dateFormats.display.monthYearLabel) :
    this._dateAdapter.getYearName(this._activeDate);
  }

  // 显示当前年份, 初始值为当前日期
  get _getYearTest(): string {
    const date = this.selected ? this.selected : this._dateAdapter.today();
    return this._dateAdapter.getYearName(date);
  }

  // 显示当前日期 weekday, month day  初始值为当前日期
  get _getDateText(): string {
    const date = this.selected ? this.selected : this._dateAdapter.today();
    return this._dateAdapter.format(date, this._dateFormats.display.weekdayLabel);
  }

  constructor(
    private _elementRef: ElementRef,
    private _ngZone: NgZone,
    private _dateAdapter: DateAdapter<D>,
    @Inject(TCC_DATE_FORMATS) private _dateFormats: TccDateFormats,
  ) { }

  ngAfterContentInit() {
    this._activeDate = this.selected ? this.selected : this.startAt || this._dateAdapter.today();
    this._focusActiveCell();
    this._monthView = this.startView !== 'year';
  }

  _changeView(viewName) {
    if (viewName === 'month') {
      this._monthView = true;
    } else {
      this._monthView = false;
    }
  }

  // date selection in month view
  _dateSelected(date: D) {
    if (!this._dateAdapter.sameDate(date, this.selected)) {
      this.selectedChange.emit(date);
    }
  }

  _userSelected() {
    this.userSelection.emit();
  }

  // date selection in year view
  _monthSelected(month: D) {
    this._activeDate = month;
    this._monthView = true;
  }

  _previousClicked() {
    this._activeDate = this._monthView ?
        this._dateAdapter.addCalendarMonths(this._activeDate, -1) :
        this._dateAdapter.addCalendarYears(this._activeDate, -1);
  }

  _nextClicked() {
    this._activeDate = this._monthView ?
        this._dateAdapter.addCalendarMonths(this._activeDate, 1) :
        this._dateAdapter.addCalendarYears(this._activeDate, 1);
  }

   /** Focuses the active cell after the microtask queue is empty. */
   _focusActiveCell() {
    this._ngZone.runOutsideAngular(() => first.call(this._ngZone.onStable).subscribe(() => {
      this._elementRef.nativeElement.querySelector('.tcc-calendar-body-active').focus();
    }));
  }

  /** Whether the two dates represent the same view in the current view mode (month or year). */
  private _isSameView(date1: D, date2: D): boolean {
    return this._monthView ?
        this._dateAdapter.getYear(date1) === this._dateAdapter.getYear(date2) &&
        this._dateAdapter.getMonth(date1) === this._dateAdapter.getMonth(date2) :
        this._dateAdapter.getYear(date1) === this._dateAdapter.getYear(date2);
  }


}
