import { Injectable } from '@angular/core';

@Injectable()
export class AnalysisMiningService {

  constructor() { }

  getProductDetails() {
  	return {
  		banner: {
  			h3: '数据分析与挖掘',
        h4: '',
  			description: '数据分析平台为数据科学家提供了数据清洗、特征工程、建模平台以及工具集，用于构建数据分析、数据挖掘业务。共提供了60余种分布式机器学习算法和多种行业模型，方便从数据中发现蕴含价值，探索对象属性和行为之间的关系，将数据有效转换为助于企业运营的价值信息。',
  			advImage: '/assets/images/products/analysis-mining.png'
  		},
      tabs: [
        {
          text: '产品功能',
          href: 'analysis-mining-functionalities'
        },
        {
          text: '产品优势',
          href: 'analysis-mining-advantages'
        },
        {
          text: '应用场景',
          href: 'analysis-mining-scenarios'
        },
        {
          text: '组件介绍',
          href: 'analysis-mining-component-intro'
        },
        /*{
          text: '费用说明',
          link: './expense-explanation'
        }*/
      ],
      functionalities: {
        title: '产品功能',
        id: 'analysis-mining-functionalities',
        diagram: '/assets/images/diagram/analysis-mining.png',
        //TODO: image style abstraction
        content: [
          {
            title: '多种语言接口', 
            text: '实现多种语言接口：SQL、R、Python，为它们提供了完备的运行开发环境，对开发语言上支持力度强，可适应并服务于多种应用场景。'
          },
          {
            title: '60余种算法',
            text: '内置大量常用机器学习算法的分布式实现，可以与R语言中的数千个算法混合使用，配合TDH内置的高度优化的专有算法，高速分析平台中的海量数据。此外，TDH-DA还集成了多个机器学习算法库，包含了统计算法、分类算法、聚类分析、回归分析、频度关联分析和神经网络在内的常用算法，方便用户快速构建大规模数据挖掘系统和方案。'
          },
          {
            title: '全行业模型库',
            text: '提供丰富的行业模型库，实现了几乎全行业的覆盖。其中包括精准营销、风险分析、流失预警、文本挖掘、欺诈检测、用户画像、实时推荐、商圈分析、异常检测、访问路径、工业可靠性维护等模型库。为您解决因缺少行业模板，难以快速着手搭建应用的问题。'
          },
          {
            title: '高效的开发工具',
            text: '内置高效开发工具，降低数据分析和数据挖掘难度。引入Zeppelin Notebook，实现数据采集、发现、分析以及可视化处理多个数据分析环节，支持成员协同合作。TDH-DA还同可视化报表工具进行对接，对数据提供视觉分析。同时内置指标监控和日志管理工具，对异常状态提供报警，降低运维成本。'
          }
        ]
      },
      advantages: {
        title: '产品优势',
        id: 'analysis-mining-advantages',
        content: [
          {
            title: '拥有大数据基因',
            text: '提供海量存储，采用先进的大数据计算引擎，实现近百个分布式算法，支持文本等非结构化数据。可实现全量数据训练预测，高维深度网络训练，分布式全量图引擎。'
          },
          {
            title: '低门槛好上手',
            text: '提供高效的工具帮助业务人员快速掌握数据建模方法，建立数据挖掘流程，方便易用。提供R语言原生接口支持，利用R语言就可以做海量数据挖掘，拥有极大的灵活性。'
          },
          {
            title: '衔接数仓',
            text: '无缝衔接数据仓库，通过R语言接口函数或在Notebook中直接使用SQL语句访问数仓，实现基于Spark计算框架的SQL类统计分析以及数据挖掘应用。'
          },
          {
            title: '安全保障',
            text: '受到Guardian的全面保护，为租户提供可靠地认证机制，防范安全漏洞和攻击，实现资源管理和行级列级的权限控制，在云环境下进行安全管控，保护用户隐私和信息安全。'
          }
        ]
      },
      scenarios: {
        title: '应用场景',
        id: 'analysis-mining-scenarios',
        tabs: [
          {
            class: '行内信贷风险管理',
            text: '利用银行内部数据与外部征信数据，使用特征工程充分挖掘数据背后隐藏的风险特征，借助先进的机器学习算法分析是否有循环担保资金链，找出担保团伙，衡量网络风险，衡量关键实体风险，针对逾期违约建模，找到特征重要性。实现贷前风险预测与防范、贷中评测与审查、贷后监控与预警。',
            image: {
              src: '/assets/images/products/scenarios/analysis-mining/credit-risk-control.png',
              width: '645',
            }
          },
          {
            class: '精准营销',
            text: '描绘用户画像，获取用户业务访问特征值，个性化标签信息集合，并依托画像及客户终身价值模型，寻找客户各种订购业务之间的关联性，针对不同业务，快速定位和管理潜在客户、活跃客户、流失客户。对不同客户群采取不同的营销手段，提供个性化推荐等丰富的智能营销应用。另外从用户访问数据提炼热点信息、进行排行，根据热点内容进行有针对性的广告投放，预测未来可能火爆的内容。',
            image: {
              src: '/assets/images/products/scenarios/analysis-mining/precise-marketing.png',
              width: '645'
            }
          },
          {
            class: '欺诈检测',
            text: '先对用户的刷卡记录、地理位置、转账交易等信息，通过实时风险评估在线分类、决策分析引擎规则库进行在线并发数据挖掘，然后转交人工审阅系统由操作员进行人工分析，接着送入风险评估模型和规则、决策模型进行离线训练，同时对在线系统进行更新，最终根据分类模型和预测模型的分析结果锁定金融欺诈行为。',
            image: {
              src: '/assets/images/products/scenarios/analysis-mining/fraud-check.png',
              width: '645'
            }
          }
        ]
      },
      componentIntro: {
        title: '组件介绍',
        id: 'analysis-mining-component-intro',
        tabs: [
          {
            class: 'TDH平台产品',
            ctn: [{
              title: 'Inceptor',
              text: 'Inceptor是一款用于批量处理及分析的数据库。它支持SQL 2003标准、Oracle PL/SQL以及DB2 SQL PL，对Oracle、DB2以及Teradata 都有很好的方言支持，是Hadoop领域对SQL标准支持最完善的产品。',
              link: ''  //TODO: the link goto incepter introduction
            },{
              title: 'Guardian',
              text: 'Guardian为TDH提供集中的安全和资源管理服务。它支持LDAP和Kerberos，保护Hadoop集群免受恶意攻击和安全威胁，而且还可以对资源做细粒度的ACL控制。多租户资源管理模块可以按照租户的方式管理资源，并通过一个图形化工具为用户提供权限配置以及资源配置接口。',
              link: ''  //TODO: the link goto incepter introduction
            },{
              title: 'Discover',
              text: 'Discover是分布式机器学习平台，它包含了丰富的分布式算法库，还内置了多个行业应用模块，例如金融反欺诈、文本挖掘算法库等。 Discover提供了R语言、Python和SQL接口，以帮助数据科学家开发自己的数据挖掘算法。通过内置Notebook工具Zeppelin，Discover 可以非常灵活的支持数据工程师和科学家之间的团队协作。',
              link: ''  //TODO: the link goto incepter introduction
            },{
              title: 'Hadoop',
              text: 'Hadoop Distributed File System (HDFS) — Apache Hadoop 项目的一个子项目 — 是一个高度容错的分布式文件系统，设计用于在低成本硬件上运行。HDFS 提供高吞吐量应用程序数据访问功能，适合带有大型数据集的应用程序。',
              link: ''  //TODO: the link goto incepter introduction
            }],
          },
          {
            class: 'TDH开发套件',
            ctn: [{
              title: 'Pilot',
              text: 'Pilot是基于Web的报表展现工具，轻量、灵活，可以快速部署。它支持多维度的分析和自助分析，提供数十种报表样式，对时序数据 也有很好的展现。此外，Pilot还支持团队协作和共享，支持导入和导出报表。',
              link: ''  //TODO: the link goto incepter introduction
            }],
          },
          {
            class: '运维和开发工具',
            ctn: [{
              title: 'Zeppelin',
              text: 'Zeppelin是一个基于web的图形化Notebook，用于交互式的数据分析。它提供多种编程接口如SQL、R、Scala和Python等，开发者可以通过这些接口来做数据开发，可视化等工作，并支持团队共享和协作。',
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
          }
        ]
      },
      
  	}
  }
}
