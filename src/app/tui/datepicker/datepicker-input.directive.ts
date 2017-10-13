import {
  AfterContentInit,
  Directive,
  ElementRef,
  EventEmitter,
  forwardRef,
  Inject,
  Input,
  OnDestroy,
  Output,
  Renderer2,
  HostBinding,
  HostListener,
} from '@angular/core';
import { DatepickerComponent } from './datepicker.component';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {
  DateAdapter,
  TCC_DATE_FORMATS,
  TccDateFormats,
} from './datetime';
import {coerceBooleanProperty} from '@angular/cdk/coercion';

const DOWN_ARROW = 40;


export const MD_DATEPICKER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DatepickerInputDirective),
  multi: true,
};


export const MD_DATEPICKER_VALIDATORS: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => DatepickerInputDirective),
  multi: true,
};


/**
 * An event used for datepicker input and change events. We don't always have access to a native
 * input or change event because the event may have been triggered by the user clicking on the
 * calendar popup. For consistency, we always use MdDatepickerInputEvent instead.
 */
export class TccDatepickerInputEvent<D> {
  /** The new value for the target datepicker input. */
  value: D | null;

  constructor(public target: DatepickerInputDirective<D>, public targetElement: HTMLElement) {
    this.value = this.target.value;
  }
}


/** Directive used to connect an input to a MdDatepicker. */
@Directive({
  selector: '[tccDatepicker]',
  providers: [MD_DATEPICKER_VALUE_ACCESSOR, MD_DATEPICKER_VALIDATORS],
})
export class DatepickerInputDirective<D> implements AfterContentInit, ControlValueAccessor, OnDestroy,
    Validator {
  @HostBinding('attr.datepicker-id') '(_datepicker?.opened && _datepicker.id) || null';
  @HostBinding('attr.min') 'min ? _dateAdapter.getISODateString(min) : null';
  @HostBinding('attr.max') 'max ? _dateAdapter.getISODateString(max) : null';
  @HostBinding('disabled') 'disabled ? disabled : null';

  private _datepickerSubscription: Subscription;

  /** The datepicker that this input is associated with. */
  @Input()
  set tccDatepicker(value: DatepickerComponent<D>) {
    if (value) {
      this._datepicker = value;
      this._datepicker._registerInput(this);
    }
  }
  _datepicker: DatepickerComponent<D>;

  @Input() set tccDatepickerFilter(filter: (date: D | null) => boolean) {
    this._dateFilter = filter;
    this._validatorOnChange();
  }
  _dateFilter: (date: D | null) => boolean;

  /** The value of the input. */
  @Input()
  get value(): D | null {
    return this._getValidDateOrNull(this._dateAdapter.parse(
        this._elementRef.nativeElement.value, this._dateFormats.parse.dateInput));
  }
  set value(value: D | null) {
    if (value != null && !this._dateAdapter.isDateInstance(value)) {
      throw Error('Datepicker: value not recognized as a date object by DateAdapter.');
    }
    this._lastValueValid = !value || this._dateAdapter.isValid(value);
    value = this._getValidDateOrNull(value);

    const oldDate = this.value;
    this._renderer.setProperty(this._elementRef.nativeElement, 'value',
        value ? this._dateAdapter.format(value, this._dateFormats.display.dateInput) : '');
    if (!this._dateAdapter.sameDate(oldDate, value)) {
      this._valueChange.emit(value);
    }
  }

  /** The minimum valid date. */
  @Input()
  get min(): D | null { return this._min; }
  set min(value: D | null) {
    this._min = value;
    this._validatorOnChange();
  }
  private _min: D | null;

  /** The maximum valid date. */
  @Input()
  get max(): D | null { return this._max; }
  set max(value: D | null) {
    this._max = value;
    this._validatorOnChange();
  }
  private _max: D | null;

  /** Whether the datepicker-input is disabled. */
  @Input()
  get disabled() { return this._disabled; }
  set disabled(value: any) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled: boolean;

  /** Emits when a `change` event is fired on this `<input>`. */
  @Output() dateChange = new EventEmitter<TccDatepickerInputEvent<D>>();

  /** Emits when an `input` event is fired on this `<input>`. */
  @Output() dateInput = new EventEmitter<TccDatepickerInputEvent<D>>();

  /** Emits when the value changes (either due to user input or programmatic change). */
  _valueChange = new EventEmitter<D|null>();

  /** Whether the last value set on the input was valid. */
  private _lastValueValid = false;

  private _cvaOnChange: (value: any) => void = () => {};

  private _validatorOnChange = () => {};

  /** The form control validator for whether the input parses. */
  private _parseValidator: ValidatorFn = (): ValidationErrors | null => {
    return this._lastValueValid ?
        null : {'mdDatepickerParse': {'text': this._elementRef.nativeElement.value}};
  }

  /** The form control validator for the min date. */
  private _minValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    return (!this.min || !control.value ||
        this._dateAdapter.compareDate(this.min, control.value) <= 0) ?
        null : {'mdDatepickerMin': {'min': this.min, 'actual': control.value}};
  }

  /** The form control validator for the max date. */
  private _maxValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    return (!this.max || !control.value ||
        this._dateAdapter.compareDate(this.max, control.value) >= 0) ?
        null : {'mdDatepickerMax': {'max': this.max, 'actual': control.value}};
  }

  /** The form control validator for the date filter. */
  private _filterValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    return !this._dateFilter || !control.value || this._dateFilter(control.value) ?
        null : {'mdDatepickerFilter': true};
  }


  /** The combined form control validator for this input. */
  // tslint:disable-next-line
  private _validator: ValidatorFn | null =
      Validators.compose(
          [this._parseValidator, this._minValidator, this._maxValidator, this._filterValidator]);

  constructor(
      private _elementRef: ElementRef,
      private _renderer: Renderer2,
      private _dateAdapter: DateAdapter<D>,
      @Inject(TCC_DATE_FORMATS) private _dateFormats: TccDateFormats) {
  }

  ngAfterContentInit() {
    if (this._datepicker) {
      this._datepickerSubscription =
          this._datepicker.selectedChanged.subscribe((selected: D) => {
            this.value = selected;
            this._cvaOnChange(selected);
            this.dateInput.emit(new TccDatepickerInputEvent(this, this._elementRef.nativeElement));
            this.dateChange.emit(new TccDatepickerInputEvent(this, this._elementRef.nativeElement));
          });
    }
  }

  ngOnDestroy() {
    if (this._datepickerSubscription) {
      this._datepickerSubscription.unsubscribe();
    }
  }

  registerOnValidatorChange(fn: () => void): void {
    this._validatorOnChange = fn;
  }

  validate(c: AbstractControl): ValidationErrors | null {
    return this._validator ? this._validator(c) : null;
  }

  /**
   * Gets the element that the datepicker popup should be connected to.
   * @return The element to connect the popup to.
   */
  getPopupConnectionElementRef(): ElementRef {
    return this._elementRef;
  }

  // Implemented as part of ControlValueAccessor
  writeValue(value: D): void {
    this.value = value;
  }

  // Implemented as part of ControlValueAccessor
  registerOnChange(fn: (value: any) => void): void {
    this._cvaOnChange = fn;
  }

  registerOnTouched() {}

  // Implemented as part of ControlValueAccessor
  setDisabledState(disabled: boolean): void {
    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', disabled);
  }

  @HostListener('keydown', ['$event']) _onKeydown(event: KeyboardEvent) {
    if (event.altKey && event.keyCode === DOWN_ARROW) {
      this._datepicker.open();
      event.preventDefault();
    }
  }

  @HostListener('input', ['$event.target.value']) _onInput(value: string) {
    let date = this._dateAdapter.parse(value, this._dateFormats.parse.dateInput);
    this._lastValueValid = !date || this._dateAdapter.isValid(date);
    date = this._getValidDateOrNull(date);
    this._cvaOnChange(date);
    this._valueChange.emit(date);
    this.dateInput.emit(new TccDatepickerInputEvent(this, this._elementRef.nativeElement));
  }

  @HostListener('change') _onChange() {
    this.dateChange.emit(new TccDatepickerInputEvent(this, this._elementRef.nativeElement));
  }

  /**
   * @param obj The object to check.
   * @returns The given object if it is both a date instance and valid, otherwise null.
   */
  private _getValidDateOrNull(obj: any): D | null {
    return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
  }
}
