import { Injectable } from '@angular/core';

@Injectable()
export class RealtimeComputationService {

  constructor() { }

  getProductDetails() {
  	return {
  		banner: {
  			h3: '实时计算',
        h4: '',
  			description: '云上的流处理平台，对流式数据进行实时采集和实时处理，帮助企业构建在线实时应用，充分挖掘流数据价值。',
  			advImage: '/assets/images/products/realtime-computation.png'
  		},
      tabs: [
        {
          text: '产品功能',
          href: 'realtime-computation-functionalities'
        },
        {
          text: '产品优势',
          href: 'realtime-computation-advantages'
        },
        {
          text: '应用场景',
          href: 'realtime-computation-scenarios'
        },
        {
          text: '组件介绍',
          href: 'realtime-computation-component-intro'
        },
        /*{
          text: '费用说明',
          link: './expense-explanation'
        }*/
      ],
      functionalities: {
        title: '产品功能',
        id: 'realtime-computation-functionalities',
        diagram: '/assets/images/diagram/realtime-computation.jpg',
        imageWidth: 470,
        content: [
          {
            title: '将SQL用于流式应用开发',
            text: '完整支持Stream SQL标准（包含流扩展后的SQL 99）。开发人员可以直接用SQL取代API来编写流计算程序，因而无需考虑任何打包或部署，具有较低的入门门槛，同时降低基于SQL和PL/SQL的业务的迁移成本。'
          },
          {
            title: '微批处理+事件驱动',
            text: '支持微批处理和事件驱动两种处理模式，同时服务低延时和高吞吐的两种计算场景。事件驱动的模式下，计算任务由数据触发，实现低至5毫秒的延迟，用于开发对时间延迟敏感度较高的应用；微批处理模式下，提供单节点百万级别的超高吞吐量，适合于对吞吐要求较高的场景。'
          },
          {
            title: 'Exactly Once语义支持',
            text: '在高可用性的保障下，保证数据不丢不重，无论数据的重放次数，始终保证输出数据和输入数据一致。'
          },
          {
            title: '复杂事件处理（CEP）',
            text: '支持用SQL 定义复杂的数据处理规则和逻辑，动态感知外界事件特征变化，根据变化情况或者典型属性执行既定策略，创造接近实时的高度响应。适用于银行卡盗刷检测，机械故障告警，关键客户识别等场景，帮助企业提升综合竞争力。'
          },
          {
            title: '数据持久化',
            text: '支持将实时流数据持久化于存储引擎，做实时在线检索、准实时分析，或者用于构建数据仓库、数据集市，成为日后分析处理的资源。'
          },
          {
            title: '流上数据挖掘',
            text: 'TDH-RC将数据挖掘算法函数内置于SQL，使数据挖掘算法可作用于流上数据，允许机器学习应用运行在事件驱动的流引擎。'
          }
        ]
      },
      advantages: {
        title: '产品优势',
        id: 'realtime-computation-advantages',
        content: [
          {
            title: '灵活的场景支持',
            text: '可以灵活的为低延时和高吞吐两种场景提供服务，满足不同的大规模数据处理需求。处理模式的切换由参数开关控制，方便易操作。'
          },
          {
            title: '高效的开发和运维工具',
            text: 'TDH-DM同可视化报表工具实现对接，以视觉方式进行实时的流式数据分析。同时还提供指标监控和日志管理工具，对异常状态提供报警，简化运维。'
          },
          {
            title: '易用好上手',
            text: '提供SQL用做流数据处理与应用开发的语言，内置多种SQL自动优化策略，支持事件时间、会话窗口和无限长窗口，实时数据之间以及与静态表的关联，提供可视化报表分析支持，产品化程度高，对开发技能要求低。'
          },
          {
            title: '安全保障',
            text: '受到Guardian的全面保护，为租户提供可靠地认证机制，防范安全漏洞和攻击，实现资源管理和行级列级的权限控制，在云环境下进行安全管控，保护用户隐私和信息安全。'
          },
          {
            title: '稳定高可用',
            text: '定期将数据在HDFS上做轻量级分布式Checkpoint，利用HDFS冗余机制备份恢复数据。通过故障自动切换转移，确保系统随时稳定可用，维护业务的连续性。保障数据可靠，服务可用。支持流控。'
          }
        ]
      },
      scenarios: {
        title: '应用场景',
        id: 'realtime-computation-scenarios',
        tabs: [
          {
            class: '缉查布控系统',
            text: '构建公路车辆智能监测记录系统，汇聚卡口车辆通行信息，捕捉违规现象，实现车辆轨迹追踪。同时将通行信息和布控信息之间进行对比，对可疑对象发出预警，通知路面民警对预警车辆拦截处置。也可以实现交通流量监控，嗅探流量增幅异常高的路段。为打击违法犯罪工作、预防和减少道路交通事故、控制交通流量提供技术支撑。',
            image: {
              src: '/assets/images/products/scenarios/realtime-computation/raid-deploy-control.png',
            }
          },
          {
            class: '金融风险管理',
            text: '为实时风控和实时反欺诈提供技术支持。利用TDH-RC对于流计算的超强表达能力，实现复杂的应用逻辑，对于从生产系统通过实时消息队列进入计算集群的实时交易数据，完成数据转换、特征提取、探索分析，检测异常的金融交易行为，将结果最终以消息或者页面等形式输出。',
            image: {
              src: '/assets/images/products/scenarios/realtime-computation/financial-risk-management.png',
            }
          },
          {
            class: '生产设备安全预警',
            text: '实时收集从生产设备传感器采集的数据，监测设备在某个时间窗口内的异常状态和异常变化，分析是否存在潜在的安全隐患，提供消息实时警报。支持状态持久化，留存并汇总数据记录，用以进行事后安全分析。实现事前预警、事后分析、故障预测，对生产设备提供信息化的全面安全保护。',
          }
        ]
      },
      componentIntro: {
        title: '组件介绍',
        id: 'realtime-computation-component-intro',
        tabs: [
          {
            class: '开发工具',
            ctn: [{
              title: '日志服务',
              text: 'Milano是一个日志收集分析和展示平台，为运维人员提供基于日志问题的定位和分析工具。它具有五个功能组件：logstash、kafka、elasticsearch、kibana、flink，分别用来帮助用户实现日志收集、传输、存储、展示和分析这五项功能。',
              link: '../../modules/suite/milano'
            },{
              title: '报表工具',
              text: 'Pilot是基于Web的报表展现工具，轻量、灵活，可以快速部署。它支持多维度的分析和自助分析，提供数十种报表样式，对时序数据 也有很好的展现。此外，Pilot还支持团队协作和共享，支持导入和导出报表。',
              link: '../../modules/suite/pilot'
            },{
              title: '容器命令行',
              text: 'Terminal 容器命令行是集群上服务用命令行指令操作的入口，它集成了各个服务的客户端，可以在网页上连接并操作集群内的各个服务，避免了需要登录各个容器才可以操作服务的烦恼。',
              link: '../../modules/tool/terminal'
            }]
          },
          {
            class: '平台服务',
            ctn: [{
              title: 'NewSQL数据库',
              text: 'Hyperbase是以Apache HBase为基础，融合多项创新技术的NoSQL数据库: 它采用了和Inceptor同样的SQL引擎，允许开发者们直接 用SQL构建复杂应用; 支持全局索引和次级索引，实现高速的非主键查询; 提供原生的JSON/BSON格式支持以及对象存储(Object Store) 技术，极大地简化了非结构化数据处理。 ',
              link: '../../modules/product/hyperbase'
            },{
              title: '实时流处理引擎',
              text: 'Slipstream是提供实时计算的产品，被广泛用于交通运输和物联网行业。和其他解决方案相比，Slipstream有几个突出的技术优势: 完整的SQL支持使得实时业务开发过程更加简便;基于事件驱动的计算引擎可将延迟时间缩减到5毫秒，是Spark Streaming引擎的延 时的1/100;此外Slipstream支持复杂事件处理能力(CEP)，因此用户可以基于Slipstream用SQL语言开发比较复杂的在线流计算业 务，如在线反欺诈应用等。Slipstream还提供完善的高可用性(HA)和Exactly-Once语义，而这些都是使实时应用稳定、可靠的保障。',
              link: '../../modules/product/slipstream'
            },{
              title: '安全管控',
              text: 'Guardian为TDH提供集中的安全和资源管理服务。它支持LDAP和Kerberos，保护Hadoop集群免受恶意攻击和安全威胁，而且还可以对资源做细粒度的ACL控制。多租户资源管理模块可以按照租户的方式管理资源，并通过一个图形化工具为用户提供权限配置以及资源配置接口。',
              link: '../../modules/product/guardian'
            },{
              title: '分布式系统基础架构',
              text: 'Hadoop Distributed File System (HDFS) — Apache Hadoop 项目的一个子项目 — 是一个高度容错的分布式文件系统，设计用于在低成本硬件上运行。HDFS 提供高吞吐量应用程序数据访问功能，适合带有大型数据集的应用程序。',
              link: '../../modules/product/hadoop'
            },{
              title: '消息中间件',
              text: '一种分布式的基于发布/订阅的消息系统，在廉价的机器上也能做到单机每秒100K条以上消息的传输。',
              link: '../../modules/tool/kafka'
            },{
              title: '内存KV数据库',
              text: 'Redis是个基于内存的数据存储，可以被用作数据库、缓存或者消息转发器。它支持多种数据结构，包括strings, hashes, lists, sets, bitmaps等。Redis支持事务，基于磁盘的持久化，多副本等特性，保证服务的高可用性。Redis Cluster可以用于构建一个Redis的集群，提供高吞吐、高可用的内存数据服务。',
              link: '../../modules/tool/redis'
            }]
          },
          {
            class: '系统服务',
            ctn: [{
              title: '指标监控',
              text: 'Prometheus是开源的监控和告警系统，以Metrics监控为主，通过pull mode完成时间序列数据的收集。主要包括的组件有：负责时间序列数据存储和抓取的Prometheus Server，Alertmanager，Push gateway，以及各类exporter。',
              link: '../../modules/suite/prometheus'
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
