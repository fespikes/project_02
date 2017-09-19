import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'tdc-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.sass'],
})
export class ModulesComponent implements OnInit {

  permissionType = [{
    'alias': '云产品组件',
    'value': 'cloudProductComponent',
  }, {
    'alias': 'TDH开发套件',
    'value': 'TDHDevelopSuite',
  }, {
    'alias': '运维和开发工具',
    'value': 'operationDevelopTool',
  }];
  groupedPermissions = {
    'cloudProductComponent': [{
        'actionAlias': 'inceptor',
        'url': 'product/inceptor',
      }, {
        'actionAlias': 'Slipsteam',
        'url': 'product/slipsteam',
      }, {
        'actionAlias': 'Discover',
        'url': 'product/discover',
      }, {
        'actionAlias': 'Hyperbase',
        'url': 'product/hyperbase',
      }, {
        'actionAlias': 'Search',
        'url': 'product/search',
      }, {
        'actionAlias': 'Sophon',
        'url': 'product/sophon',
      }, {
        'actionAlias': 'Guardian',
        'url': 'product/guardian',
      }, {
        'actionAlias': 'Hadoop',
        'url': 'product/hadoop',
      },
    ],
    'TDHDevelopSuite': [{
        'actionAlias': 'Pilot',
      }, {
        'actionAlias': 'Workflow',
      }, {
        'actionAlias': 'Transporter',
      }, {
        'actionAlias': 'Governor',
      }, {
        'actionAlias': 'Rubik',
      },
    ],
    'operationDevelopTool': [{
        'actionAlias': 'Waterdrop',
      }, {
        'actionAlias': 'TxSQL',
      }, {
        'actionAlias': 'ELK',
      }, {
        'actionAlias': 'Prometheus',
      }, {
      'actionAlias': 'Kafka',
      }, {
        'actionAlias': 'Zeppelin',
      }, {
        'actionAlias': 'Midas',
      }, {
        'actionAlias': 'Terminal',
      }, {
        'actionAlias': 'Redis',
      },
    ],
  };
  backUrl = '../';
  constructor() { }

  ngOnInit() {
  }

  onTabChange() {

  }

  onPermChange(perm) {
    console.log('perm=', perm);
  }
}
