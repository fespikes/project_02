import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AppService } from '../../app.service';

@Component({
  selector: 'tdc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  profileForm: any;

  constructor(
    private service: AppService,
    private router: Router
  ) {}

  ngOnInit() {
    this.profileForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onSubmit() {
    this.service.login(this.profileForm.value)
      .subscribe(res => {
        console.log(res);
        this.router.navigate([this.service.redirectUrl || '/admin']);
      }, err => {
        console.error(err);
      });

  }

}
