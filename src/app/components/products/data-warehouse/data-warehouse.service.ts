import { Injectable } from '@angular/core';

@Injectable()
export class DataWarehouseService {

  constructor() { }

  getProductDetails() {
  	return {
  		banner: {
  			h3: '数据仓库',
        h4: '',
  			description: '数据仓库是数据中心库，集中整合最新以及历史数据，按照不同主题组织信息，是打造商业智能的核心。TDH-DW可用于构建一站式数据仓库服务，提供包括分析数据库、数据整合、模型加工等重要功能，同时提供对于查询速度、并发度、扩展性的保障，是高效的数据掘金利器。',
  			advImage: '/assets/images/products/data-warehouse.png'
  		},
  		tabs: [
        {
          text: '产品功能',
          link: './functionalities',
          href: 'data-warehouse-functionalities'
        },
        {
          text: '产品优势',
          link: './advantages',
          href: 'data-warehouse-advantages'
        },
        {
          text: '应用场景',
          link: './scenarios',
          href: 'data-warehouse-scenarios'
        },
        {
          text: '组件介绍',
          link: './component-intro',
          href: 'data-warehouse-component-intro'
        },
        /*{
          text: '费用说明',
          link: './expense-explanation'
        }*/
      ],
      functionalities: {
        title: '产品功能',
        id: 'data-warehouse-functionalities',
        diagram: '/assets/images/diagram/data-warehouse.png',
        //TODO: image style abstraction
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
        id: 'data-warehouse-advantages',
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
        id: 'data-warehouse-scenarios',
        tabs: [
          {
            class: '企业级多租户大数据平台台',
            text: '打造一体化的大数据平台，满足多租户场景下的应用需求，实现租户权限和资源管理，进行表和资源的访问权限控制，保障资源之间的共享与隔离，提供合理高效的作业调度。使得从数据导入到报表生成的整个批处理分析过程，融会贯通，成为一体。',
            // link: '/products/data-warehouse/multi-tenancy-platform',
            image: {
              src: '/assets/images/products/scenarios/data-warehouse/multi-tenancy-platform.png',
              width: '645',//810*394
              // width:700
              // height: '340.5'
            }
          },
          {
            class: '企业级数据仓库建设',
            text: '可以用于实现高效的企业数仓建设。在实现数据仓库的完整流程中，您可以利用TDH-DW中整合的高效工具支持，加速企业数仓的落地实现。确保数据迁移的效率，轻松攻克迁移过程中的技术难题。',
            // link: '/products/data-warehouse/build-data-warehouse',
            image: {
              src: '/assets/images/products/scenarios/data-warehouse/build-data-warehouse.png',
              width: '645',  //768*366
              // height: '334'
            }
          },
          {
            class: '企业级数据湖',
            text: '数据湖将打通各种不同系统中的数据的边界，通过统一的接口访问多种数据源。同数据仓库相比，数据湖将弱化人为选择和处理对数据的影响，有助于发现跨越来源的数据之间的关系与潜在价值，发现在传统数据仓库中容易被遗漏的信息。',
            // link: '/products/data-warehouse/data-lake',
            image: {
              src: '/assets/images/products/scenarios/data-warehouse/data-lake.png',
              width: '645',//741*387
              // height: '366'
            }
          },
          {
            class: '企业级数据治理平台',
            text: '搭建可靠的数据治理平台，管理与追踪数据关系，提供方便可用的操作界面，管理并搜索目标数据元信息。将帮助您严格控制企业内部数据质量，提高数据分析准确性，提高商业决策的价值与可信度。',
            // link: '/products/data-warehouse/data-governance-platform'
          }
        ]
      },
      componentIntro: {
        title: '组件介绍',
        id: 'data-warehouse-component-intro',
        tabs: [
          {
            class: 'TDH平台产品',
            // link: './tdh-platform-products'
            ctn: [{
              title: 'Inceptor',
              text: 'Inceptor是一款用于批量处理及分析的数据库。它支持SQL 2003标准、Oracle PL/SQL以及DB2 SQL PL，对Oracle、DB2以及Teradata 都有很好的方言支持，是Hadoop领域对SQL标准支持最完善的产品。',
              link: ''  //TODO: the link goto incepter introduction
            },{
              title: 'Guardian',
              text: 'Guardian为TDH提供集中的安全和资源管理服务。它支持LDAP和Kerberos，保护Hadoop集群免受恶意攻击和安全威胁，而且还可以对资源做细粒度的ACL控制。多租户资源管理模块可以按照租户的方式管理资源，并通过一个图形化工具为用户提供权限配置以及资源配置接口。',
              link: ''  //TODO: the link 
            }, {
              title: 'Hyperbase',
              text: 'Hyperbase是以Apache HBase为基础，融合多项创新技术的NoSQL数据库: 它采用了和Inceptor同样的SQL引擎，允许开发者们直接 用SQL构建复杂应用; 支持全局索引和次级索引，实现高速的非主键查询; 提供原生的JSON/BSON格式支持以及对象存储(Object Store) 技术，极大地简化了非结构化数据处理。 ',
              link: ''  //TODO: the link 
            },{
              title: 'Hadoop',
              text: 'Hadoop Distributed File System (HDFS) — Apache Hadoop 项目的一个子项目 — 是一个高度容错的分布式文件系统，设计用于在低成本硬件上运行。HDFS 提供高吞吐量应用程序数据访问功能，适合带有大型数据集的应用程序。',
              link: ''  //TODO: the link
            }]
          },
          {
            class: 'TDH开发套件',
            // link: './tdh-dev-kits'
            ctn: [{
              title: 'Workflow',
              text: 'Workflow是一个图形化的工作流设计、调试、调度和分析的服务平台，它支持Shell、SQL、JDBC、HTTP等任务类型，也可以写自定 义Java任务。它还提供丰富的分析能力，如依赖关系、执行历史、甘特图等，可以帮助用户诊断工作流的执行状况。',
              link: ''  //TODO: the link 
            },{
              title: 'Governor',
              text: 'Governor是TDH中的元数据管理和数据治理工具。可用于管理元数据(包括表和存储过程)，监控所有数据和程序的更改历史，进行数据血缘分析和影响分析。开发者还可以用它调试数据问题，追踪问题来源，并帮助数据管理者预测计划进行的元数据更改会造成的影响，Governor可帮助用户提高大数据的数据质量。',
              link: ''  //TODO: the link
            },{
              title: 'Transporter',
              text: 'Transporter是一款用于设计和创建ETL任务的可视化工具。它支持从RDBMS到TDH的近实时数据同步功能，用户可用Transporter将数据从RDBMS迁移到Hadoop，再进行数据分析和挖掘工作；它提供完整的数据整合功能，源系统支持多种格式的数据源（CSV、JDBC、XML、JSON、关系数据库）；支持多种常用的数据转换操作（连接、聚合、清洗等）。',
              link: ''  //TODO: the link 
            },{
              title: 'Pilot',
              text: 'Pilot是基于Web的报表展现工具，轻量、灵活，可以快速部署。它支持多维度的分析和自助分析，提供数十种报表样式，对时序数据 也有很好的展现。此外，Pilot还支持团队协作和共享，支持导入和导出报表。',
              link: ''  //TODO: the link 
            }]
          },
          {
            class: '运维和开发工具',
            // link: './operation-dev-tools',
            ctn: [{
              title: 'Milano',
              text: 'Milano是一个日志收集分析和展示平台，为运维人员提供基于日志问题的定位和分析工具。它具有五个功能组件：logstash、kafka、elasticsearch、kibana、flink，分别用来帮助用户实现日志收集、传输、存储、展示和分析这五项功能。',
              link: ''  //TODO: the link goto 
            },{
              title: 'Terminal',
              text: 'Terminal 容器命令行是集群上服务用命令行指令操作的入口，它集成了各个服务的客户端，可以在网页上连接并操作集群内的各个服务，避免了需要登录各个容器才可以操作服务的烦恼。',
              link: ''  //TODO: the link goto 
            },{
              title: 'Prometheus',
              text: 'Prometheus是开源的监控和告警系统，以Metrics监控为主，通过pull mode完成时间序列数据的收集。主要包括的组件有：负责时间序列数据存储和抓取的Prometheus Server，Alertmanager，Push gateway，以及各类exporter。',
              link: ''  //TODO: the link goto 
            }]
          }
        ]
      },
      
  	}
  }
}