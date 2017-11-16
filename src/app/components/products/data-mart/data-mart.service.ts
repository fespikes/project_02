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
  			advImage: '/assets/images/products/data-mart.png'
  		},
      tabs: [
        {
          text: '产品功能',
          href: 'data-mart-functionalities'
        },
        {
          text: '产品优势',
          href: 'data-mart-advantages'
        },
        {
          text: '应用场景',
          href: 'data-mart-scenarios'
        },
        {
          text: '组件介绍',
          href: 'data-mart-component-intro'
        },
        /*{
          text: '费用说明',
          link: './expense-explanation'
        }*/
      ],
      functionalities: {
        title: '产品功能',
        id: 'data-mart-functionalities',
        diagram: '/assets/images/diagram/data-mart.png',
        //TODO: image style abstraction
        content: [
          {
            title: '面向业务的数据整合',
            text: '数据集市TDH-DM服务于企业部门或工作组，抽取来自数据仓库的子集，设计、开发、管理特定主题的数据集市，用于某部门或者某些特殊分析目的。通过系统性的数据整合，避免数据孤岛问题。'
          },
          {
            title: '强大的SQL支持',
            text: '完整支持SQL标准2003，兼容包括Oracle、DB2、Teradata多种方言，灵活的实现各种OLAP分析业务。同时其内部引擎具有深度优化语句的能力，确保语句极速运行。'
          },
          {
            title: '交互式OLAP分析',
            text: '采用专为OLAP定制研发的存储引擎Holodesk，实现交互式OLAP分析。TDH-DM通过列式缓存技术和过滤下沉技术，允许灵活的指定聚合字段，无需进行Cube预计算，也可以实时返回计算结果。'
          },
          {
            title: '高效的开发和运维工具',
            text: 'TDH-DM内置可视化Cube设计工具Rubik，支持星型和雪花模型，提供从Cube设计到持久化的完整过程，同时通过Cube共享以及消息通知实现高效协同合作。TDH-DM对接可视化报表工具，以视觉方式进行数据分析，同时还提供指标监控和日志管理工具，对异常状态提供报警，简化运维。'
          }
        ]
      },
      advantages: {
        title: '产品优势',
        id: 'data-mart-advantages',
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
        id: 'data-mart-scenarios',
        tabs: [
          {
            class: '数据自助分析平台',
            text: '规模较大分支机构较多的企业，可以利用TDH-DM将总部至基层的数据按照主题整合于集市，打造自助式的查询平台。基层部门的业务人员在平台上自主的实现快速查询，不再需要寻求总部和技术人员的帮助构建报表，节省了等待审批、数据提取和技术支持的时间开销。打破企业层级对数据流动的限制，迎合专业群体的特殊需求，促进基层部门的业务和总体经营发展。',
            image: {
              src: '/assets/images/products/scenarios/data-mart/self-analysis-platform.png',
            }
          },
          {
            class: '营销分析系统',
            text: '根据交易 数据的含义和关系，开发OLAP业务应用，对销售状况做多维度分析。在规模高至亿级别的数据中进行关联汇总，通过不断改变维度和度量，分析并整理数据分布，发现模式变化，探索趋势。发掘内外因素对销售效果产生的影响，制定恰当并具有特色的营销方式，提升管理经营水平。',
            image: {
              src: '/assets/images/products/scenarios/data-mart/marketing-analysis-system.png',
            }
          },
          {
            class: '客户服务管理',
            text: '组织与整理客户数据、销售数据、服务数据，对客户进行行为分析，发现潜在客户，追踪客户的生命周期，维护客户忠诚度，在售前、售中、售后的全过程提供个性化服务。利用客户行为对市场的反馈，实现以客户为导向的服务支持。提升数据到信息的转化率，使既有信息对决策提供支持。',
            image: {
              src: '/assets/images/products/scenarios/data-mart/csm.png',
            }
          }
        ],
      },
      componentIntro: {
        title: '组件介绍',
        id: 'data-mart-component-intro',
        tabs: [
          {
            class: 'TDH平台产品',
            ctn: [{
              title: 'Inceptor',
              text: 'Inceptor是一款用于批量处理及分析的数据库。它支持SQL 2003标准、Oracle PL/SQL以及DB2 SQL PL，对Oracle、DB2以及Teradata 都有很好的方言支持，是Hadoop领域对SQL标准支持最完善的产品。',
              link: '../../modules/product/inceptor'
            },{
              title: 'Guardian',
              text: 'Guardian为TDH提供集中的安全和资源管理服务。它支持LDAP和Kerberos，保护Hadoop集群免受恶意攻击和安全威胁，而且还可以对资源做细粒度的ACL控制。多租户资源管理模块可以按照租户的方式管理资源，并通过一个图形化工具为用户提供权限配置以及资源配置接口。',
              link: '../../modules/product/guardian'
            },{
              title: 'Hadoop',
              text: 'Hadoop Distributed File System (HDFS) — Apache Hadoop 项目的一个子项目 — 是一个高度容错的分布式文件系统，设计用于在低成本硬件上运行。HDFS 提供高吞吐量应用程序数据访问功能，适合带有大型数据集的应用程序。',
              link: '../../modules/product/hadoop'
            }],
          },
          {
            class: 'TDH开发套件',
            ctn: [{
              title: 'Workflow',
              text: 'Workflow是一个图形化的工作流设计、调试、调度和分析的服务平台，它支持Shell、SQL、JDBC、HTTP等任务类型，也可以写自定 义Java任务。它还提供丰富的分析能力，如依赖关系、执行历史、甘特图等，可以帮助用户诊断工作流的执行状况。',
              link: '../../modules/suite/workflow'
            },{
              title: 'Rubik',
              text: 'Rubik是一款用于设计OLAP Cube的可视化工具，所建Cube可以实例化于HDFS或Holodesk。Rubik支持雪花模型和星形模型两种Cube 设计模型，并支持多种格式的数据源(包括HDFS和远程RDBMS)。实验显示，在数据立方体的加速下，分析查询的速度可提高10倍。 Rubik通过可视化方式提供服务，使数据分析师得到更友好的交互体验。',
              link: '../../modules/suite/rubik'
            },{
              title: 'Pilot',
              text: 'Pilot是基于Web的报表展现工具，轻量、灵活，可以快速部署。它支持多维度的分析和自助分析，提供数十种报表样式，对时序数据 也有很好的展现。此外，Pilot还支持团队协作和共享，支持导入和导出报表。',
              link: '../../modules/suite/pilot'
            }]
          },
          {
            class: '运维和开发工具',
            ctn: [{
              title: 'Milano',
              text: 'Milano是一个日志收集分析和展示平台，为运维人员提供基于日志问题的定位和分析工具。它具有五个功能组件：logstash、kafka、elasticsearch、kibana、flink，分别用来帮助用户实现日志收集、传输、存储、展示和分析这五项功能。',
              link: '../../modules/tool/milano'
            },{
              title: 'Terminal',
              text: 'Terminal 容器命令行是集群上服务用命令行指令操作的入口，它集成了各个服务的客户端，可以在网页上连接并操作集群内的各个服务，避免了需要登录各个容器才可以操作服务的烦恼。',
              link: '../../modules/tool/terminal'
            },{
              title: 'Prometheus',
              text: 'Prometheus是开源的监控和告警系统，以Metrics监控为主，通过pull mode完成时间序列数据的收集。主要包括的组件有：负责时间序列数据存储和抓取的Prometheus Server，Alertmanager，Push gateway，以及各类exporter。',
              link: '../../modules/tool/prometheus'
            }]
          }
        ]
      },

  	}
  }

}
