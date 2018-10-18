import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Observable }         from 'rxjs';
import { map }                  from 'rxjs/operators';
import 'rxjs/add/observable/combineLatest';
import { filter } from 'rxjs/operators';

import { ApplicationService } from './application.service';

@Component({
  selector: 'tdc-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.sass']
})
export class ApplicationComponent implements OnInit {

  path;
  type;
  options: any[];

  constructor(
  	private router: Router,
  	private route: ActivatedRoute,
    private service: ApplicationService
  ) { }

  ngOnInit() {
    const queryParams = this.service.getRouterParams(queryParams => {
      this.path = queryParams.path;
      this.type = queryParams.type;
    });
    this.path = queryParams.path;
    this.type = queryParams.type;

    this.options = [
      {path: 'data-warehouse', label: '数据仓库'},
      {path: 'data-mart', label: '数据集市'},
      {path: 'realtime-computation', label: '实时计算'},
      {path: 'info-retrieval', label: '搜索引擎'},
      {path: 'deep-learning', label: '人工智能'},
      {path: 'relational-database', label: '关系数据库'}
    ];
  }

  goBack() {
  	window.history.back();
  }

  selectApplicationType(option) {
    this.router.navigate(['/' + option.path, {path: option.path, label: option.label}]);
  }

}
