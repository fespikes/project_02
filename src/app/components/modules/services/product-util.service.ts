import { Injectable } from '@angular/core';

@Injectable()
export class ProductUtilService {
  constructor() {

  }

  getModuleType(url): string {
    let array = url.split('/');
    let type = array[array.length - 2];
    return type;
  }

  refreshListState(list, module): any {
    let attrList = Object.keys(list);
    attrList.map(attr => {
      list[attr].map(item => {
        if(item.name === module) {
          item.selected = true;
        }else {
          item.selected = false;
        }
      });
    });
    return list;
  }

  getModuleTree(): any {

    let moduleTypes = [{
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

    let moduleItems = {
      'cloudProductComponent': [{
        'name': 'inceptor',
        'actionAlias': 'Inceptor',
        'url': 'product/inceptor/introduce',
        'icon': 'component-inceptor'
      }, {
        'name': 'slipstream',
        'actionAlias': 'Slipstream',
        'url': 'product/slipstream/introduce',
        'icon': 'component-slipstream'
      }, {
        'name': 'discover',
        'actionAlias': 'Discover',
        'url': 'product/discover/introduce',
        'icon': 'component-discover'
      }, {
        'name': 'hyperbase',
        'actionAlias': 'Hyperbase',
        'url': 'product/hyperbase/introduce',
        'icon': 'component-hyperbase'
      }, {
        'name': 'search',
        'actionAlias': 'Search',
        'url': 'product/search/introduce',
        'icon': 'component-search'
      }, {
        'name': 'sophon',
        'actionAlias': 'Sophon',
        'url': 'product/sophon/introduce',
        'icon': 'component-sophon'
      }, {
        'name': 'guardian',
        'actionAlias': 'Guardian',
        'url': 'product/guardian/introduce',
        'icon': 'component-guardian'
      }, {
        'name': 'hadoop',
        'actionAlias': 'Hadoop',
        'url': 'product/hadoop/introduce',
        'icon': 'component-hadoop'
      },
      ],
      'TDHDevelopSuite': [{
        'name': 'pilot',
        'actionAlias': 'Pilot',
        'url': 'suite/pilot/introduce',
        'icon': 'component-pilot'
      }, {
        'name': 'workflow',
        'actionAlias': 'Workflow',
        'url': 'suite/workflow/introduce',
        'icon': 'component-workflow'
      }, {
        'name': 'transporter',
        'actionAlias': 'Transporter',
        'url': 'suite/transporter/introduce',
        'icon': 'component-transporter'
      }, {
        'name': 'governor',
        'actionAlias': 'Governor',
        'url': 'suite/governor/introduce',
        'icon': 'component-governor'
      }, {
        'name': 'rubik',
        'actionAlias': 'Rubik',
        'url': 'suite/rubik/introduce',
        'icon': 'component-rubik'
      },
      ],
      'operationDevelopTool': [{
        'name': 'waterdrop',
        'actionAlias': 'Waterdrop',
        'url': 'tool/waterdrop/introduce',
        'icon': 'component-waterdrop'
      }, {
        'name': 'txsql',
        'actionAlias': 'TxSQL',
        'url': 'tool/txsql/introduce',
        'icon': 'component-txsql'
      }, {
        'name': 'prometheus',
        'actionAlias': 'Prometheus',
        'url': 'tool/prometheus/introduce',
        'icon': 'component-prometheus'
      }, {
        'name': 'kafka',
        'actionAlias': 'Kafka',
        'url': 'tool/kafka/introduce',
        'icon': 'component-kafka'
      }, {
        'name': 'zeppelin',
        'actionAlias': 'Zeppelin',
        'url': 'tool/zeppelin/introduce',
        'icon': 'component-zeppelin'
      }, {
        'name': 'midas',
        'actionAlias': 'Midas',
        'url': 'tool/midas/introduce',
        'icon': 'component-midas'
      }, {
        'name': 'terminal',
        'actionAlias': 'Terminal',
        'url': 'tool/terminal/introduce',
        'icon': 'component-terminal'
      }, {
        'name': 'redis',
        'actionAlias': 'Redis',
        'url': 'tool/redis/introduce',
        'icon': 'component-redis'
      },
      ],
    };

    return {
      types: moduleTypes,
      items: moduleItems
    }
  }
}
