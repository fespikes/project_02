import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './ga-form.component.html',
  styleUrls: ['./ga-form.component.sass'],
})
export class GaFormComponent implements OnInit {
  userForm: FormGroup;
  userFormDisabled = false;
  loginFormDisabled = false;

  loginData = {};

  companies = [
    {name: 'Disney'},
    {name: 'Pixel'},
  ];

  button = 'b1';

  constructor(private fb: FormBuilder) {
    this.userForm = fb.group({
      name: [{value: 'Admin', disabled: true}],
      email: ['hello@world'],
      age: [20],
      hobbies: [['code']],
      sex: ['male'],
      color: ['red'],
      company: ['Disney'],
    });
  }

  ngOnInit() {
    this.userForm.controls['sex'].valueChanges.subscribe((sex: string) => {
      console.log('sex', sex);
    });
    this.userForm.controls['hobbies'].valueChanges.subscribe((hobbies: string) => {
      console.log('hobbies', hobbies);
    });
    this.userForm.controls['company'].valueChanges.subscribe((company: string) => {
      console.log('company', company);
    });
  }

  login(formData: any) {
    console.log(formData);
  }

  submit() {
    console.log(this.userForm.value);
  }

  toggleLoginFormDisable() {
    this.loginFormDisabled = !this.loginFormDisabled;
  }

  toggleUserFormDisable() {
    this.userFormDisabled = !this.userFormDisabled;
    Object.keys(this.userForm.controls).forEach((controlName) => {
      const control = this.userForm.controls[controlName];
      if (this.userFormDisabled) {
        control.disable();
      } else {
        control.enable();
      }
    });
  }
}
