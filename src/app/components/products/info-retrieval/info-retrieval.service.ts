import { Injectable } from '@angular/core';

@Injectable()
export class InfoRetrievalService {

  constructor() { }

	getProductDetails() {
  	return {
  		banner: {
  			h3: '信息检索',
        h4: '',
  			description: '提供PB级别的高速全文检索服务，实现毫秒级的响应速度，支持用SQL做内容检索，提供多种接口，高并发支持，字段精确和模糊检索以及快速统计功能。采用异地数据共享分布式存储，存储海量数据，为企业构建一站式内部搜索平台和信息检索服务。',
  			advImage: '/assets/images/products/info-retrieval.png'
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
        diagram: '/assets/images/diagram/info-retrieval.png',
        //TODO: image style abstraction
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
        tabs: [
          {
            text: '企业数据搜索引擎',
            link: './ddddddddd'
          },
          {
            text: '日志采集与分析系统',
            link: './ddddddddddddddd'
          },
          {
            text: '客户服务管理',
            link: './customer-service-managing'
          }
        ],
        selfAnalysisPlatform: {
          text: '规模较大分支机构较多的企业，可以利用TDH-DM将总部至基层的数据按照主题整合于集市，打造自助式的查询平台。基层部门的业务人员在平台上自主的实现快速查询，不再需要寻求总部和技术人员的帮助构建报表，节省了等待审批、数据提取和技术支持的时间开销。打破企业层级对数据流动的限制，迎合专业群体的特殊需求，促进基层部门的业务和总体经营发展。',
          image: {
            src: '/assets/images/products/scenarios/data-mart/self-analysis-platform.png',
            style: {
              width: '810',
              height: '394'
            }
          }
        },
        marketingAnalysisSystem: {
          text: '根据交易 数据的含义和关系，开发OLAP业务应用，对销售状况做多维度分析。在规模高至亿级别的数据中进行关联汇总，通过不断改变维度和度量，分析并整理数据分布，发现模式变化，探索趋势。发掘内外因素对销售效果产生的影响，制定恰当并具有特色的营销方式，提升管理经营水平。',
          image: {
            src: '/assets/images/products/scenarios/data-mart/marketing-analysis-system.png',
            style: {
              width: '728',
              height: '429'
            }
          }
        },
        customerServiceManaging: {
          text: '根据交易 数据的含义和关系，开发OLAP业务应用，对销售状况做多维度分析。在规模高至亿级别的数据中进行关联汇总，通过不断改变维度和度量，分析并整理数据分布，发现模式变化，探索趋势。发掘内外因素对销售效果产生的影响，制定恰当并具有特色的营销方式，提升管理经营水平。',
          image: {
            src: '/assets/images/products/scenarios/data-mart/csm.png',
            style: {
              width: '900',
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
          title: 'Inceptor',
          text: 'Inceptor是一款用于批量处理及分析的数据库。它支持SQL 2003标准、Oracle PL/SQL以及DB2 SQL PL，对Oracle、DB2以及Teradata 都有很好的方言支持，是Hadoop领域对SQL标准支持最完善的产品。',
          link: ''  //TODO: the link goto incepter introduction
        },{
          title: 'Guardian',
          text: 'Guardian为TDH提供集中的安全和资源管理服务。它支持LDAP和Kerberos，保护Hadoop集群免受恶意攻击和安全威胁，而且还可以对资源做细粒度的ACL控制。多租户资源管理模块可以按照租户的方式管理资源，并通过一个图形化工具为用户提供权限配置以及资源配置接口。',
          link: ''  //TODO: the link goto incepter introduction
        },{
          title: 'Hadoop',
          text: 'Hadoop Distributed File System (HDFS) — Apache Hadoop 项目的一个子项目 — 是一个高度容错的分布式文件系统，设计用于在低成本硬件上运行。HDFS 提供高吞吐量应用程序数据访问功能，适合带有大型数据集的应用程序。',
          link: ''  //TODO: the link goto incepter introduction
        }],
        tdhDevKits: [{
          title: 'Workflow',
          text: 'Workflow是一个图形化的工作流设计、调试、调度和分析的服务平台，它支持Shell、SQL、JDBC、HTTP等任务类型，也可以写自定 义Java任务。它还提供丰富的分析能力，如依赖关系、执行历史、甘特图等，可以帮助用户诊断工作流的执行状况。',
          link: ''  //TODO: the link goto incepter introduction
        },{
          title: 'Rubik',
          text: 'Rubik是一款用于设计OLAP Cube的可视化工具，所建Cube可以实例化于HDFS或Holodesk。Rubik支持雪花模型和星形模型两种Cube 设计模型，并支持多种格式的数据源(包括HDFS和远程RDBMS)。实验显示，在数据立方体的加速下，分析查询的速度可提高10倍。 Rubik通过可视化方式提供服务，使数据分析师得到更友好的交互体验。',
          link: ''  //TODO: the link goto incepter introduction
        },{
          title: 'Pilot',
          text: 'Pilot是基于Web的报表展现工具，轻量、灵活，可以快速部署。它支持多维度的分析和自助分析，提供数十种报表样式，对时序数据 也有很好的展现。此外，Pilot还支持团队协作和共享，支持导入和导出报表。',
          link: ''  //TODO: the link goto incepter introduction
        }],
        operationDevTools: [{
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
