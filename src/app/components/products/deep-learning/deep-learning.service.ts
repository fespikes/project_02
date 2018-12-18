import { Injectable } from '@angular/core';

@Injectable()
export class DeepLearningService {

  constructor() { }

  getProductDetails() {
    return {
      banner: {
        h3: '人工智能',
        h4: '',
        description: 'Sophon打造统一的企业级AI应用平台。提供数据清洗、数据分析挖掘、机器学习、深度学习、模型管理，API部署，工作流调度等功能，助力企业AI时代业务创新与变革。',
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
        // {
        //   text: '组件介绍',
        //   href: 'deep-learning-component-intro'
        // },
        /*{
          text: '费用说明',
          link: './expense-explanation'
        }*/
      ],
      functionalities: {
        title: '产品功能',
        id: 'deep-learning-functionalities',
        diagram: '/assets/images/diagram/deep-learning.png',
        imageWidth: 500,
        content: [
          {
            title: 'Sophon Base 基础模块',
            text: 'Sophon Base作为交互式数据分析挖掘平台，可通过拖拽式操作完成数据导入、数据探索与预览、数据预处理、特征工程、算法选择、模型训练、模型发布、模型管理及分享等建模流程。'
          },
          {
            title: 'Sophon DL深度学习',
            text: 'Sophon DL整合了TensorFlow深度学习框架，帮助数据科学家方便地构建DNN或者CNN、使用更大的数据做模型训练以及提高算法的精准度。Sophon DL 提供Notebook编辑，支持复杂的GPU虚拟化调度。用户可以在Notebook中直接在线编辑并调试深度学习代码，也可以在实验中调解模型参数、自定义网络层级，通过手动拖拽来构建复杂神经网络模型。支持深度学习模型版本管理和模型TensorBoard可视化查看。深度学习模型可在实验建模中使用，部署API和使用工作流进行调度。同步支持script快捷导入和引用Notebook编辑的代码。'
          },
          {
            title: 'Sophon AT高级工具',
            text: 'Sophon AT是Sophon Base的高级扩展模块，主要提供一些高级的人工智能算法以及产品功能，主要包括：自动建模，通过机器自动找到最佳模型；特征提取管理，将常见的特征集成进模板；平台层级的实验、模型、代码、API分享市场，促进协作；实时数据预处理分析，大大提升数据预处理效率；提供更多高级算法：时序算法、推荐系统、图分析图检索等。'
          },
          {
            title: 'Sophon ST智能标签',
            text: 'Sophon ST是智能标签画像模块，主要提供的是在ETL后的数据源中通过规则、复杂SQL以及Sophon Base建模等方式提取标签，并且将标签进行分级管理，同时以高度定制化的方式对人物、产品、事件等实体进行画像展示，为进一步的分析、营销、推荐等做准备。'
          },
          {
            title: 'Sophon CV视频分析',
            text: 'Sophon CV是针对视频图像的存储分析模块，主要包括四大组件：视频图像的存储、压缩与检索，包括以图搜图、人脸比对、图像内容搜索等；视频图像的分析挖掘模块，包括视屏图像的内容挖掘、动作序列挖掘、异常信息抽取等；视频图像数据来源的对接，包括摄像头对接、NVR对接、离线数据源对接、实时数据源对接等；视频图像的实时告警，将Sophon Base训练好的模型导入实时的视频图像流。'
          },
          {
            title: 'Sophon KG知识图谱',
            text: 'Sophon KG是基于文本数据的知识图谱模块，主要包括三大组件：文本基础处理组件，包括语义搜索、NLP基础分析、情感分析等基于Sophon Base NLP能力的扩展；基于图谱的分析组件，包括关联分析、相关性检索、智能问答等；基于图的分析组件，包括担保链分析、社区发现、可达性分析、关键节点分析等。'
          },
          {
            title: 'Sophon IoT智能物联',
            text: 'Sophon IoT是一款物联网模块，主要包括三大模块：边缘端协议整合，包括常见IoT协议以及实时视频传输协议等；边缘设备管理，包括应用分发以及升级、模型分发以及升级、设备状态实时监控等；边缘计算包括图像实时识别处理、传感器数据实时处理等。'
          }
        ]
      },
      advantages: {
        title: '产品优势',
        id: 'deep-learning-advantages',
        content: [
          {
            title: '易用的图形可视化建模操作',
            text: 'Sophon将可视化做到极致，无论是数据的交互式预处理，还是数据清洗特征和建立模型，模型评估，工作流调度，API部署。通过一站式的界面操作，普通的数据分析师和业务人员能够迅速上手机器学习。对于资深的数据科学家，高效率的交互式体验也使得模型精度提升的周期缩短，对于研发人员，拖拉拽操作部署API服务和定时调度，可以与业务系统快速实现融合使用。'
          },
          {
            title: '智能的建模流程',
            text: 'Sophon融合了自动特征，自动建模组件，可以使用户获得系统推荐的较佳算法和参数，快速高效地帮助用户完成完整的数据建模任务，包括数据预处理自动化、特征工程自动化、模型选择自动化和模型调参自动化。'
          },
          {
            title: '丰富的分布式算法',
            text: 'Sophon包含大量分布式机器学习算法，包括常见的分类、回归、聚类、推荐、时序、统计等，还包含大量深度学习算法。此外，还提供了NLP、图像处理以及强化学习等高级算法，满足复杂的业务需求。'
          },
          {
            title: '开放的平台',
            text: 'Sophon支持多种数据源接入、多种数据格式、多种语言接口。用户的底层平台可以选择使用Transwarp TDH，同时也可以自由地选择其他数据源，包括本地数据源、RBD数据源、Transwarp TDH以及Hadoop数据接口，支持Jdbc,Hbase,Hdfs连接；同时，Sophon还提供了R、Python、Spark的集成开发环境，因而具有超强的扩展性和自定义算法的能力，保证应用开发的灵活性。用户可以通过Python或者Scala轻松扩展算法，同时对于整合其他技术或者框架，Sophon提供了通用的算法框架层和算法接口层，用户可以轻松接入。深度学习支持TensorFlow，OpenCV，MxNet，pytorch，coffe等多框架集成。'
          },
          {
            title: '高性能、高效率',
            text: 'Sophon针对开源的算法实现有多达3到10倍的性能优化，对分布式GPU有额外并行化优化。'
          },
          {
            title: '企业级特性',
            text: 'Sophon支持多租户、支持团队间协作、支持实验和模型共享。用户有权限管理资源和进行安全控制。'
          },
          {
            title: '微服务架构',
            text: 'Sophon支持用于容器集群的自动化部署、扩容以及运维的开源平台Kubernetes以及开源的应用容器引擎Docker。有了这些微服务架构，用户可以快速而有预期地部署应用、极速地扩展应用、无缝对接新的应用功能、节省资源，优化硬件资源的使用。'
          }
        ]
      },
      scenarios: {
        title: '应用场景',
        id: 'deep-learning-scenarios',
        tabs: [
          {
            class: '智慧金融',
            text: 'Sophon可对金融业的客户数据、交易数据进行异常检测和识别分析。一方面，我们可实现智能的风险控制，如对公客户借据违约预测、商户套现检测、交易反欺诈等；另一方面，我们还能够方便地部署营销推荐系统，如零售产品推荐、对公产品推荐等。此外，Sophon还可用于客户管理，如用户画像建立、客户流失预警、高价值客户挖掘等，帮助企业打造全方位的智慧金融体系。',
            image: {
              src: '/assets/images/products/scenarios/deep-learning/smart-finance.png',
            }
          },
          {
            class: '精准营销',
            text: 'Sophon可帮助企业构建适用于多个行业的智能营销平台，完成精细的人群标签和客户画像，辅之以智能化数据分析，为企业提供营销策略。Sophon可为金融行业提供客户管理、精准营销和智能风控全链路解决方案；为电商行业提供高效的用户行为分析、智能营销方案、精准产品推荐等。此外，企业还可通过图像识别、语音识别和自然语言处理技术，提升产品的智能交互体验，更完美地达到精准营销的目标。',
            image: {
              src: '/assets/images/products/scenarios/deep-learning/accurate-marketing.png',
            }
          },
          {
            class: '实时监控',
            text: '凭借优秀的流处理和图像处理能力，Sophon可对来自工业监控和交通、公安行业的图像和视频数据进行实时监控，解放了人工巡查所需的人力物力，同时大幅提升了可靠性。在工业监控领域，可对高压输电塔、风力发电机进行火灾或异常情况检测；在交通能源以及公安机构行业，可对行人车辆、森林明火、电线杆鸟巢等进行检测，对人群属性进行分析，排除潜在的安全威胁，实现大规模离线数据分析以及实时图像视频的识别预警。',
            image: {
              src: '/assets/images/products/scenarios/deep-learning/realtime.png',
            }
          },
          {
            class: '智能投研',
            text: '借助知识图谱功能，Sophon可帮助用户完成由大数据驱动的智能投研，极大提升了企业从海量数据中获取关键信息的效率，并降低投资的复杂度。Sophon可智能地处理并呈现投资者关系、挖掘企业经营信息、预测市场反馈，实现数据的自动更新、异动监控和智能提醒，帮助企业做出理性而全面的投资选择。',
            image: {
              src: '/assets/images/products/scenarios/deep-learning/intelligent.png',
            }
          }
        ]
      },
      componentIntro: {
      },

    };
  }
}
