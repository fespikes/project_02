import { Injectable } from '@angular/core';

@Injectable()
export class DeepLearningService {

  constructor() { }

  getProductDetails() {
  	return {
  		banner: {
  			h3: '深度学习',
        h4: '',
  			description: '深度学习产品TDH-DL是用于深度学习和人工智能开发的数据处理平台，帮助企业开发深度学习和AI应用，实现高度智能化的信息处理，将某些投入简单重复劳动中的人力解放出来，协助与增进企业运作管理。',
  			advImage: '/assets/images/products/deep-learning.png'
  		},
  		tabs: [
        {
          text: '产品功能',
          href: 'deep-learning-functionalities'
        },
        {
          text: '产品优势',
          href: 'deep-learning-advantages'
        },
        {
          text: '应用场景',
          href: 'deep-learning-scenarios'
        },
        {
          text: '组件介绍',
          href: 'deep-learning-component-intro'
        },
        /*{
          text: '费用说明',
          link: './expense-explanation'
        }*/
      ],
      functionalities: {
        title: '产品功能',
        id: 'deep-learning-functionalities',
        diagram: '/assets/images/diagram/deep-learning.png',
        //TODO: image style abstraction
        content: [
          {
            title: '可视化的模型创建', 
            text: 'TDH-DL以Sophon为处理引擎，同时引入可视化模型创建工具Midas，使用户通过拖拽数据源对象和运算符就能完成模型设计，实现训练以及预测分析，具有较低的入门门槛。'
          },
          {
            title: '多种语言接口',
            text: '对Java/R/Python语言提供支持，因而具有超强的扩展性和自定义算法的能力，保证应用开发的灵活性。'
          },
          {
            title: '整合多种深度学习框架',
            text: 'TDH-DL整合深度学习框架Tensorflow和MXNet，支持用户生成各种神经网络模型，实现灵活调参和训练，将大数据和人工智能结合起来推动业务创新。'
          },
          {
            title: '丰富的操作和算法支持',
            text: 'TDH-DL提供多种常用的数据预处理操作，包括归一化、离散化、缺失值填充、去重、异常值检测、降维等。支持多种机器学习和深度学习算法，包括分类算法，回归算法，聚类算法，支持关联规则挖掘算法等。'
          },
          {
            title: '文本挖掘',
            text: '支持常见的文本分析算子，包括分词、新词发现、命名实体识别、词向量化、文本向量化以及文本分类等，从而应对非结构化数据分析和挖掘被广泛应用的场景。'
          },
          {
            title: '定制行业模板',
            text: '提供多种行业定制模板，包括精准营销、流失预警、市场购物篮、价格风险分析等，帮助行业应用实现快速部署，只需要进行少量修改就可以快速构建自己的模型。'
          }
        ]
      },
      advantages: {
        title: '产品优势',
        id: 'deep-learning-advantages',
        content: [
          {
            title: '高质量的保证',
            text: '支持多个深度学习框架，提供丰富的深度学习和数据挖掘算法，满足流式机器学习应用开发，同时对算法和应用实现提供极致的处理速度，并将模型的创建过程简化为拖拽的实现方式，在功能、性能、可用性三方面同时达到较高水平。'
          },
          {
            title: '完整的数据挖掘流程支持',
            text: '实现完整的数据挖掘链路，即从数据预览开始，中间经过数据预处理、特征工程、模型训练、结果展示，最终到模型上线的完整过程。在流程的每个步骤中提供充足和方便的算子，供用户灵活实用。'
          },
          {
            title: '强大的企业级特性',
            text: '针对企业级用户，TDH-DL提供了一系列企业级功能保证应用的质量。确保多租户之间和内部资源、模型的共享与隔离，实现权限控制，保证安全性，同时实现高效的工作流调度。'
          }
        ]
      },
      scenarios: {
        title: '应用场景',
        id: 'deep-learning-scenarios',
        tabs: [
          {
            class: '图像识别系统',
            text: '利用TDH-DL提供的深度学习和机器学习算法，在图像中对特定目标对象提取特征，实现识别和追踪，提供对识别精确度、比对准确性、识别速度的保障，构建类似图像分类、物体识别、车牌识别、人脸来访识别等智能化应用。',
            image: {
              src: '/assets/images/products/scenarios/deep-learning/img-recognition-system.png',
            }
          },
          {
            class: '自然语言处理',
            text: 'TDH-DL支持开发自然语言处理应用。提供文档分词、词语收集、词频统计、词语分析功能，实现文档挖掘，关键字提取，词语重要性分析。可用于构建例如自动问答系统、智能翻译、语音识别系统等应用。对于话题管控、舆情监督、敏感词过滤具有重要的应用价值。',
          },
          {
            class: '用户流失预警',
            text: '可以使用TDH-DL对交易数据和互动信息进行算法模型训练，对得到的模型进行评估。分析用户流失情况，流失原因，容易流失客户类型，及时发现信心度下滑的客户，预测即将流失的人群，从而提前采取例如促销、优惠等手段来挽回用户忠诚，降低客户流失率，提升商家业绩。',
            image: {
              src: '/assets/images/products/scenarios/deep-learning/customer-losing-warning.png',
            }
          }
        ]
      },
      componentIntro: {
        title: '组件介绍',
        id: 'deep-learning-component-intro',
        tabs: [
          {
            class: 'TDH平台产品',
            ctn: [{
              title: 'Sophon',
              text: 'Sophon是整合了Tensorflow和MxNet的深度学习框架，并且与Hadoop实现很好的融合，帮助数据科学家方便的构建DNN或者CNN，使 用更大的数据做模型训练，提高算法的精准度。Sophon提供可视化前端Midas，用户可以直接使用拖拽的页面来生成机器学习的模型 以及便捷的执行参数调优工作。Sophon提供了一百多种机器学习的算子，可以满足大部分的机器学习开发需求。',
              link: ''  //TODO: the link goto incepter introduction
            },{
              title: 'Guardian',
              text: 'Guardian为TDH提供集中的安全和资源管理服务。它支持LDAP和Kerberos，保护Hadoop集群免受恶意攻击和安全威胁，而且还可以对资源做细粒度的ACL控制。多租户资源管理模块可以按照租户的方式管理资源，并通过一个图形化工具为用户提供权限配置以及资源配置接口。',
              link: ''  //TODO: the link goto incepter introduction
            },{
              title: 'Hadoop',
              text: 'Hadoop Distributed File System (HDFS) — Apache Hadoop 项目的一个子项目 — 是一个高度容错的分布式文件系统，设计用于在低成本硬件上运行。HDFS 提供高吞吐量应用程序数据访问功能，适合带有大型数据集的应用程序。',
              link: ''  //TODO: the link goto incepter introduction
            }]
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
