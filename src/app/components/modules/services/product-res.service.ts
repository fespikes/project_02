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
        selected: true,
      },
      {
        name: 'advantage',
        alias: 'MODULES.FUNCTION_ADVANTAGE',
      },
    ];

    return tabItems;
  }

  getModuleTree(): any[] {

    const moduleTree = [{
      id: 'platformService',
      name: 'MODULES.PLATFORM_SERVICE',
      children: [
        {
          id: 'inceptor',
          name: 'Inceptor',
          parent: 'platformService',
          url: 'platform/inceptor',
          icon: 'component-inceptor',
        }, {
          id: 'slipstream',
          name: 'Slipstream',
          parent: 'platformService',
          url: 'platform/slipstream',
          icon: 'component-slipstream',
        }, {
          id: 'discover',
          name: 'Discover',
          parent: 'platformService',
          url: 'platform/discover',
          icon: 'component-discover',
        }, {
          id: 'hyperbase',
          name: 'Hyperbase',
          parent: 'platformService',
          url: 'platform/hyperbase',
          icon: 'component-hyperbase',
        }, {
          id: 'search',
          name: 'Search',
          parent: 'platformService',
          url: 'platform/search',
          icon: 'component-search',
        }, {
          id: 'sophon',
          name: 'Sophon',
          parent: 'platformService',
          url: 'platform/sophon',
          icon: 'component-sophon',
        }, {
          id: 'redis',
          name: 'Redis',
          parent: 'platformService',
          url: 'platform/redis',
          icon: 'component-redis',
        }, {
          id: 'kafka',
          name: 'Kafka',
          parent: 'platformService',
          url: 'platform/kafka',
          icon: 'component-kafka',
        }, {
          id: 'guardian',
          name: 'Guardian',
          parent: 'platformService',
          url: 'platform/guardian',
          icon: 'component-guardian',
        }, {
          id: 'hadoop',
          name: 'Hadoop',
          parent: 'platformService',
          url: 'platform/hadoop',
          icon: 'component-hadoop',
        },
      ],
    }, {
      id: 'developTool',
      name: 'MODULES.DEVELOP_TOOL',
      children: [
        {
          id: 'pilot',
          name: 'Pilot',
          parent: 'developTool',
          url: 'tool/pilot',
          icon: 'component-pilot',
        }, {
          id: 'workflow',
          name: 'Workflow',
          parent: 'developTool',
          url: 'tool/workflow',
          icon: 'component-workflow',
        }, {
          id: 'transporter',
          name: 'Transporter',
          parent: 'developTool',
          url: 'tool/transporter',
          icon: 'component-transporter',
        }, {
          id: 'governor',
          name: 'Governor',
          parent: 'developTool',
          url: 'tool/governor',
          icon: 'component-governor',
        }, {
          id: 'rubik',
          name: 'Rubik',
          parent: 'developTool',
          url: 'tool/rubik',
          icon: 'component-rubik',
        }, {
          id: 'milano',
          name: 'Milano',
          parent: 'developTool',
          url: 'tool/milano',
          icon: 'component-milano',
        }, {
          id: 'zeppelin',
          name: 'Zeppelin',
          parent: 'developTool',
          url: 'tool/zeppelin',
          icon: 'component-zeppelin',
        }, {
          id: 'midas',
          name: 'Midas',
          parent: 'developTool',
          url: 'tool/midas',
          icon: 'component-midas',
        }, {
          id: 'terminal',
          name: 'Terminal',
          parent: 'developTool',
          url: 'tool/terminal',
          icon: 'component-terminal',
        },
      ],
    }, {
      id: 'systemService',
      name: 'MODULES.SYSTEM_SERVICE',
      children: [
        {
          id: 'prometheus',
          name: 'Prometheus',
          parent: 'systemService',
          url: 'system/prometheus',
          icon: 'component-prometheus',
        }, {
          id: 'txsql',
          name: 'TxSQL',
          parent: 'systemService',
          url: 'system/txsql',
          icon: 'component-txsql',
        }, {
          id: 'tos',
          name: 'TOS',
          parent: 'systemService',
          url: 'system/tos',
          icon: 'component-tos',
        },
      ],
    }];

    return moduleTree;
  }
}
