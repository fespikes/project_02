
import {takeUntil, distinctUntilChanged, debounceTime} from 'rxjs/operators';
import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Subject } from 'rxjs';

import { ElementBase } from '../form/element-base';

@Component({
  selector: 'tcc-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: SearchComponent,
    multi: true,
  }],
})
export class SearchComponent implements OnInit, OnDestroy, ControlValueAccessor {
  @HostBinding('class.tcc-search') hostClass = true;
  model: string;
  private searchSubject = new Subject<any>();
  private ngUnsubscribe = new Subject<any>();
  private controlValueAccessorChangeFn: (value: any) => void = () => { };

  constructor() { }

  ngOnInit() {
    this.searchSubject.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      takeUntil(this.ngUnsubscribe), )
      .subscribe(() => {
        this.controlValueAccessorChangeFn(this.model);
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  search() {
    this.searchSubject.next(this.model);
  }

  writeValue(value: any) {
    this.model = value;
  }

  registerOnChange(fn: (value: any) => void) {
    this.controlValueAccessorChangeFn = fn;
  }

  registerOnTouched(fn: () => void) { }
}
