import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'tdc-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.sass'],
})
export class ModulesComponent implements OnInit {
  backUrl = '../';

  moduleTypes = [{
    'alias': 'MODULES.TDH_PLATFORM_PRODUCT',
    'value': 'cloudProductComponent',
    'expanded': true
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
        'selected': true,
      }, {
        'name': 'slipstream',
        'actionAlias': 'Slipstream',
        'url': 'product/slipstream',
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
        'name': 'pilot',
        'actionAlias': 'Pilot',
        'url': 'suite/pilot'
      }, {
        'name': 'workflow',
        'actionAlias': 'Workflow',
        'url': 'suite/workflow'
      }, {
        'name': 'transporter',
        'actionAlias': 'Transporter',
        'url': 'suite/transporter'
      }, {
        'name': 'governor',
        'actionAlias': 'Governor',
        'url': 'suite/governor'
      }, {
        'name': 'rubik',
        'actionAlias': 'Rubik',
        'url': 'suite/rubik'
      },
    ],
    'operationDevelopTool': [{
        'name': 'waterdrop',
        'actionAlias': 'Waterdrop',
        'url': 'tool/waterdrop'
      }, {
        'name': 'txsql',
        'actionAlias': 'TxSQL',
        'url': 'tool/txsql'
      }, {
        'name': 'prometheus',
        'actionAlias': 'Prometheus',
        'url': 'tool/prometheus'
      }, {
        'name': 'kafka',
        'actionAlias': 'Kafka',
        'url': 'tool/kafka'
      }, {
        'name': 'zeppelin',
        'actionAlias': 'Zeppelin',
        'url': 'tool/zeppelin'
      }, {
        'name': 'midas',
        'actionAlias': 'Midas',
        'url': 'tool/midas'
      }, {
        'name': 'terminal',
        'actionAlias': 'Terminal',
        'url': 'tool/terminal'
      }, {
        'name': 'redis',
        'actionAlias': 'Redis',
        'url': 'tool/redis'
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
