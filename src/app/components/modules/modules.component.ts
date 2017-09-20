import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'tdc-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.sass'],
})
export class ModulesComponent implements OnInit {

  moduleTypes = [{
    'alias': 'MODULES.TDH_PLATFORM_PRODUCT',
    'value': 'cloudProductComponent',
  }, {
    'alias': 'MODULES.TDH_DEVELOP_SUITE',
    'value': 'TDHDevelopSuite',
  }, {
    'alias': 'MODULES.OPERATION_ADD_DEVELOP_TOOL',
    'value': 'operationDevelopTool',
  }];
  moduleItems = {
    'cloudProductComponent': [{
        'name': 'inceptor',
        'actionAlias': 'Inceptor',
        'url': 'product/inceptor',
      }, {
        'name': 'slipsteam',
        'actionAlias': 'Slipsteam',
        'url': 'product/slipsteam',
      }, {
        'name': 'discover',
        'actionAlias': 'Discover',
        'url': 'product/discover',
      }, {
        'name': 'hyperbase',
        'actionAlias': 'Hyperbase',
        'url': 'product/hyperbase',
      }, {
        'name': 'search',
        'actionAlias': 'Search',
        'url': 'product/search',
      }, {
        'name': 'sophon',
        'actionAlias': 'Sophon',
        'url': 'product/sophon',
      }, {
        'name': 'guardian',
        'actionAlias': 'Guardian',
        'url': 'product/guardian',
      }, {
        'name': 'hadoop',
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

  onModuleChange(module) {
    console.log('module=', module);
  }
}
