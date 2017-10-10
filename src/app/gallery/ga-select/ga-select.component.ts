import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

function usernameValidator(control: FormControl): {[s: string]: boolean} {
  return {
    required: !!control.value.username,
  };
}

@Component({
  selector: 'tcc-ga-select',
  templateUrl: './ga-select.component.html',
})
export class GaSelectComponent {
  dpOption: any;

  objectOptions = [
    {
      label: 'GA.FORM.OPTION_A',
      value: 'a',
    },
    {
      label: 'GA.FORM.OPTION_B',
      value: 'b',
    },
    {},
  ];

  objectOption = this.objectOptions[0]['value'];

  stringOptions = ['hello', 'world'];

  stringOption = 'hello';

  form: FormGroup;

  formOptions = [
    {
      username: 'hello',
      value: '1',
    },
    {
      username: 'world',
      value: '2',
    },
  ];

  constructor(
    private fb: FormBuilder,
  ) {
    this.form = fb.group({
      username: ['1'],
    });
  }

  submit() {
    console.log(this.form.value);
  }
}
