import { Injectable } from '@angular/core';

@Injectable()
export class RelationalDatabaseService {

  constructor() { }

  getProductDetails() {
  	return {
  		banner: {
  			h3: '关系数据库',
        h4: '',
  			description: '构建企业内部的关系数据库服务，可用于处理数据量在500GB以内的OLTP业务。支持复杂的SQL查询，提供高稳定、可扩展、强一致的数据处理服务。',
  			advImage: '/assets/images/products/relational-database.png'
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
          link: './scenarios/self-analysis-platform'
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
        diagram: '/assets/images/diagram/relational-database.png',
        //TODO: image style abstraction
        content: [
          {
            title: '高效处理复杂数据查询', 
            text: '支持用SQL做多表之间的复杂查询，提供优秀的业务处理速度。'
          },
          {
            title: '高可靠性保障',
            text: '实现主从热备，灾难自动转移。保障故障转移过程对用户透明，服务始终连续可用，数据始终可靠可访问。'
          },
          {
            title: '高并发支持',
            text: 'TDH-RDB采用高可用关系型数据库集群TxSQL，通过其分布式的事务管理器来对高并发的事务提供支持，确保数据具有强一致性。'
          },
          {
            title: '内置报表工具',
            text: 'TDH-RDB提供了报表支持，允许对数据做图形化分析。用图形证明或展现分析结果，或者进行更高级的处理分析。'
          }
        ]
      },
      advantages: {
        title: '产品优势',
        content: [
          {
            title: '简单的运维',
            text: '数据自动备份，故障时可近实时转移，恢复数据，降低运维的成本投入。'
          },
          {
            title: '卓越的性能',
            text: '优异的SQL执行能力，加速业务实现。具有高可扩展性，提供高可用支持，实现分布式事务，确保数据强一致，轻松应对高并发业务。'
          },
          {
            title: '安全保障',
            text: '为租户提供可靠地认证机制，防范安全漏洞和攻击，在云环境下进行安全管控，保护用户隐私和数据安全。防范各种非法攻击，保障数据安全。'
          }
        ]
      },
      scenarios: {
        title: '应用场景',
        tabs: [
          {
            text: '缉查布控系统',
            link: './raid-deploy-control'
          },
          {
            text: '金融风险管理',
            link: './financial-risk-management'
          },
          {
            text: '生产设备安全预警',
            link: './equipment-security-warning'
          }
        ],
        raidDeployControl: {
          text: '构建公路车辆智能监测记录系统，汇聚卡口车辆通行信息，捕捉违规现象，实现车辆轨迹追踪。同时将通行信息和布控信息之间进行对比，对可疑对象发出预警，通知路面民警对预警车辆拦截处置。也可以实现交通流量监控，嗅探流量增幅异常高的路段。为打击违法犯罪工作、预防和减少道路交通事故、控制交通流量提供技术支撑。',
          image: {
            src: '/assets/images/products/scenarios/relational-database/raid-deploy-control.png',
            style: {
              width: '700',	//'926',
              height: '344'	//'455'
            }
          }
        },
        financialRiskManagement: {
          text: '为实时风控和实时反欺诈提供技术支持。利用TDH-RC对于流计算的超强表达能力，实现复杂的应用逻辑，对于从生产系统通过实时消息队列进入计算集群的实时交易数据，完成数据转换、特征提取、探索分析，检测异常的金融交易行为，将结果最终以消息或者页面等形式输出。',
          image: {
            src: '/assets/images/products/scenarios/relational-database/financial-risk-management.png',
            style: {
              width: '816',
              height: '360'
            }
          }
        },
        equipmentSecurityWarning: {
          text: '实时收集从生产设备传感器采集的数据，监测设备在某个时间窗口内的异常状态和异常变化，分析是否存在潜在的安全隐患，提供消息实时警报。支持状态持久化，留存并汇总数据记录，用以进行事后安全分析。实现事前预警、事后分析、故障预测，对生产设备提供信息化的全面安全保护。',
          image: {
            src: '/assets/images/products/scenarios/relational-database/equipment-security-warning.png',
            style: {
              width: '801',
              height: '322'
            }
          }
        }
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
        ],
        tdhPlatformProducts: [{
          title: 'Guardian',
          text: 'Guardian为TDH提供集中的安全和资源管理服务。它支持LDAP和Kerberos，保护Hadoop集群免受恶意攻击和安全威胁，而且还可以对资源做细粒度的ACL控制。多租户资源管理模块可以按照租户的方式管理资源，并通过一个图形化工具为用户提供权限配置以及资源配置接口。',
          link: ''  //TODO: the link goto incepter introduction
        },{
          title: 'Slipstream',
          text: 'Slipstream是提供实时计算的产品，被广泛用于交通运输和物联网行业。和其他解决方案相比，Slipstream有几个突出的技术优势: 完整的SQL支持使得实时业务开发过程更加简便;基于事件驱动的计算引擎可将延迟时间缩减到5毫秒，是Spark Streaming引擎的延 时的1/100;此外Slipstream支持复杂事件处理能力(CEP)，因此用户可以基于Slipstream用SQL语言开发比较复杂的在线流计算业 务，如在线反欺诈应用等。Slipstream还提供完善的高可用性(HA)和Exactly-Once语义，而这些都是使实时应用稳定、可靠的保障。',
          link: ''  //TODO: the link goto incepter introduction
        },{
          title: 'Hyperbase',
          text: 'Hyperbase是以Apache HBase为基础，融合多项创新技术的NoSQL数据库: 它采用了和Inceptor同样的SQL引擎，允许开发者们直接 用SQL构建复杂应用; 支持全局索引和次级索引，实现高速的非主键查询; 提供原生的JSON/BSON格式支持以及对象存储(Object Store) 技术，极大地简化了非结构化数据处理。',
          link: ''  //TODO: the link goto incepter introduction
        },{
          title: 'Hadoop',
          text: 'Hadoop Distributed File System (HDFS) — Apache Hadoop 项目的一个子项目 — 是一个高度容错的分布式文件系统，设计用于在低成本硬件上运行。HDFS 提供高吞吐量应用程序数据访问功能，适合带有大型数据集的应用程序。',
          link: ''  //TODO: the link goto incepter introduction
        }],
        tdhDevKits: [{
          title: 'Pilot',
          text: 'Pilot是基于Web的报表展现工具，轻量、灵活，可以快速部署。它支持多维度的分析和自助分析，提供数十种报表样式，对时序数据 也有很好的展现。此外，Pilot还支持团队协作和共享，支持导入和导出报表。',
          link: ''  //TODO: the link goto incepter introduction
        }],
        operationDevTools: [{
          title: 'Redis',
          text: 'Redis是个基于内存的数据存储，可以被用作数据库、缓存或者消息转发器。它支持多种数据结构，包括strings, hashes, lists, sets, bitmaps等。Redis支持事务，基于磁盘的持久化，多副本等特性，保证服务的高可用性。Redis Cluster可以用于构建一个Redis的集群，提供高吞吐、高可用的内存数据服务。',
          link: ''  //TODO: the link goto incepter introduction
        },{
          title: 'Milano',
          text: 'Milano是一个日志收集分析和展示平台，为运维人员提供基于日志问题的定位和分析工具。它具有五个功能组件：logstash、kafka、elasticsearch、kibana、flink，分别用来帮助用户实现日志收集、传输、存储、展示和分析这五项功能。',
          link: ''  //TODO: the link goto incepter introduction
        },{
          title: 'Terminal',
          text: 'Terminal 容器命令行是集群上服务用命令行指令操作的入口，它集成了各个服务的客户端，可以在网页上连接并操作集群内的各个服务，避免了需要登录各个容器才可以操作服务的烦恼。',
          link: ''  //TODO: the link goto incepter introduction
        },{
          title: 'Prometheus',
          text: 'Prometheus是开源的监控和告警系统，以Metrics监控为主，通过pull mode完成时间序列数据的收集。主要包括的组件有：负责时间序列数据存储和抓取的Prometheus Server，Alertmanager，Push gateway，以及各类exporter。',
          link: ''  //TODO: the link goto incepter introduction
        }]
      },
      
  	}
  }
}
