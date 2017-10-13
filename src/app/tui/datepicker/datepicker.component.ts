import {
  Component,
  ComponentRef,
  OnDestroy,
  HostBinding,
  HostListener,
  ElementRef,
  Input,
  Output,
  AfterContentInit,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Optional,
  Inject,
  InjectionToken,
  ViewContainerRef,
  ViewChild,
  NgZone,
  EventEmitter,
} from '@angular/core';

import { DOCUMENT } from '@angular/platform-browser';
import {Subscription} from 'rxjs/Subscription';
import {first} from '@angular/cdk/rxjs';

import {
  Overlay,
  OverlayRef,
  OverlayState,
  PositionStrategy,
  RepositionScrollStrategy,
  ScrollStrategy,
} from '@angular/cdk/overlay';
import {Directionality} from '@angular/cdk/bidi';

import {ComponentPortal} from '@angular/cdk/portal';
import {coerceBooleanProperty} from '@angular/cdk/coercion';

import { DateAdapter } from './datetime/index';
import { DatepickerInputDirective } from './';
import { CalendarComponent } from './calendar/calendar.component';

let datepickerUid = 0;
const ESCAPE = 27;

/** Injection token that determines the scroll handling while the calendar is open. */
export const TCC_DATEPICKER_SCROLL_STRATEGY =
new InjectionToken<() => ScrollStrategy>('md-datepicker-scroll-strategy');

export function TCC_DATEPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay: Overlay):
() => RepositionScrollStrategy {
return () => overlay.scrollStrategies.reposition();
}

export const TCC_DATEPICKER_SCROLL_STRATEGY_PROVIDER = {
  provide: TCC_DATEPICKER_SCROLL_STRATEGY,
  deps: [Overlay],
  useFactory: TCC_DATEPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY,
};

@Component({
  selector: 'tcc-datepicker-content',
  templateUrl: './datepicker-content.component.html',
  styleUrls: ['./datepicker-content.component.sass'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerContentComponent<D> implements AfterContentInit {
  @HostBinding('class.tcc-datepicker-content') hostClass = true;

  datepicker: DatepickerComponent<D>;

  @ViewChild(CalendarComponent) _calendar: CalendarComponent<D>;

  ngAfterContentInit() {
    // this._calendar._focusActiveCell();
  }

  /**
   * Handles keydown event on datepicker content.
   * @param event The event.
   */
  @HostListener('keydown', ['$event']) _handleKeydown(event: KeyboardEvent) {
    if (event.keyCode === ESCAPE) {
      this.datepicker.close();
      event.preventDefault();
      event.stopPropagation();
    }
  }
}

@Component({
  selector: 'tcc-datepicker',
  template: '',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerComponent<D> implements OnDestroy {
  @Input()
  get startAt(): D | null {
    return;
  }
  set startAt(date: D | null) { this._startAt = date; }

  private _startAt: D | null;

  @Input() startView: 'month' | 'year' = 'month';

  @Input()
  get disabled() {
    return;
    // return this._disabled === undefined ? this._datepickerInput.disabled : this._disabled;
  }
  set disabled(value: any) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled: boolean;

  get _selected(): D | null { return this._validSelected; }
  set _selected(value: D | null) { this._validSelected = value; }
  private _validSelected: D | null = null;

  @Output() selectedChanged = new EventEmitter<D>();

  /** The minimum selectable date. */
  get _minDate(): D | null {
    return this._datepickerInput && this._datepickerInput.min;
  }

  // /** The maximum selectable date. */
  get _maxDate(): D | null {
    return this._datepickerInput && this._datepickerInput.max;
  }

  /** The input element this datepicker is associated with. */
  private _datepickerInput: DatepickerInputDirective<D>;

  /** The element that was focused before the datepicker was opened. */
  private _focusedElementBeforeOpen: HTMLElement | null = null;

   /** A portal containing the calendar for this datepicker. */
  private _calendarPortal: ComponentPortal<DatepickerContentComponent<D>>;

  private _popupRef: OverlayRef;

  private _inputSubscription: Subscription;

  opened = false;

  id = `md-datepicker-${datepickerUid++}`;

  constructor(
    private _overlay: Overlay,
    private _ngZone: NgZone,
    private _viewContainerRef: ViewContainerRef,
    private _dateAdapter: DateAdapter<D>,
    @Optional() private _dir: Directionality,
    @Inject(TCC_DATEPICKER_SCROLL_STRATEGY) private _scrollStrategy,
    @Optional() @Inject(DOCUMENT) private _document: any) {
      if (!this._dateAdapter) {
        throw Error('DateAdapter');
      }
  }

  ngOnDestroy() {}

  /** Selects the given date */
  _select(date: D): void {
    const oldValue = this._selected;
    this._selected = date;
    if (!this._dateAdapter.sameDate(oldValue, this._selected)) {
      this.selectedChanged.emit(date);
    }
  }

  /**
   * Register an input with this datepicker.
   * @param input The datepicker input to register with this datepicker.
   */
  _registerInput(input: DatepickerInputDirective<D>): void {
    if (this._datepickerInput) {
      throw Error('An MdDatepicker can only be associated with a single input.');
    }
    this._datepickerInput = input;
    this._inputSubscription =
        this._datepickerInput._valueChange.subscribe((value: D | null) => this._selected = value);
  }

  /** Open the calendar. */
  open(): void {
    if (this.opened || this.disabled) {
      return;
    }
    if (!this._datepickerInput) {
      throw Error('Attempted to open an MdDatepicker with no associated input.');
    }
    if (this._document) {
      this._focusedElementBeforeOpen = this._document.activeElement;
    }

    this._openPopup();
    this.opened = true;
  }

  /** Close the calendar. */
  close() {
    if (!this.opened) {
      return;
    }
    if (this._popupRef && this._popupRef.hasAttached()) {
      this._popupRef.detach();
    }

    if (this._calendarPortal && this._calendarPortal.isAttached) {
      this._calendarPortal.detach();
    }
    if (this._focusedElementBeforeOpen &&
      typeof this._focusedElementBeforeOpen.focus === 'function') {

      this._focusedElementBeforeOpen.focus();
      this._focusedElementBeforeOpen = null;
    }

    this.opened = false;
  }

  /** Open the calendar as a popup. */
  private _openPopup() {
    if (!this._calendarPortal) {
      this._calendarPortal = new ComponentPortal(DatepickerContentComponent, this._viewContainerRef);
    }

    if (!this._popupRef) {
      this._createPopup();
    }

    if (!this._popupRef.hasAttached()) {
      const componentRef: ComponentRef<DatepickerContentComponent<D>> =
          this._popupRef.attach(this._calendarPortal);
      componentRef.instance.datepicker = this;

      // Update the position once the calendar has rendered.
      first.call(this._ngZone.onStable).subscribe(() => this._popupRef.updatePosition());
    }

    this._popupRef.backdropClick().subscribe(() => this.close());
  }

  private _createPopup() {
    const overlayState = new OverlayState();
    overlayState.positionStrategy = this._createPopupPositionStrategy();
    overlayState.hasBackdrop = true;
    overlayState.backdropClass = 'md-overlay-transparent-backdrop';
    overlayState.direction = this._dir ? this._dir.value : 'ltr';
    overlayState.scrollStrategy = this._scrollStrategy();

    this._popupRef = this._overlay.create(overlayState);
  }

  /** Create the popup PositionStrategy. */
  private _createPopupPositionStrategy(): PositionStrategy {
    return this._overlay.position()
      .connectedTo(this._datepickerInput.getPopupConnectionElementRef(),
        {originX: 'start', originY: 'bottom'},
        {overlayX: 'start', overlayY: 'top'},
      )
      .withFallbackPosition(
        { originX: 'start', originY: 'top' },
        { overlayX: 'start', overlayY: 'bottom' },
      )
      .withFallbackPosition(
        {originX: 'end', originY: 'bottom'},
        {overlayX: 'end', overlayY: 'top'},
      )
      .withFallbackPosition(
        { originX: 'end', originY: 'top' },
        { overlayX: 'end', overlayY: 'bottom' },
      );
  }
}
