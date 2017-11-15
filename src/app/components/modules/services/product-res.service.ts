import { Injectable } from '@angular/core';

@Injectable()
export class ProductResService {
  constructor() {

  }

  getModuleTabItems(): any[] {

    const tabItems = [
      {
        name: 'introduce',
        alias: 'MODULES.MODULE_INTRODUCE',
        selected: true
        //url: './introduce' //add sub router here
      },
      {
        name: 'advantage',
        alias: 'MODULES.FUNCTION_ADVANTAGE',
        //url: './advantage'
      }
    ];

    return tabItems;
  }

  getModuleTree(): any[] {

    const moduleTree = [{
      id: 'cloudProductComponent',
      name: 'MODULES.TDH_PLATFORM_PRODUCT',
      children: [
        {
          id: 'inceptor',
          name: 'Inceptor',
          parent: 'cloudProductComponent',
          url: 'product/inceptor',
          icon: 'component-inceptor'
        }, {
          id: 'slipstream',
          name: 'Slipstream',
          parent: 'cloudProductComponent',
          url: 'product/slipstream',
          icon: 'component-slipstream'
        }, {
          id: 'discover',
          name: 'Discover',
          parent: 'cloudProductComponent',
          url: 'product/discover',
          icon: 'component-discover'
        }, {
          id: 'hyperbase',
          name: 'Hyperbase',
          parent: 'cloudProductComponent',
          url: 'product/hyperbase',
          icon: 'component-hyperbase'
        }, {
          id: 'search',
          name: 'Search',
          parent: 'cloudProductComponent',
          url: 'product/search',
          icon: 'component-search'
        }, {
          id: 'sophon',
          name: 'Sophon',
          parent: 'cloudProductComponent',
          url: 'product/sophon',
          icon: 'component-sophon'
        }, {
          id: 'guardian',
          name: 'Guardian',
          parent: 'cloudProductComponent',
          url: 'product/guardian',
          icon: 'component-guardian'
        }, {
          id: 'hadoop',
          name: 'Hadoop',
          parent: 'cloudProductComponent',
          url: 'product/hadoop',
          icon: 'component-hadoop'
        },
      ]
    }, {
      id: 'TDHDevelopSuite',
      name: 'MODULES.TDH_DEVELOP_SUITE',
      children: [
        {
          id: 'pilot',
          name: 'Pilot',
          parent: 'TDHDevelopSuite',
          url: 'suite/pilot',
          icon: 'component-pilot'
        }, {
          id: 'workflow',
          name: 'Workflow',
          parent: 'TDHDevelopSuite',
          url: 'suite/workflow',
          icon: 'component-workflow'
        }, {
          id: 'transporter',
          name: 'Transporter',
          parent: 'TDHDevelopSuite',
          url: 'suite/transporter',
          icon: 'component-transporter'
        }, {
          id: 'governor',
          name: 'Governor',
          parent: 'TDHDevelopSuite',
          url: 'suite/governor',
          icon: 'component-governor'
        }, {
          id: 'rubik',
          name: 'Rubik',
          parent: 'TDHDevelopSuite',
          url: 'suite/rubik',
          icon: 'component-rubik'
        },
      ],
    }, {
      id: 'operationDevelopTool',
      name: 'MODULES.OPERATION_ADD_DEVELOP_TOOL',
      children: [
        {
          id: 'waterdrop',
          name: 'Waterdrop',
          parent: 'operationDevelopTool',
          url: 'tool/waterdrop',
          icon: 'component-waterdrop'
        }, {
          id: 'txsql',
          name: 'TxSQL',
          parent: 'operationDevelopTool',
          url: 'tool/txsql',
          icon: 'component-txsql'
        }, {
          id: 'milano',
          name: 'Milano',
          parent: 'operationDevelopTool',
          url: 'tool/milano',
          icon: 'component-milano'
        }, {
          id: 'prometheus',
          name: 'Prometheus',
          parent: 'operationDevelopTool',
          url: 'tool/prometheus',
          icon: 'component-prometheus'
        }, {
          id: 'kafka',
          name: 'Kafka',
          parent: 'operationDevelopTool',
          url: 'tool/kafka',
          icon: 'component-kafka'
        }, {
          id: 'zeppelin',
          name: 'Zeppelin',
          parent: 'operationDevelopTool',
          url: 'tool/zeppelin',
          icon: 'component-zeppelin'
        }, {
          id: 'midas',
          name: 'Midas',
          parent: 'operationDevelopTool',
          url: 'tool/midas',
          icon: 'component-midas'
        }, {
          id: 'terminal',
          name: 'Terminal',
          parent: 'operationDevelopTool',
          url: 'tool/terminal',
          icon: 'component-terminal'
        }, {
          id: 'redis',
          name: 'Redis',
          parent: 'operationDevelopTool',
          url: 'tool/redis',
          icon: 'component-redis'
        },
      ]
    }];

    return moduleTree;
  }
}
