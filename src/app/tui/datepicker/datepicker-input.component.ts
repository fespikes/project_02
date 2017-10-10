import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';

import {coerceBooleanProperty} from '@angular/cdk/coercion';

import {DatepickerComponent} from './datepicker.component';

@Component({
  selector: 'tcc-datepicker-input',
  templateUrl: './datepicker-input.component.html',
  styleUrls: ['./datepicker-input.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerInputComponent<D> implements OnInit {
  @Input() datepicker: DatepickerComponent<D>;
  @Input() dateFilter: (date: D | null) => boolean;
  @Input() value: D;
  @Input() min: D;
  @Input() max: D;
  @Output() dateChange = new EventEmitter();
  @Output() dateInput = new EventEmitter();

  // Whether the toggle button is disabled.
  @Input()
  get disabled() {
    return this._disabled === undefined ? this.datepicker.disabled : this._disabled;
  }
  set disabled(value) {
    this._disabled = coerceBooleanProperty(value);
  }

  private _disabled: boolean;

  constructor() { }

  ngOnInit() {
  }

  _open(event: Event) {
    if (this.datepicker && !this.disabled) {
      this.datepicker.open();
      event.stopPropagation();
    }
  }

  _dateChange(event: Event) {
    this.dateChange.emit(event);
  }

  _dateInput(event: Event) {
    this.dateInput.emit(event);
  }
}
