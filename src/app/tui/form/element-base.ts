/**
 * reference: https://github.com/clbond/form-example
 */
import {NgModel} from '@angular/forms';

import {Observable} from 'rxjs/Rx';

import {ValueAccessorBase} from './value-accessor';

import {
  AsyncValidatorArray,
  ValidatorArray,
  ValidationResult,
  validate,
} from './validate';

export abstract class ElementBase<T> extends ValueAccessorBase<T> {
  protected abstract model: NgModel;

  constructor(
    private validators: ValidatorArray,
    private asyncValidators: AsyncValidatorArray,
  ) {
    super();
  }

  protected validate(): Observable<ValidationResult> {
    return validate
      (this.validators, this.asyncValidators)
      (this.model.control);
  }

  get invalid(): Observable<boolean> {
    return this.validate().map(v => Object.keys(v || {}).length > 0);
  }

  get failures(): Observable<Object[]> {
    return this.validate()
    .map(v => Object.keys(v).map((key) => ({ key, value: v[key] })));
  }
}
