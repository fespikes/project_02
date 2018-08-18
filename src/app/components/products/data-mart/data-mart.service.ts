import { Injectable } from '@angular/core';

@Injectable()
export class DataMartService {

  constructor() { }

  getProductDetails() {
  	return {
  		banner: {
  			h3: '数据集市',
        h4: '',
  			description: '面向部门级业务，提供星型和雪花模型构建OLAP Cube，实现交互式分析以及自动化的报表应用构建。',
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
        imageWidth: 470,
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
            title: '灵活度高',
            text: '实现跨系统的OLAP分析，既支持预计算的OLAP模型构建方式，又支持交互式OLAP技术，可以灵活设计聚合字段，提供全方位的维度分析。'
          },
          {
            title: '极快的响应速度',
            text: '快速响应即席分析和报表业务。既可以利用预计算以数量级提升查询速度；又可以利用Holodesk的SSD和索引机制，打造交互式分析场景的优异的加速器，将交互式分析的性能提高10~100倍。灵活利用两种方式实现超低延时查询，保证优异的性能。'
          },
          {
            title: '保证开发效率',
            text: 'TDH-DM支持直接利用数据仓库原有数据构建数据集市，避免重复造数据。同时提供多种易用的开发工具，简化数据集市开发难度，提高开发效率，降低维护成本。'
          },
          {
            title: '高并发支持',
            text: '实现高并发支持，支持部署多个Inceptor服务器引擎，并发执行计算，并提供自动负载均衡，使并发度得到线性提升。'
          },
          {
            title: '稳健的安全保护',
            text: 'TDH-DM受到安全组件Guardian的全面保护，为租户提供可靠地认证机制，防范安全漏洞，实现资源管理和行级列级的权限控制，在云环境下保护用户隐私和信息安全。'
          },
          {
            title: '容灾备份',
            text: '将数据在HDFS上做checkpoint，利用HDFS冗余机制备份并恢复数据。实现即时灾难恢复，通过故障转移确保系统随时稳定可用，维护业务的连续性。保障数据可靠，服务可用。'
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
            text: '根据交易数据的含义和关系，开发OLAP业务应用，对销售状况做多维度分析。在规模高至亿级别的数据中进行关联汇总，通过不断改变维度和度量，分析并整理数据分布，发现模式变化，探索趋势。发掘内外因素对销售效果产生的影响，制定恰当并具有特色的营销方式，提升管理经营水平。',
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
            class: '开发工具',
            ctn: [{
              title: '日志服务',
              text: 'Milano是一个日志收集分析和展示平台，为运维人员提供基于日志问题的定位和分析工具。它具有五个功能组件：logstash、kafka、elasticsearch、kibana、flink，分别用来帮助用户实现日志收集、传输、存储、展示和分析这五项功能。',
              link: '../../modules/tool/milano'
            },{
              title: '工作流引擎',
              text: 'Workflow是一个图形化的工作流设计、调试、调度和分析的服务平台，它支持Shell、SQL、JDBC、HTTP等任务类型，也可以写自定 义Java任务。它还提供丰富的分析能力，如依赖关系、执行历史、甘特图等，可以帮助用户诊断工作流的执行状况。',
              link: '../../modules/suite/workflow'
            },{
              title: '报表工具',
              text: 'Pilot是基于Web的报表展现工具，轻量、灵活，可以快速部署。它支持多维度的分析和自助分析，提供数十种报表样式，对时序数据 也有很好的展现。此外，Pilot还支持团队协作和共享，支持导入和导出报表。',
              link: '../../modules/suite/pilot'
            },{
              title: 'Cube设计',
              text: 'Rubik是一款用于设计OLAP Cube的可视化工具，所建Cube可以实例化于HDFS或Holodesk。Rubik支持雪花模型和星形模型两种Cube 设计模型，并支持多种格式的数据源(包括HDFS和远程RDBMS)。实验显示，在数据立方体的加速下，分析查询的速度可提高10倍。 Rubik通过可视化方式提供服务，使数据分析师得到更友好的交互体验。',
              link: '../../modules/suite/rubik'
            },{
              title: '数据整合',
              text: 'Transporter是一款用于设计和创建ETL任务的可视化工具。它支持从RDBMS到TDH的近实时数据同步功能，用户可用Transporter将数据从RDBMS迁移到Hadoop，再进行数据分析和挖掘工作；它提供完整的数据整合功能，源系统支持多种格式的数据源（CSV、JDBC、XML、JSON、关系数据库）；支持多种常用的数据转换操作（连接、聚合、清洗等）。',
              link: '../../modules/suite/transporter'
            },{
              title: '容器命令行',
              text: 'Terminal 容器命令行是集群上服务用命令行指令操作的入口，它集成了各个服务的客户端，可以在网页上连接并操作集群内的各个服务，避免了需要登录各个容器才可以操作服务的烦恼。',
              link: '../../modules/tool/terminal'
            }],
          },
          {
            class: '平台服务',
            ctn: [{
              title: '分析型数据库',
              text: 'Inceptor是一款用于批量处理及分析的数据库。它支持SQL 2003标准、Oracle PL/SQL以及DB2 SQL PL，对Oracle、DB2以及Teradata 都有很好的方言支持，是Hadoop领域对SQL标准支持最完善的产品。',
              link: '../../modules/product/inceptor'
            },{
              title: '安全管控',
              text: 'Guardian为TDH提供集中的安全和资源管理服务。它支持LDAP和Kerberos，保护Hadoop集群免受恶意攻击和安全威胁，而且还可以对资源做细粒度的ACL控制。多租户资源管理模块可以按照租户的方式管理资源，并通过一个图形化工具为用户提供权限配置以及资源配置接口。',
              link: '../../modules/product/guardian'
            },{
              title: '分布式系统基础架构',
              text: 'Hadoop Distributed File System (HDFS) — Apache Hadoop 项目的一个子项目 — 是一个高度容错的分布式文件系统，设计用于在低成本硬件上运行。HDFS 提供高吞吐量应用程序数据访问功能，适合带有大型数据集的应用程序。',
              link: '../../modules/product/hadoop'
            }]
          },
          {
            class: '系统服务',
            ctn: [{
              title: '指标监控',
              text: 'Prometheus是开源的监控和告警系统，以Metrics监控为主，通过pull mode完成时间序列数据的收集。主要包括的组件有：负责时间序列数据存储和抓取的Prometheus Server，Alertmanager，Push gateway，以及各类exporter。',
              link: '../../modules/tool/prometheus'
            },{
              title: '高可用数据库',
              text: 'TxSQL 是一个分布式可扩展、服务高可用、数据强一致的关系型数据库集群。 其底层通过 Paxos Group 保证数据的一致性和高可用，在业务层通过分布式的事 务管理器来提供高并发的事务支持',
              link: '../../modules/tool/txsql'
            },{
              title: '容器操作系统',
              text: 'TOS基于Docker和Kubernetes开发，是为大数据应用量身订做的云操作系统，作为运行TDC云产品与组件的底层平台，让大数据应用轻松拥抱云服务。',
              link: '../../modules/tool/TOS'
            }]
          }
        ]
      },

  	}
  }

}
