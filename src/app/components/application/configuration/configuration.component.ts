import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { ApplicationService } from '../application.service';
import { Application } from '../application.model';
import { MessageService } from 'app/tui';

// import { application } from '../essential/application.mock';

@Component({
  selector: 'tdc-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.sass']
})
export class ConfigurationComponent implements OnInit {
  myForm: FormGroup;
  loading = false;
  path: string;
  type: string;
  templates: any[] = [];
  resources: any[];
  application: Application = new Application();
  valid = false;
  disableLast = false;

  constructor(
  	private fb: FormBuilder,
    private service: ApplicationService,
    private message: MessageService,
    private router: Router
  ) {}

  ngOnInit() {
    const me = this;
    this.application = this.service.applicationMixin();
    // this.application = {...application};
    const queryParams = this.service.getRouterParams(queryParams => {
      this.path = queryParams.path;
      this.type = queryParams.type;
    });
    this.path = queryParams.path;
    this.type = queryParams.type;

    const group = {
      'templateId': [this.application.templateId, Validators.required], // 部署模板
      'nodeNum':  // 计算执行单元数量
        [
          this.application.nodeNum,
          Validators.compose([
            Validators.required,
            function(control: FormControl) {
              return me.validNodeNum.bind(me)(control);
            }
          ])
        ]
    };
    if (!this.application.product['hasNodeNum']) {
      delete group['nodeNum'];
    }

    this.myForm = this.fb.group(group);
    this.loading = true;
    this.service.getTemplatesByUUID(this.application.product.uuid)
      .subscribe(res => {
        this.templates = res.filter(item => item.name!=='演示');
        this.application.templateId = this.templates[0].id;
        this.getResourceConfiguration();
      });
  }

  validNodeNum(control: FormControl): { [s: string]: boolean } {
    if (+control.value >=3 ) {
      this.valid = true;
      return {invalidNum: false};
    } else {
      this.valid = false;
      return {invalidNum: true};
    }
  }

  goBack() {
    window.history.back();
  }

  selectTemplate($event, id) {
    document.querySelector('li.current').className = '';
    $event.currentTarget.className = 'current';
    this.application.templateId = id;
    this.getResourceConfiguration();
  }

  setNodeNum($event) {
    this.application.nodeNum = +$event.currentTarget.value;
    if ($event.currentTarget.value === '' || +$event.currentTarget.value <3) {
      return ;
    }
    if ($event.currentTarget.value>=3) {
      this.getResourceConfiguration();
    }
  }

  getResourceConfiguration() {
    // S: mock
    // this.resources = [];
    // const res = {"cpu":{"unit":"core","value":87.616},"memory":{"unit":"G","value":160.0},"storage":{"unit":"T","value":0.0},"network":{"unit":"","value":15}};
    // Object.getOwnPropertyNames(res)
    //   .forEach(item => {
    //     this.resources.push({
    //       name: item,
    //       value: res[item]
    //     });
    //   });
    // E: mock
    this.loading = true;
    if (this.application.nodeNum === undefined) {
      return ;
    }

    const param = {
      haOn: (this.application.haOn + '') === 'true' ? true : false,
      nodeNum: this.application.nodeNum,
      networkType: this.application.networkType
    };
    this.resources = [];
    this.service.getResourceConfig(this.application.templateId, param)
      .subscribe(res => {
        Object.getOwnPropertyNames(res)
          .forEach(item => {
            const current = res[item];
            this.resources.push({
              alias: current['alias'],
              value: current['value'],
              unit: current['unit']
            });
          });
        this.valid = true;
        this.loading = false;
      });
  }

  onSubmit(val) {
    this.loading = true;

    const requestParams = {...this.application};
    this.service.applicationMixin(requestParams);
    this.service.projectApply(requestParams)
      .subscribe(res => {
        this.message.success(res.message);
        this.valid = false;
        this.loading = false;
        this.disableLast = true;
        setTimeout(_ => {
          this.router.navigate([`/products/${this.path}`]).then(_ => _ );
        }, 2000);
      }, error => {
        this.loading = false;
        this.message.error(error.code + ' ' + error.message);
      });
  }

}
