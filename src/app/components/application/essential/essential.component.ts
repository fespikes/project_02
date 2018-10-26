import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'app/tui';

import { SelectComponent } from '../../../tui';
import { TranslateService } from 'app/i18n/translate.service';
import { ApplicationService } from '../application.service';
import { Application } from '../application.model';
import { patterns } from 'app/shared';

// import { application as appl } from './application.mock';

@Component({
  selector: 'tdc-essential',
  templateUrl: './essential.component.html',
  styleUrls: ['./essential.component.sass']
})
export class EssentialComponent implements OnInit {
  myForm: FormGroup;
  // params: Application = new Application();
  path: any;
  type: any;
  options: any[] = [];
  @ViewChild('theSelect') theSelect: SelectComponent;
  loading = false;

  constructor(
  	private fb: FormBuilder,
  	private service: ApplicationService,
    private router: Router,
    private message: MessageService
	) {
    // S: mock
    // const application = {...appl};
    // this.params = application;
  }

  ngOnInit() {
    this.loading = true;
    const application = this.service.applicationMixin();
    const queryParams = this.service.getRouterParams(queryParams => {
      this.path = queryParams.path;
      this.type = queryParams.type;
    });
    this.path = queryParams.path;
    this.type = queryParams.type;

    this.theSelect.registerOnChange(this.filterChange.bind(this));

    this.service.getProductsByCategory(this.path)
      .subscribe(res => {
        this.options = [].concat(res);
        this.theSelect.writeValue(this.options[0]);
        this.myForm.controls['product'].setValue(this.options[0]);
        this.loading = false;
      });

    this.myForm = this.fb.group({
      'adminId': [application.adminId, Validators.required], // 用户名
      'adminName': [application.adminName, Validators.required], // 姓名
      'adminCellphone': [
        application.adminCellphone,
        Validators.compose([
          Validators.required,
          Validators.pattern(patterns.phone)
        ])
      ],  // 手机

      'tenantName': [application.tenantName, Validators.required],  // 租户名称
      'projectName': [application.projectName, Validators.required],  // 项目名称
      'projectDescription': [application.projectDescription, Validators.required],  // 项目描述
      'applyDescription': [application.applyDescription, Validators.required],  // 申请描述

      'product': [application.product, Validators.required],  // 应用版本

      'networkType': ['SHARED', Validators.required],  // 网络类型 ['PRIVATE', 'SHARED']

      'instanceName': [application.instanceName, Validators.required],  // 实例名称
      'instanceDescription': [application.instanceDescription],  // 实例描述

      'haOn': ['true', Validators.required],  // 组件高可用 boolean
      'visibility': ['TENANT', Validators.required],  // 可见性['TENANT', 'PROJECT']
    });
  }

  verifyName($event) {
    const name = $event.target.value;
    if (name === '') {
      return ;
    }
    this.loading = true;
    this.service.checkIfExist(name)
      .subscribe(res => {
        if (!!res.existed) {
          $event.target.value = '';
          this.message.error('用户名重名,请重新输入');
        }
        this.loading = false;
      }, err => {
      });
  }

  onSubmit(val) {
    const params = {...val};
  	this.service.applicationMixin(params);
    this.router.navigate(
      [`/application/configuration`],
      { queryParams: {path: this.path, type: this.type} }
    ).then(_ => _ );
  }

  filterChange($event) {
  	console.log('filterChange', $event);
    this.myForm.controls['product'].setValue($event);
  }
}
