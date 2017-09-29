import { Injectable } from '@angular/core';

@Injectable()
export class DataMartService {

  constructor() { }

  getProductDetails() {
  	return {
  		banner: {
  			h3: '数据集市',
        h4: '',
  			description: '数据集市是面向部门级业务，特定的应用主题，用星型或者雪花模型组织构建数据。TDH-DM可以用于构建企业的数据集市，对接数据分析业务，提供包括交互式分析、Cube、报表、调度工具，实现自动化的报表应用构建。',
  			advImage: ''
  		},
  		tabs: [
        {
          text: '产品功能',
          link: './functionalities'
        },
        {
          text: '产品优势',
          link: './advantages'
        },
        {
          text: '应用场景',
          link: './scenarios/multi-tenancy-platform'
        },
        {
          text: '组件介绍',
          link: './component-intro/tdh-platform-products'
        },
        /*{
          text: '费用说明',
          link: './expense-explanation'
        }*/
      ],
      functionalities: {
        title: '产品功能',
        diagram: '/assets/images/diagram/data-mart.png',
        content: [
          {
            title: '强大的SQL支持', 
            text: '完整支持SQL标准2003，兼容包括Oracle、DB2、Teradata多种方言，以及存储过程和事务语义。同时其内部引擎提供语句深度优化能力，确保业务极速运行。'
          },
          {
            title: '异构数据互通',
            text: '轻松实现异构数据互通，无需等待迁移，就可以整合并处理来源于不同系统的数据，是实现企业级数据仓库和数据湖的坚实基础。'
          },
          {
            title: '混合负载支持',
            text: '实现灵活的SLA Scheduler，按照用户或负载提供SLA，采用更细粒度的调度算法，动态适配队列拓扑。从而根据当前环境的资源情况，智能的进行调度，有效应对多租户下的资源管理场景。'
          },
          {
            title: '分布式事务保障',
            text: '提供可序列化快照隔离，保障事务在分布式系统下正常运转，高吞吐的事务机制，确保数据强一致，高可用的事务保证。'
          },
          {
            title: '非结构化数据处理',
            text: '提供对非结构化或者半结构化数据的存储、检索、分析能力，具有影像分析、文本数据挖掘分析等功能，利用种类更广泛的数据资源实现信息的发现与挖掘。'
          }
        ]
      },
      advantages: {
        title: '产品优势',
        content: [
          {
            title: '轻松打造云上大数据',
            text: 'TDH-DW底层使用Transwarp Operating System，实现集群资源管理、容器化部署，可以同IaaS层完美整合。同时TDH-DW通过采用容器技术，构建出资源组织与调度完善的多租户体系，从而更好的为企业提供云上的大数据服务。'
          },
          {
            title: '卓越的数据处理能力',
            text: 'TDH-DW采用分布式集群架构，提供超强的并行计算和线性可扩展能力。具有PB级数据处理能力，提供强大的批处理支持，无需预先建模即可进行秒级交互分析。因而拥有卓越的主题加工能力，支持企业更多的业务创新。'
          },
          {
            title: '开发效率全面提升',
            text: '内置全套的数仓开发工具Transwarp Studio，支持数据整合、工作流调度、数据治理以及报表工具等数据业务，提供可视化工具进行数据特征分析，探索数据间关系。大大提高数据仓库的开发效率，提高项目的成功率。'
          },
          {
            title: '多种数据类型的支持',
            text: '支持多种类型的数据，提供大规模数据下高效灵活的存储和分析能力。满足对于海量非结构化数据的分析和存储需求，以及各类数据分析需求的衍生与拓展。'
          },
          {
            title: '便捷的迁移',
            text: '对于大量存量SQL与存储过程无需过多改动就可以迁移至新的数据仓库，同时轻松实现报表等多种工具同新平台的对接，从各个方面简化并加速数据仓库的平滑迁移。'
          },
          {
            title: '可靠的数据与服务',
            text: '提供双机热备。保障数据可靠，服务可用。能够实现即时灾难恢复，通过故障转移保障系统随时稳定可用，维护业务的连续性。'
          },
          {
            title: '稳健的安全保护',
            text: '受到Guardian的全面保护，为租户提供可靠地认证机制，防范安全漏洞和攻击，实现资源管理和行级列级的权限控制，在云环境下保护用户隐私和信息安全。'
          }
        ]
      },
      scenarios: {
        title: '应用场景',
        tabs: [
          {
            text: '企业级多租户大数据平台',
            link: './multi-tenancy-platform'
          },
          {
            text: '企业级数据仓库建设',
            link: './build-data-warehouse'
          },
          {
            text: '企业级数据湖',
            link: './data-lake'
          },
          {
            text: '企业级数据治理平台',
            link: './data-governance-platform'
          },
          /*{
            text: '费用说明',
            link: './expense-explanation'
          }*/
        ]
      },
      componentIntro: {
        title: '组件介绍',
        tabs: [
          {
            text: 'TDH平台产品',
            link: './tdh-platform-products'
          },
          {
            text: 'TDH开发套件',
            link: './tdh-dev-kits'
          },
          {
            text: '运维和开发工具',
            link: './operation-dev-tools'
          }
        ]
      },
      
  	}
  }

}
