import {
  Component,
  OnDestroy,
  HostBinding,
  ContentChildren,
  QueryList,
  Input,
  forwardRef,
  ElementRef,
  AfterContentChecked,
  HostListener,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { SelectOptionComponent } from './select-option.component';

@Component({
  selector: 'tcc-select',
  templateUrl: './select.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements ControlValueAccessor, OnDestroy {
  @HostBinding('class.tcc-select') true;
  @HostBinding('attr.disabled') get attrDisabled() {
    return this.disabled;
  }
  @HostBinding('attr.tabindex') get tabIndex() {
    return this.disabled ? null : 0;
  }
  @Input() placeholder = '';

  /** @deprecated 指定value需要显示的字段 */
  @Input() key: string;

  /** 当前值 */
  public value: any;

  /** 是否展开options */
  public optionsOpen: boolean;

  /** options的key, value对 */
  private options = {};

  /** 当前options数量 */
  private count = 0;

  /** 是否disabled */
  private innerDisabled = false;

  @Input() set disabled(value: any) {
    this.innerDisabled = !(value === false);
  }

  get disabled() {
    return this.innerDisabled;
  }

  /**
   * 在.tcc-select-label位置显示的文本信息
   *
   * 注意：因为使用`translate` pipe所以matchContent需要是一个字符串文本，这里通过`toString`方法做强制转换
   */
  get label(): string {
    if (~[undefined, null].indexOf(this.value)) {
      return '';
    }
    if (!this.key) {
      return this.options[this.stringifyMayBeObject(this.value)] || this.value.toString();
    }
    return (this.value[this.key] || '-').toString();
  }

  /** 在options展开时，在document元素上监听的click事件回调 */
  public documentClickHandler: EventListenerOrEventListenerObject = (function(event) {
    if (!this.ef.nativeElement.contains(event.target)) {
      this.close();
      this.removeDocumentClickListener();
    }
  }).bind(this);

  @HostListener('blur') onBlur() {
    this.controlValueAccessorTouchFn();
  }

  constructor(private ef: ElementRef) { }

  private controlValueAccessorChangeFn: (value: any) => void = () => { };
  private controlValueAccessorTouchFn: () => void = () => { };

  ngOnDestroy() {
    this.removeDocumentClickListener();
  }

  removeDocumentClickListener() {
    document.removeEventListener('click', this.documentClickHandler);
  }

  addDocumentClickListener() {
    document.addEventListener('click', this.documentClickHandler);
  }

  onHeadClick() {
    if (this.disabled) {
      return;
    }

    this.optionsOpen = !this.optionsOpen;
    if (this.optionsOpen) {
      this.addDocumentClickListener();
    } else {
      this.removeDocumentClickListener();
    }
  }

  private stringifyMayBeObject(obj: any) {
    if (typeof obj === 'object') {
      return JSON.stringify(obj);
    }
    return obj;
  }

  addOption(value: any, key: any) {
    this.options[this.stringifyMayBeObject(value)] = key;
    this.count++;
  }

  removeOption(value: any) {
    delete this.options[this.stringifyMayBeObject(value)];
    this.count--;
  }

  close() {
    this.optionsOpen = false;
  }

  select(value: any) {
    this.value = value;
    this.controlValueAccessorChangeFn(value);
    this.close();
  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: (value: any) => void) {
    this.controlValueAccessorChangeFn = fn;
  }

  registerOnTouched(fn: () => void) {
    this.controlValueAccessorTouchFn = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}
