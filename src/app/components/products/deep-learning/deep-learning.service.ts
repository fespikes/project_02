import { Injectable } from '@angular/core';

@Injectable()
export class DeepLearningService {

  constructor() { }

  getProductDetails() {
  	return {
  		banner: {
  			h3: '人工智能',
        h4: '',
  			description: 'Sophon提供核心人工智能平台，具备完整的数据分析、机器学习、深度学习以及智能建模等功能，也可以用于业务层面的AI应用的开发与落地。',
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
            title: '数据实时交互式预处理：',
            text: '完善和高效的实时预处理功能。Sophon提供了多达100余种算子，包括但不限于数据清洗、数据规约、数据转换等。用户还可以通过自动化预处理算子来自动化地进行数据处理，同时，通过“高效实时预处理”模块，用户可以通过类似Excel的工具界面对海量数据进行实时的预处理操作，大大提升了数据处理的效果。'
          },
          {
            title: '图形化和可视化及易用性',
            text: '将可视化做到极致，无论是建模过程的拖拽，还是数据预览、模型评估和管理。通过一站式的界面操作，普通的数据分析师和业务人员能够迅速上手机器学习。即使对于资深的数据科学家，高效率的交互式体验也缩短了模型精度提升的周期。在功能设计和界面设计时，始终以平台的易用性作为最高的指导目标。'
          },
          {
            title: '强大的企业级特性',
            text: '针对企业级用户，Sophon提供了一系列企业级功能，保证应用的质量。确保多租户之间和内部资源、模型的共享与隔离，实现权限控制，保证安全性，同时实现高效的工作流调度。'
          },
          {
            title: '微服务架构',
            text: '支持用于容器集群的自动化部署、扩容以及运维的开源平台Kubernetes以及开源的应用容器引擎Docker，有了这些微服务架构，用户可以快速而有预期地部署应用、极速地扩展应用、无缝对接新的应用功能、节省资源，并优化硬件资源的使用。'
          }
        ]
      },
      scenarios: {
        title: '应用场景',
        id: 'deep-learning-scenarios',
        tabs: [
          {
            class: '风险监测',
            text: '在Sophon平台上，我们可以对数据进行算法模型训练。无论是金融业的交易数据，还是交通公安行业中的图像视频数据，都可以使用Sophon进行异常检测和识别分析。在金融领域，可实现对公客户借据违约预测、商户套现检测、交易反欺诈等；在交通能源以及公安机构行业，可对行人车辆、森林明火、电线杆鸟巢等进行检测，对人群属性进行分析，排除潜在的安全威胁，实现大规模离线数据分析以及实时图像视频的识别预警。',
            /*image: {
              src: '/assets/images/products/scenarios/deep-learning/img-recognition-system.png',
            }*/
          },
          {
            class: '智能营销',
            text: 'Sophon帮助企业构建适用于多个行业的智能营销平台，完成精细的人群标签和客户画像，辅之以智能化数据分析，为企业提供营销策略。Sophon可为金融行业提供客户管理、精准营销和智能风控全链路解决方案；为电商行业提供高效的用户行为分析、智能营销方案、精准产品推荐等。此外，企业还可通过图像识别、语音识别和自然语言处理技术，提升产品的智能交互体验。',
          },
          {
            class: '智能预测',
            text: 'Sophon的智能建模和行业模板可帮助企业进行战略分析，增加收入，减少成本，并提高客户满意度。企业可从海量数据中获得洞察力，创造智能的、主动的客户交互通路。Sophon还可用于金融行业的产品评估与客户行为预测、电商和电信行业的客户流失分析、智能投研、媒体行业、政府舆情监控等领域。此外，Sophon也可应用于对环境、科研方面的要素进行预测与监控。',
            /*image: {
              src: '/assets/images/products/scenarios/deep-learning/customer-losing-warning.png',
            }*/
          }
        ]
      },
      componentIntro: {
      },

  	}
  }
}
