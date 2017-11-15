import { Injectable } from '@angular/core';

import { DocumentSearchService } from '../../documents-support/documents-search/documents-search.service';

@Injectable()
export class ProductUtilService {
  constructor(
    private documentSearchService: DocumentSearchService
  ) {

  }

  getModuleType(url): string {
    let array = url.split('/');
    let type = array[array.length - 2];
    return type;
  }

  refreshTreeState(moduleTree, moduleId): any[] {
    const node = this.documentSearchService.findTreeNode(
      moduleId, moduleTree) as any;
    const parentNode = this.documentSearchService.findTreeNode(
      node.parent, moduleTree) as any;
    parentNode.expanded = true;
    node.selected = true;
    return moduleTree;
  }

  anchorTabContent(anchorId): void {
    const ele = document.getElementById(anchorId);
    const offsetLeft = ele.offsetLeft;
    const offsetTop = ele.offsetTop;
    scrollTo(offsetLeft, offsetTop);
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
          url: 'product/inceptor/introduce',
          icon: 'component-inceptor'
        }, {
          id: 'slipstream',
          name: 'Slipstream',
          parent: 'cloudProductComponent',
          url: 'product/slipstream/introduce',
          icon: 'component-slipstream'
        }, {
          id: 'discover',
          name: 'Discover',
          parent: 'cloudProductComponent',
          url: 'product/discover/introduce',
          icon: 'component-discover'
        }, {
          id: 'hyperbase',
          name: 'Hyperbase',
          parent: 'cloudProductComponent',
          url: 'product/hyperbase/introduce',
          icon: 'component-hyperbase'
        }, {
          id: 'search',
          name: 'Search',
          parent: 'cloudProductComponent',
          url: 'product/search/introduce',
          icon: 'component-search'
        }, {
          id: 'sophon',
          name: 'Sophon',
          parent: 'cloudProductComponent',
          url: 'product/sophon/introduce',
          icon: 'component-sophon'
        }, {
          id: 'guardian',
          name: 'Guardian',
          parent: 'cloudProductComponent',
          url: 'product/guardian/introduce',
          icon: 'component-guardian'
        }, {
          id: 'hadoop',
          name: 'Hadoop',
          parent: 'cloudProductComponent',
          url: 'product/hadoop/introduce',
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
          url: 'suite/pilot/introduce',
          icon: 'component-pilot'
        }, {
          id: 'workflow',
          name: 'Workflow',
          parent: 'TDHDevelopSuite',
          url: 'suite/workflow/introduce',
          icon: 'component-workflow'
        }, {
          id: 'transporter',
          name: 'Transporter',
          parent: 'TDHDevelopSuite',
          url: 'suite/transporter/introduce',
          icon: 'component-transporter'
        }, {
          id: 'governor',
          name: 'Governor',
          parent: 'TDHDevelopSuite',
          url: 'suite/governor/introduce',
          icon: 'component-governor'
        }, {
          id: 'rubik',
          name: 'Rubik',
          parent: 'TDHDevelopSuite',
          url: 'suite/rubik/introduce',
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
          url: 'tool/waterdrop/introduce',
          icon: 'component-waterdrop'
        }, {
          id: 'txsql',
          name: 'TxSQL',
          parent: 'operationDevelopTool',
          url: 'tool/txsql/introduce',
          icon: 'component-txsql'
        }, {
          id: 'milano',
          name: 'Milano',
          parent: 'operationDevelopTool',
          url: 'tool/milano/introduce',
          icon: 'component-milano'
        }, {
          id: 'prometheus',
          name: 'Prometheus',
          parent: 'operationDevelopTool',
          url: 'tool/prometheus/introduce',
          icon: 'component-prometheus'
        }, {
          id: 'kafka',
          name: 'Kafka',
          parent: 'operationDevelopTool',
          url: 'tool/kafka/introduce',
          icon: 'component-kafka'
        }, {
          id: 'zeppelin',
          name: 'Zeppelin',
          parent: 'operationDevelopTool',
          url: 'tool/zeppelin/introduce',
          icon: 'component-zeppelin'
        }, {
          id: 'midas',
          name: 'Midas',
          parent: 'operationDevelopTool',
          url: 'tool/midas/introduce',
          icon: 'component-midas'
        }, {
          id: 'terminal',
          name: 'Terminal',
          parent: 'operationDevelopTool',
          url: 'tool/terminal/introduce',
          icon: 'component-terminal'
        }, {
          id: 'redis',
          name: 'Redis',
          parent: 'operationDevelopTool',
          url: 'tool/redis/introduce',
          icon: 'component-redis'
        },
      ]
    }];

    return moduleTree;
  }
}
