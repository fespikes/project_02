import { Injectable } from '@angular/core';

@Injectable()
export class InfoRetrievalService {

  constructor() { }

	getProductDetails() {
  	return {
  		banner: {
  			h3: '信息检索',
        h4: '',
  			description: 'PB级别的高速全文检索服务，提供高并发支持，以及字段精确、模糊检索和快速统计功能，支持用SQL做内容检索。',
  			advImage: '/assets/images/products/info-retrieval.png'
  		},
      tabs: [
        {
          text: '产品功能',
          href: 'info-retrieval-functionalities'
        },
        {
          text: '产品优势',
          href: 'info-retrieval-advantages'
        },
        {
          text: '应用场景',
          href: 'info-retrieval-scenarios'
        },
        {
          text: '组件介绍',
          href: 'info-retrieval-component-intro'
        },
        /*{
          text: '费用说明',
          link: './expense-explanation'
        }*/
      ],
      functionalities: {
        title: '产品功能',
        id: 'info-retrieval-functionalities',
        diagram: '/assets/images/diagram/info-retrieval.jpg',
        imageWidth: 400,
        content: [
          {
            title: '全文搜索',
            text: '支持全文检索，提供精确和模糊的字段查询功能。可跨越数据源、数据格式实现检索，结果返回文件路径和关键词出现的片段，高亮显示查询内容，检索结果按照关联度排序。'
          },
          {
            title: '利用SQL做检索与分析',
            text: 'TDH-IR支持SQL2003语法及全文检索相关扩展，支持检索语义，同API编程相比，采用SQL不仅可以利用编译器的优化能力提供优秀的执行性能，而且可以避免底层存储升级引入的兼容性问题。同时，用SQL对检索结果进行复杂分析处理，实现比单纯数据检索更高级的信息探索能力。'
          },
          {
            title: '混合存储',
            text: 'TDH-RI采用冷热数据存储分层的模式，将热数据置于SSD，利用SSD的高IOPS满足大量热数据随机访问，而冷数据置于SATA，满足历史数据查询，从而降低硬件成本，大大提升性能。'
          },
          {
            title: '标准化的服务接口',
            text: '方便内部IT应用快捷完成数据接入和数据访问，有利于整合不同信息系统，便于数据搜索，获取所需信息。'
          }
        ]
      },
      advantages: {
        title: '产品优势',
        id: 'info-retrieval-advantages',
        content: [
          {
            title: 'SQL自动优化',
            text: '执行引擎内置SQL优化器，对语句实现自动优化，加速查询于业务实现。同时利用存储层做预处理，支持算子下沉，提高查询效率。'
          },
          {
            title: '高稳定性',
            text: '采用堆外内存管理技术，提高服务稳定性。TDH-RI将索引移到堆外，解决了因持久化索引在堆内积压，引起Full GC导致稳定性的问题。充分利用系统内存资源，提升单机存储上限。'
          },
          {
            title: '适应超大规模数据集',
            text: 'TDH-RI通过支持分区表满足超大规模数据集的构建需求，同时采用精细的内存管理模型，提升海量数据检索稳定性，轻松应对PB级数据量搜索，保证检索的可用可靠。'
          },
          {
            title: '安全保障',
            text: '受到Guardian的全面保护，为租户提供可靠地认证机制，防范安全漏洞和攻击，实现资源管理和行级列级的权限控制，在云环境下进行安全管控，保护用户隐私和信息安全。'
          }
        ]
      },
      scenarios: {
        title: '应用场景',
        id: 'info-retrieval-scenarios',
        tabs: [
          {
            class: '企业数据搜索引擎',
            text: 'TDH-RI可用于构建企业内部搜索引擎，根据指定的规则策略，在海量的结构化和非结构化数据中实现对目标关键字的搜索，返回并高亮匹配目标内容片段，按照同查询内容的相关性显示搜索的结果。同时支持根据记录的历史查询内容，自动提供搜索推荐，构造高效精确的搜索引擎。',
            image: {
              src: '/assets/images/products/scenarios/info-retrieval/data-search-engine.png',
            }
          },
          {
            class: '日志采集与分析系统',
            text: '广泛采集汇聚不同系统的日志，对重要关键字进行转化、检索、解析与分析，检测系统中的隐藏问题和漏洞。同时对接可视化平台，通过生成图表进行更高级直观的分析，协助发现未知攻击，提升效率和识别力。另外为用户提供关键字检索接口，使人工处理协助自动分析，实现更具针对性和精确度的日志分析功能，打造日志处理的瑞士军刀。',
            image: {
              src: '/assets/images/products/scenarios/info-retrieval/log-acquisition-analysis.png',
            }
          },
          {
            class: '商业分析',
            text: '在海量数据中快速定位关键信息，进行分析聚合，充分利用隐藏在非结构化数据中的信息，锁定某类用户的属性和行为特征，从而制定相应策略或作出决策。例如分析产品的购买群体，消费者的消费特征，销售额的变化情况与趋势，构建商业智能平台。',
          }
        ]
      },
      componentIntro: {
        title: '组件介绍',
        id: 'info-retrieval-component-intro',
        tabs: [
          {
            class: '开发工具',
            // link: './tdh-platform-products'
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
            // link: './tdh-dev-kits'
            ctn: [{
              title: '实时流处理引擎',
              text: 'Slipstream是提供实时计算的产品，被广泛用于交通运输和物联网行业。和其他解决方案相比，Slipstream有几个突出的技术优势: 完整的SQL支持使得实时业务开发过程更加简便;基于事件驱动的计算引擎可将延迟时间缩减到5毫秒，是Spark Streaming引擎的延 时的1/100;此外Slipstream支持复杂事件处理能力(CEP)，因此用户可以基于Slipstream用SQL语言开发比较复杂的在线流计算业 务，如在线反欺诈应用等。Slipstream还提供完善的高可用性(HA)和Exactly-Once语义，而这些都是使实时应用稳定、可靠的保障。',
              link: '../../modules/product/slipstream'
            },{
              title: '分析型数据库 Inceptor',
              text: 'Inceptor是一款用于批量处理及分析的数据库。它支持SQL 2003标准、Oracle PL/SQL以及DB2 SQL PL，对Oracle、DB2以及Teradata 都有很好的方言支持，是Hadoop领域对SQL标准支持最完善的产品。',
              link: '../../modules/product/inceptor'
            },{
              title: '安全管控',
              text: 'Guardian为TDH提供集中的安全和资源管理服务。它支持LDAP和Kerberos，保护Hadoop集群免受恶意攻击和安全威胁，而且还可以对资源做细粒度的ACL控制。多租户资源管理模块可以按照租户的方式管理资源，并通过一个图形化工具为用户提供权限配置以及资源配置接口。',
              link: '../../modules/product/guardian'
            }, {
              title: '分布式系统基础架构',
              text: 'Hadoop Distributed File System (HDFS) — Apache Hadoop 项目的一个子项目 — 是一个高度容错的分布式文件系统，设计用于在低成本硬件上运行。HDFS 提供高吞吐量应用程序数据访问功能，适合带有大型数据集的应用程序。',
              link: '../../modules/product/hadoop'
            }]
          },
          {
            class: '系统服务',
            // link: './operation-dev-tools',
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
