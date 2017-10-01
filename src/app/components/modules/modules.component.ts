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
        'icon': 'component-inceptor',
        'selected': true,
      }, {
        'name': 'slipstream',
        'actionAlias': 'Slipstream',
        'url': 'product/slipstream',
        'icon': 'component-slipstream'
      }, {
        'name': 'discover',
        'actionAlias': 'Discover',
        'url': 'product/discover',
        'icon': 'component-discover'
      }, {
        'name': 'hyperbase',
        'actionAlias': 'Hyperbase',
        'url': 'product/hyperbase',
        'icon': 'component-hyperbase'
      }, {
        'name': 'search',
        'actionAlias': 'Search',
        'url': 'product/search',
        'icon': 'component-search'
      }, {
        'name': 'sophon',
        'actionAlias': 'Sophon',
        'url': 'product/sophon',
        'icon': 'component-sophon'
      }, {
        'name': 'guardian',
        'actionAlias': 'Guardian',
        'url': 'product/guardian',
        'icon': 'component-guardian'
      }, {
        'name': 'hadoop',
        'actionAlias': 'Hadoop',
        'url': 'product/hadoop',
        'icon': 'component-hadoop'
      },
    ],
    'TDHDevelopSuite': [{
        'name': 'pilot',
        'actionAlias': 'Pilot',
        'url': 'suite/pilot',
        'icon': 'component-pilot'
      }, {
        'name': 'workflow',
        'actionAlias': 'Workflow',
        'url': 'suite/workflow',
        'icon': 'component-workflow'
      }, {
        'name': 'transporter',
        'actionAlias': 'Transporter',
        'url': 'suite/transporter',
        'icon': 'component-transporter'
      }, {
        'name': 'governor',
        'actionAlias': 'Governor',
        'url': 'suite/governor',
        'icon': 'component-governor'
      }, {
        'name': 'rubik',
        'actionAlias': 'Rubik',
        'url': 'suite/rubik',
        'icon': 'component-rubik'
      },
    ],
    'operationDevelopTool': [{
        'name': 'waterdrop',
        'actionAlias': 'Waterdrop',
        'url': 'tool/waterdrop',
        'icon': 'component-waterdrop'
      }, {
        'name': 'txsql',
        'actionAlias': 'TxSQL',
        'url': 'tool/txsql',
        'icon': 'component-txsql'
      }, {
        'name': 'prometheus',
        'actionAlias': 'Prometheus',
        'url': 'tool/prometheus',
        'icon': 'component-prometheus'
      }, {
        'name': 'kafka',
        'actionAlias': 'Kafka',
        'url': 'tool/kafka',
        'icon': 'component-kafka'
      }, {
        'name': 'zeppelin',
        'actionAlias': 'Zeppelin',
        'url': 'tool/zeppelin',
        'icon': 'component-zeppelin'
      }, {
        'name': 'midas',
        'actionAlias': 'Midas',
        'url': 'tool/midas',
        'icon': 'component-midas'
      }, {
        'name': 'terminal',
        'actionAlias': 'Terminal',
        'url': 'tool/terminal',
        'icon': 'component-terminal'
      }, {
        'name': 'redis',
        'actionAlias': 'Redis',
        'url': 'tool/redis',
        'icon': 'component-redis'
      },
    ],
  };
  constructor() { }

  ngOnInit() {
  }

  onModuleChange(module) {
    console.log('module=', module);
  }
}
