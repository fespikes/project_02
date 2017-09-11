import { Pipe, PipeTransform } from '@angular/core';

const defaultErrorMsgs = {
  required: 'TUI.FORM.REQUIRED',
  email: 'TUI.FORM.EMAIL_INVALID_ERROR',
  minlength: 'TUI.FORM.MINLENGTH_ERROR',
  maxlength: 'TUI.FORM.MAXLENGTH_ERROR',
  tccCompel: 'TUI.FORM.CHECKBOX_COMPEL_ERROR',
};

class ValidationResult {
  key: string;
  value: any;
}

@Pipe({
  name: 'tccFormError',
})
export class FormErrorPipe implements PipeTransform {

  transform(result: ValidationResult, customMsgs: Object = {}): any {
    const {key, value} = result;
    if (customMsgs[key]) {
      return customMsgs[key];
    } else if (defaultErrorMsgs[key]) {
      return defaultErrorMsgs[key];
    }
    return 'TUI.FORM.VALIDATION_FAILED';
  }

}
