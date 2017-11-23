import { Injectable } from '@angular/core';
import { Scenario } from './scenario/scenario';

const base = '/assets/images/scenarios/'
const bannerBase = base+ 'scenario/banner/';
const backgroundBase = 'scenarios/scenario/background/';

let scenarios: Scenario[];
//TODO: add back all scenario contents

@Injectable()
export class BusinessScenariosService {

  private scenarios: Scenario[];

  constructor() {
    this.scenarios = scenarios;
  }

  getRoute() {
    return {
      short: '业务方案',
      href: '/business-scenarios'
    };
  }

  getScenarios() {
  	return this.scenarios;
  }

  getScenarioByType(type: string): Scenario[] {

    return this.scenarios.filter( _ => _.type===type );
  }

  getScenarioById(id: number): Scenario[] {
    return this.scenarios.filter( _ => _.id===id );
  }
}

scenarios = [
  {
    id: 1,
    type: 'data-warehouse',
    screenshot: base+ 'data-warehouse'+ '.jpg',
    short: '数据仓库',

    title: '数据仓库 业务方案',
    slogan: '一站式数据仓库服务解决方案，实现数据采集、数据整合、模型加工、数据管理等完备的一体化数仓功能，支持对于查询速度、并发度、扩展性的保障。可广泛应用于电信、金融、互联网等行业。',

    adv: bannerBase + 'data-warehouse.jpg',
    advBgColor: '#001740',

    details: [
      //'business-background':
      {
        title: '业务背景',
        desc: [
          {
            p: '某国企是系统非常庞大组织十分复杂的集团，其下属机关遍布于全国31个省（自治区、直辖市）、地、市（州）机构，提供多种类型服务，涵盖面广，差异性大，数据丰富且特征广泛。'
          },
          {
            p: '该客户拥有丰富的客户资源，和海量的数据积累。业务对接单位多，数据种类多，类型复杂，数据的基数大增量大，且分散。在这样的数据特征下，为了更加有效且系统性的管理企业数据，实现快速的数据统计分析。该集团希望构建出一体化的大数据分析平台，开发数据资源，构建数据分析应用机制，实现快系统的信息集成，提供多种类型且强大的数据分析。'
          },
          {
            p: '该分析系统作为经营管理信息系统的重要组成部分，以及重要的收入稽核管理系统。需要能够利用企业内部信息资源，自动采集各业务系统内外部信息，提供查询分析、固定报表分析、绩效分析、多维分析、自定义分析、预警稽核、历史数据分析、统计报表管理八大功能，为各级管理层对数据多角度的分析、监控和稽核，提供及时、准确和可靠的工作平台。'
          },
          {
            p: '该客户对分析平台功能的主要诉求主要分为以下两类：',
            h4: '海量数据的存储',
            aspects: [
              '1. 构建企业统一的信息单一视图，实现结构化、半结构化和非结构化数据的统一管理和分析；',
              '2. 跨越多个系统，实现数据集成和共享，解决信息孤岛问题，形成基础数据体系，提供支撑经营管理的各类数据应用。'
            ]
          },
          {
            h4: '强大全面精准的分析能力',
            aspects: [
              '1. 建设离线数据分析、面向分析主题的数据仓库和各类数据分析集市，提供高性能可扩展的分布式计算引擎。',
              '2. 通过数据挖掘、计量分析和机器学习等手段，对丰富的大数据资源进行开发使用，并将数据决策化过程结合到风控、营销、营运等经营管理活动。'
            ]
          }
        ]
      },
      //'core-issues':
      {
        title: '核心问题',
        desc: [
          {
            h4: '数据共享不足',
            summary: '这样一个企业系统，存在着由各种因素形成的数据板块，如上下级单位构成的板块，由业务类型不同导致的板块。部门隔离造成的数据壁垒，导致系统数据共享不足，形成数据孤岛，无法实现企业数据的充分有效利用。为了获取跨部门跨层级的信息，需要单位向上级申请数据资源，经过层层审批，等到可以拿到数据用于分析时，已经损坏了信息的时效性，应实现数据的全面整合。'
          },
          {
            h4: '非/半结构化数据利用率低',
            summary: '原有存储系统主要对结构化数据的采集、存储、计算和应用提供支持，而对图档、文档、日志等非结构化数据的支持性不强。非/半结构化数据具有类型多、体量大、价值密度低的特点。即便是使用传统集中式的方式实现对此类数据的存储，也存在检索效率低下的问题，使大量非结构化数据资源被闲置，使隐于其中的大量信息未能得以揭示。'
          },
          {
            h4: '系统性能问题',
            summary: '一些企业原本采用传统数仓构建数据分析平台，但随着管理要求的不断提高，业务扩增，组织结构的扩张，传统数据仓库数据处理能力已捉襟见肘。首先随着数据量的指数级增长，OLAP的高并发灵活度受限，查询报表延迟过高，不能满足交互分析的需求。其次，数据批处理任务性能低下，不能在时间窗口内完成ETL。另外，在混合负载情况下，无法实现作业通道专用，造成任务阻塞，导致系统性能骤降。'
          },
          {
            h4: '数据质量低',
            summary: '原有的数据平台缺少对数据质量的管理，因此录入数据存在如冗余、安全性差、一致性不足等各种数据质量问题。使得基于这些数据得到的分析结果准确度不高可靠性不强。提供工具对录入数据进行清洗，并建立有效的数据管控体系。把控数据质量。'
          }
        ]
      },
      //solutions:
      {
        title: '解决方案',
        adv: {
          url: backgroundBase + 'data-warehouse.png',
          width: '450px',
          height: '250px'
        },
        desc: [
          {
            p: '采用TDH-DW数据仓库方案为邮政系统实现基于数仓的一站式数据分析平台，解决量收系统构建时以及建成后在使用中的业务痛点。'
          },
          {
            h4: '统一的数据存储',
            summary: '通过ETL工具Transporter跨系统的抽取邮政各个业务部门核心库数据，做清洗加工后，统一由Inceptor存储在HDFS、Holodesk、Hyperbase、KunDB各种存储之上，实现数据集成和共享。Inceptor作为统一的SQL引擎，用于操作各类数据源，支持通过SQL DML语句在各个存储引擎中定义元数据，同时允许在多种数据源之中进行交叉查询。打通不同系统之间的数据的壁垒，实现数据灵活自由的流转，构成统一的数据平台。'
          },
          {
            h4: '多样的计算服务',
            summary: '通过分析型数据库Inceptor进行数据计算处理，利用其提供的统一的多方言SQL接口，在同一平台上应对批处理、流处理、综合查询、图分析等多种应用场景。Inceptor提供事务语义支持和事务全局分布式支持，可以确保增量数据的高度一致性。利用Hyperbase做数据存储层，处理半/非结构化数据的同时兼顾海量数据的快速入库和高并发查询。'
          },
          {
            h4: '卓越的计算性能',
            summary: '不同于MPP，用Inceptor构建的数据仓库，无需数据重分布，计算不易受数据倾斜影响。同时实现容错调度机制。性能几乎可以成线性的扩展，可以处理PB级数据。此外，Inceptor提供混合负载管理，通过抢占式调度，优化的资源调度策略，根据任务的优先级和负载量分配不同的专用调度通道，提供用户/作业级别的SLA保证，在混合负载场景下依然能提供优秀的性能。'
          },
          {
            h4: '可靠的数据质量',
            summary: 'TDH-DW中融入了多种工具以及功能，减少引入错误、冗余、缺失、噪声数据以及它们带来的影响，全方面保障数据质量，提升决策可靠性。首先当数据进入数仓是利用工具Transporter进行数据清洗，在入口对数据质量把关；其次在执行计算时，通过Inceptor的数据稽查能力，减弱错误数据的影响。'
          }
        ]
      },
    ]
  },
  {
    id: 2,
    type: 'realtime-computation',
    screenshot: base+ 'realtime-computation'+ '.jpg',
    short: '实时计算',

    title: '实时计算  业务方案',
    slogan: '云上的流处理分析平台，可对流数据进行实时采集和实时处理。为企业构建实时数据仓库，开发多种在线实时应用，实现对流式信息的充分利用。可以被广泛用于交通运输和物联网行业。',

    adv: bannerBase + 'realtime-computation.jpg',
    advBgColor: '#0a162d',

    details: [
      {
        title: '业务背景',
        desc: [
          {
            p: '随着经济迅猛发展，地方交通越来越繁忙，机动车辆不断增加，政府需要通过机动车缉查布控系统对过往车辆进行监控管理，从而提供更好的交通服务。为此，公安交警通过借助缉查布控系统实现全国联网，满足各级公安交通管理部门大范围车辆缉查布控和预警拦截、车辆轨迹和交通流量分析研判、交通违法行为甄别查处等业务应用，为预防和减少道路交通事故、打击违法犯罪工作提供技术支撑。'
          },
          {
            p: '交通部门采用了数据驱动的方法，在市内重要检查点安装了上千台数字监控设备，这些设备7×24小时不间断捕获图像和视频数据，每月数据量达TB级。现在，交通部门面临着如何有效利用这些不断增加的实时交通信息数据，进而改进交通管理的挑战。'
          },
          {
            p: '按照数据中心向信息化演进的需求，对于上述问题场景应该运用安全可控、成熟稳定的云计算、大数据技术架构，改造并完善交通信息中心技术体系架构，提供超强的计算能力、超大的存储能力以及超级稳定的运行平台，处理大量实时采集的过车数据，提升信息中心信息化基础设施的服务能力，建设“敏捷、高效、安全、可靠、节能”的警务云数据中心。'
          }
        ]
      },
      {
        title: '核心问题',
        desc: [
          {
            h4: '大量的实时数据处理',
            summary: '当实时数据数量很大的时候，传统的数据传输机制已不能满足大数据量的过车信息上传。实时数据上传受到阻碍，导致积压，难以提供实时的信息和数据分析，无法满足及时预警的需求。必须能够解决此问题，尽可能长时间的处理车辆监控数据，确保实时比对效率，为市公安治安、刑侦、经侦部门人员及一线民警等提供信息支撑服务。'
          },
          {
            h4: '低效的海量非结构化数据查询',
            summary: '交通部门采集的信息数据通常由大量非结构化的数据构成，如图片、视频等。对于海量多结构数据存储而言，传统关系型数据库的处理效率并不高，只能处理千万级数据，虽然可以通过分区后将支持的数据量提升至10亿以内，但是当过车信息达到百亿级别时，已束手无策，无法实现基本的查询统计功能。'
          },
          {
            h4: '分散的交通数据',
            summary: '在进行车辆追踪时，尤其是打击违法犯罪行为的案件中，交通部门往往需要跨越市级调取交通监控信息。稽查系统必须能对分散在不同的支队数据中心的图像或视频等交通数据提供集中的访问接口。提高对各种交通突发事件的应急调度能力，依据存储的历史数据预测交通或突发事件的趋势。'
          },
          {
            h4: '存储扩容',
            summary: '随着实时数据量的增长，交通信息系统必定面临架构扩容的问题，所以务必要保证有效的系统架构扩容，提供避难系统稳定性存储扩展，提高集群节点数量，解决扩容时需要中断业务等问题。进而增强交通警察对机动车辆的监管能力。'
          }
        ]
      },
      {
        title: '解决方案',
        adv: {
          url: backgroundBase + 'realtime-computation.png',
          width: '450px',
          height: '228px'
        },
        desc: [
          {
            p: '用星环实时计算产品搭建机动车缉查布控系统，可以以公路车辆智能监测记录系统为基础，将卡口车辆通行信息进行汇聚，实现车辆轨迹的查缉。同时系统将通行信息和布控信息进行对比，产生预警后，路面民警对预警车辆进行拦截处置，为全国性应用系统。'
          },
          {
            h4: '高并发数据传输',
            summary: '该缉查布控系统利用Kafka进行消息传递，通过Slipstream实时流处理消费Kafka内的过车数据。该系统中的单服务器允许平均每秒250次500KB尺寸图片同步传输，或2000次异步并发存储。',
          },
          {
            h4: '高效存储',
            summary: '实现基础过车结构化数据的永久存储，机动车违法图像信息在系统的保存周期从3个月延长到24个月，交通警察等部门可根据车辆的颜色、车型、号牌等信息实时查询其历史行为、行车路线和车辆营运公司、驾驶人等关联信息，提升交通案件侦破能力。',
          },
          {
            h4: '极速的分析',
            summary: '对于24亿条实际过车数据进行两卡点、多卡点的伴随车辆和碰撞车辆的复杂分析，该系统的查询耗时仅为10秒左右。不到1秒即可得到从24亿条过车数据中的机动车号牌查询出的精确结果和行车轨迹。增强了交通警察对机动车辆的监管能力。',
          },
          {
            h4: '有效的非结构化数据查询',
            summary: '使用TDH存储管理多源异构的海量数据，基于Hyperbase、Search进行灵活的综合查询，海量数据下提供秒级返回性能。每日可接入几亿过车数据，对实时过车记录进行实时流处理的对比研判，使得假套牌、无牌、逾期未年检、未报废、违规未处理等重大隐患车辆难以得到及时预警监管。',
          }
        ]
      }
    ]
  },
  {
    id: 3,
    type: 'info-retrieval',
    screenshot: base+ 'info-retrieval'+ '.jpg',
    short: '信息检索',

    title: '信息检索  业务方案',
    slogan: '用信息检索产品打造企业级搜索引擎，以毫秒级的响应速度完成PB级别的高速全文检索。构建一站式内部搜索平台和信息检索服务，打造便捷高效的集中式金融监管中心。',

    adv: bannerBase + 'info-retrieval.jpg',
    advBgColor: '#022754',

    details: [
      {
        title: '业务背景',
        desc: [
          {
            p: '作为金融监督的重要组成部分，银监局需要负责各金融业及其分支机构的设立、监督、管理、审计，负责统一编制全国金融机构的数据报表，以及一些金融机构监事会的日常管理。这些任务涉及众多机构的数据，具有数量多、规模大、种类多、分布广的特点。为了对金融机构进行监管和审查，银监会从各个地方机构采集数据汇入管理中心，同时各个机构需要向数据中心上报数据信息，并需要通过数据平台实现快速检索查询。'
          },
          {
            p: '近年来，互联网、大数据、云计算等技术得到快速发展，信息科技在该过程中发挥了极其关键的作用。银监会希望也能够受益于科技的发展与进步，将信息科技深耕于监管部门数据系统，从而克服原有平台中例如无法及时获得上报数据，检索数据效率低，数据收集不完整，系统扩展性不好，数据孤岛等问题，填充原有系统的上升空间，支撑起更好的信息管理能力，增强机构监管水平，提高服务质量。'
          }
        ]
      },
      {
        title: '核心问题',
        desc: [
          {
            h4: '不能充分利用数据',
            summary: '不能灵活应用数据体现在历史数据与现场数据存在间隙，二者无法灵活互助支持。进行检查时系统不能提供快速的及时有效的检索，资料与数据不足，导致难以结合历史信息，找对准确的检查点。同时，系统存储的监管信息不能通过现场的检查情况获得完善与补充，而且只能进行比较简单的分析，不能针对现场情况产生高价值的分析结果。'
          },
          {
            h4: '不能实现灵活监管',
            summary: '不同金融机构由于其所处地理位置，发展状况的不同，具有不同的特征和特点。因此有效的监管方式应当是结合各机构的具体情况，根据各自不同的风险程度提供不同级别和不同方面的监管。然而原有的监管系统，对于各机构的差别和细化不同，全面采用相同的监管方式，导致对有些机构监管力度不足，然而却对另一些机构未能投放足够的监管资源。'
          },
          {
            h4: '无法提供高级分析',
            summary: '系统对于数据的分析仅仅只停留在按需分析的层面上，水平较低，难以有效应对高维度零碎化的数据，很多问题只有当分析人员进行针对性检查时才能够暴露出来，不能及时第一时刻发出预警，导致问题未能及时解决。'
          }
        ]
      },
      {
        title: '解决方案',
        adv: {
          url: backgroundBase + 'info-retrieval.png',
          width: '450px',
          height: '192px'
        },
        desc: [
          {
            p: '采用星环云产品构建的银监采集系统能够收集全国各个分支机构的结构以及非结构化数据，并从其他丰富的数据源中汇集信息进行搜索分析。这些数据将进入TDH平台，使用者可以通过大规模数据搜索引擎，从海量数据中高速检索目标数据，结合数据挖掘产品实现智能分析。'
          },
          {
            h4: '逻辑架构',
            aspects: [
              '数据源：进入银监平台的数据来源主要为三部分——省级各金融机构的EAST报送数据，通过爬虫从全国各省银监局网站爬取的数据，以及来源于原先关系型数据库的指标数据。通过这样的结构保证数据的全面性，消除数据孤岛，实现真实客观的分析。',
              '数据交换：省级各金融机构报送的EAST数据上传到银监局的服务器，服务器将该数据目录作为共享文件夹，挂载到集群某个节点，以供银监平台使用。',
              '应用层：可视化的数据分析与信息搜索平台，作为业务访问的最主要入口。',
              '业务层：以可视化操作平台为入口，以Search、Hyperbase以及Inceptor中的数据为数据基础，通过数据挖掘产品实现对内网资源、监管信息、企业关系图谱及各类指标、报表的查询需求，提供高级智能、可预警的数据分析。'
            ]
          },
          {
            h4: '数据流转过程',
            aspects: [
              '数据进入Inceptor，按照主题进行细化管理。各金融机构报送数据以数据文件方式导入Inceptor TEXT外表，各个机构同类数据（如各银行报送的表内营业状况表）合并导入Inceptor ORC表，随后进行加工处理。',
              '银监局从关系型数据库导入指标数据和报表数据至平台，同时还会将报送数据导入关系型数据库。过程中保证顺畅的数据流通，历史数据与现场数据相互支撑与完善。',
              '使用爬虫工具从地方银监局官网爬取数据，进行数据处理与整理，并将整理后的数据导入Hyperbase，对应的索引信息存入Search，提供高性能的搜索服务，实现所需立即可得。'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 4,
    type: 'data-mart',
    screenshot: base+ 'data-mart'+ '.jpg',
    short: '数据集市',

    title: '数据集市  业务方案',
    slogan: '实现数据集市构建，对接数据分析业务，提供包括交互式分析、数据立方体、任务调度在内的工具以及功能，实现自动化的报表应用构建和自助式的多维度探索。可应用于客户分析、营销分析等维度分析场景。',

    adv: bannerBase + 'data-mart.jpg',
    advBgColor: '#082236',

    details: [
      {
        title: '业务背景',
        desc: [
          {
            p: '某客户公司在对销售情况进行分析时，业务部门专业的数据分析人员结合利用数据做报表分析，挖掘分析证明展示分析结果。在此之前该公司用的是基于关系型数据库的传统BI工具构建，但是使用传统BI工具的过程会遇到各种问题，影响用户的使用体验和效率：当数据量较大时，处理速度慢交互性差，而且在制作的报表时，经常会遇到需求变化，后者有新需求产生，而传统的BI工具由于已经经过提前的定制，当变化产生时，难以灵活应对。'
          },
          {
            p: '由于该公司的经营决策较强的依赖于过去的销售和营销情况，因此必须实现迅速、及时且准确的数据分析，分析结果必须要可靠直观具有可信力，另外客户、市场都处在不断变化的状态下，所以分析平台要足够灵活，可以实现用户租住可定制，避免数据分析收到报表模式的限制。该企业由不同的部门构成，每个部门面向的业务和对象不同，关注和侧重点不同，也可能从其他部门的数据中获得价值信息，因此必须根据数据和业务的应用，兼顾这些要点，合理将数据组织为方便查询的模式。'
          },
          {
            p: '所以，该客企业希望能构建更加自助数据接入与分析平台，基于原有数据仓库中的既有事实表和维度表，构建数据集市，使专门的业务人员与部门自助建立分析模型，进行OLAP交互分析，实现商业智能的应用。同时为了适应多层次的企业组织，必须允许将不同的异构系统数据接入平台，保证充足全面的数据供应。'
          }
        ]
      },
      {
        title: '核心问题',
        desc: [
          {
            h4: '延时长',
            summary: '在该公司的原有系统中，当业务部门需要进行报表时，需要经过这样的流程：业务部门人员向科技部门的同事发出数据需求申请，如果目前存在对应报表系统，由系统层授予报表使用权限；若没有则必须由技术人员提取数据、新建系统然后创建报表，再由系统层授权。该流程存在的重要问题是，一个数据流转时间长，中间过程耽误的时间较久，由于市场随时处于变化中，所以需要对市场变化的敏感程度强，有损数据的价值。'
          },
          {
            h4: '数据一致性问题',
            summary: '由类型不同的业务和部门，隔离造成了数据之间的壁垒，导致系统数据共享不足，形成数据孤岛，无法实现企业数据的充分有效利用。数据存放在不同系统中很容易引一致性问题，同时还存在数据被重复建设的可能。必须将数据进行统一存放管理，处理不一致数据，同时统一管理有助于提升数据安全。'
          },
          {
            h4: '分析性能有限',
            summary: '数据集市下的分析通常都围绕数据立方体的处理进行，往往涉及表之间较复杂的操作，如表的关联、多维的聚合。在实现这些计算时，传统的数据集市受其计算能力的限制，在数据量大的场景下难以提供足够的计算性能，计算时间较长，不能满足快速响应的应用及报表交互分析需求。'
          },
          {
            h4: '灵活度不足',
            summary: '采用由技术人员的帮助去完成分析的方式，会因沟通不足理解偏等问题或者仅仅因产生了需求的变化，而造成业务人员最终拿到手的报价报表并不理想。而且报表应随时可见，灵活可变，而不是像传统方式只能按照固定字段进行快速查询。在分析不同问题时，不同了类型的报表可以突出不同的问题。传统报表工具可所提供的报表形式单一，不能满足灵活的分析需求。业务人员在进行数据分析时，最理想的情况应该是自己选择感兴趣或者关注的要点，根据需求将分析下沉至数据中。这样才能够真正实现企业高效化的管理。'
          }
        ]
      },
      {
        title: '解决方案',
        adv: {
          url: backgroundBase + 'data-mart.png',
          width: '450px',
          height: '232px'
        },
        desc: [
          {
            p: '采用TDH-DW数据集市方案，可以为该客户实现基于数据集市的自助式智能分析分析平台，攻克传统商业智能应用中的固有问题与缺陷。'
          },
          {
            h4: '一站式数据管理',
            summary: '通过构建一站式平台实现统一的数据管理，底层采用统一的存储，基础数据统一存放，全局一致。消除数据下发过程，不再需要进行数据多次拷贝，影响效率，同时避免重复建设数据。所有员工不论所属部门以及所属地域都可以在同一个平台上进行数据分析，意味着所有的成员都面对一个同样的仓库，只要获得授权就可去访问数据，提升了用于分析的数据的多样性。'
          },
          {
            h4: '提升分析性能',
            summary: 'TDH-DM将Inceptor作为计算引擎，通过基于内存的统计分析能力，使效率成百倍提升，减少计算时间。另外通过将列式存储引擎Holodesk用作存储器，使实现计算下沉至存储层，带来的性能加速。为亿级别的数据的关联汇总，探索分析，模式变化。提供Rubik实现通过OLAP Cube的方式，加速多维分析，得以轻松的通过不断改变维度或度量分析数据的分布以及趋势。'
          },
          {
            h4: '数据安全保障',
            summary: '利用Guardian提供的安全保护，实现行/列级权限控制，通过库级表级权限进行主题控制，利用列级权限控制敏感数据，通过行级权限实现分行权限管控，保证即使同时处于一个存储与平台下，也可以通过对于权限的把控，控制每个用户的数据访问范围，通过赋予不同的安全级别，实现数据隔离与共享。租户控制。'
          },
          {
            h4: '简单的报表创建',
            summary: '在数据可视化的过程中Spark扩展支持大量的可视化及报表生成工具，如 Tableau，SAP Business Objects，Oracle Business Intelligence等，业务人员通过简单的拖拽既可定制个性化报表，跳过了数据准备的工作环节。同时提供JDBC/ODBC接口，报表工具连接快速展现反馈的分析结果。所有环节都无需科技部门支持，减少过程流转。使得基于大数据分析的商业决策更易被理解和接受，从而将大数据的潜在价值最大化。'
          }
        ]
      }
    ]
  },
  {
    id: 5,
    type: 'analysis-mining',
    screenshot: base+ 'analysis-mining'+ '.jpg',
    short: '数据分析与挖掘',

    title: '数据分析与挖掘  业务方案',
    slogan: '提供数据清洗、特征工程、建模平台和工具集，丰富的机器学习算法和多种行业模型，方便探索对象属性和行为之间的关系，从数据中发现蕴含价值。',

    adv: bannerBase + 'analysis-mining.jpg',
    advBgColor: '#012d52',

    details: [
      {
        title: '业务背景',
        desc: [
          {
            p: '随着消费方式和消费渠道的变化，消费观念也在发生转变，使得现代营销与传统营销之间产生差异。现代营销更加以用户的需求为导向，以用户的消费需求为出发点，同时强调对潜在消费需求的发现。通常期望一个优秀高效精准的营销分析系统能够帮助解决如下问题：'
          },
          {
            p: '通常期望一个优秀高效精准的营销分析系统能够帮助解决如下问题：',
            aspects: [
              '获客——如何精确快速地获得该业务对应的客源，精准定位有新业务需求的客户群体，采用正确的渠道实时营销，提高响应率；',
              '活客——如何利用分析系统，挖掘客户潜在需求，实现有效的智能推荐、交叉销售、向上销售，提高广告转化率，扩大客户边界；',
              '留客——建立客户流失预警，在早期预测出未来将要流失的重要客户，对其进行相应的营销活动，挽回客户，提高客户价值。'
            ],
          },
          {
            p: '为了迎合现代营销的需要，满足上述需求，从海量的消费数据中挖掘信息进而达到精准化的营销将成为关键，传统数据管理架构在这样海量且即时变化的数据场景下已无能为力，而各种数据挖掘技术将当仁不让地成为业务支撑的关键技术，在营销推广、客户关怀等众多环节发挥战略作用。'
          }
        ]
      },
      {
        title: '核心问题',
        desc: [
          {
            h4: '数据稀疏问题',
            summary: '在业务刚刚开展处于起步阶段时，手头的数据十分稀疏，达不到数据分析的要求，应该如何进行第一批“冷启动”。另外，某些产品的利润很高，但是业务数据量很少，难以有效拓展数据做挖掘。'
          },
          {
            h4: '如何使用相似数据资源',
            summary: '如何将一个领域的数据运用在其他的领域的挖掘中，或者如何把一个平台上收集到的数据信息运用在其他方面的分析，也是营销平台应该考虑的问题。例如，通过分析用户的产品交易记录，将结果运用到理财业务和卡分期业务中；如何利用用户的各项访问记录来做分析与产品推荐。'
          },
          {
            h4: '正负样本极度不均衡',
            summary: '正负样本比例极度不均衡，正样本或负样本欠缺甚至没有，都将导致无法使用有监督分类学习方法，难以保证预测结果的可靠性。'
          },
          {
            h4: '标记数据欠缺',
            summary: '对于海量非结构化数据，在进行有监督的学习方式时，为了有效处理数据，需要提前做数据标记，对所有的数据都进行标记的话，要求执行标记的人员有深厚的领域知识，且将耗费大量的人力资源。因此需要系统可以仅根据部分的人为标记，就能对其他未标记的数据做预测，从而保证完整的数据预测。'
          }
        ]
      },
      {
        title: '解决方案',
        adv: {
          url: backgroundBase + 'analysis-mining.png',
          width: '450px',
          height: '331px'
        },
        desc: [
          {
            p: '深度学习与挖掘产品构建的智能营销平台，包含数据库引擎和数据挖掘引擎两部分主要功能模块。数据库引擎提供与数据仓库的交互、分析，数据挖掘引擎提供丰富的数据挖掘、机器学习算法。共同实现客户画像分析、客户终身价值评估、精准客源营销、个性化推荐功能。'
          },
          {
            h4: '强大的分布式算法库',
            summary: '具备海量数据处理和分析能力，拥有前沿的跨域迁移学习、深度学习、数据挖掘等算法，以及各种成熟的应用模型，如客户终身价值，精准客源营销、个性化商品推荐等。能够解决处理数据稀疏、正负样本极度不平衡等问题。'
          },
          {
            h4: '用户画像、客户标签库',
            summary: '构造企业客户的信息生态系统，支持跨业务、产品的精准客户群查询和分析。实现用户标签运营管理功能，包括标签应用，标签管理，标签运营，权限管理等。系统依托于用户画像及客户终身价值模型，针对不同业务，快速定位和管理。'
          },
          {
            h4: '及时准确的营销分析',
            summary: '识别潜在客户、活跃客户、流失客户。针对不同的客户群体采取不同的精准客源营销手段，短信营销、邮件营销、电话营销。提供客户精分，客户终身价值预测，客源营销管理，以及个性化推荐等丰富的智能营销应用。'
          },
          {
            h4: '简单规范的交互接口',
            summary: '提供丰富的 API函数，用户通过客户端使用Rest API与系统服务端进行数据交互。并且实现统一的REST应用访问接口，支持外部算法模型和应用系统。'
          }
        ]
      }
    ]
  },
  {
    id: 6,
    type: 'deep-learning',
    screenshot: base+ 'deep-learning'+ '.jpg',
    short: '深度学习',

    title: '深度学习  业务方案',
    slogan: '开发深度学习和人工智能平台，将图像识别技术投入交通监控应用，帮助交通部门实现高度智能化的交通监控与信息处理，把投入车辆识别的人力解放出来，提高交通监管的精准度与效率。',

    adv: bannerBase + 'deep-learning.jpg',
    advBgColor: '#001436',

    details: [
      {
        title: '业务背景',
        desc: [
          {
            p: '视频监控系统已成为城市环境中的一种标准做法，旨在帮助协调应急响应，引导交通，并加强公民的人身安全。'
          },
          {
            p: '机动车数量迅猛增长，交通监管水平跟不上，许多肇事者企图利用道路交通监管系统的疏漏钻空子，引发交通违规案件大幅增加。我国机动车保有量极大，在这样的环境下，道路交通不受统一的调度、行车轨迹复杂，这些客观原因都使得道路交通难于管理、车辆肇事难以扼制。所以，如何改善交通犯罪频发的现状，正是目前亟待解决的问题。'
          },
          {
            p: '为了增强监管的力度，填补路面交通管理漏洞，城市交管部门希望引入自动化图像自动识别技术，实现智能式的交通监管。通过图像智能识别，对道路情况进行判断，对车牌进行识别，对目标车辆进行识别与跟踪，真正实现安全智能的交通路面管理。'
          }
        ]
      },
      {
        title: '核心问题',
        desc: [
          {
            h4: '车牌识别率低',
            summary: '一些识别系统对于光线、角度、照片清晰度的敏感度较高，导致对车牌的识别度低，需要采用更能适应不同环境与场景的算法。'
          },
          {
            h4: '难以提供高效视频分析',
            summary: '当前端摄像头采集到嫌疑车辆的图像时，需要快速的对采集到的图像做出分析，判断车辆属性，从而帮助公安人员决定下一步行动。'
          },
          {
            h4: '视频数据存储系统',
            summary: '每个前端摄像头的码流速率在6Mbps以上，势必会在后台分析系统中产生海量的数据，因此要依靠可靠的后台分析系统来处理大规模数据。'
          },
          {
            h4: '访问吞吐带宽小',
            summary: '原有系统视频存放在集中式的存储，当需要大范围查询、调用时，存储系统带宽成为整个系统的瓶颈，妨碍查询业务的实现。'
          }
        ]
      },
      {
        title: '解决方案',
        adv: {
          url: backgroundBase + 'deep-learning.png',
          width: '450px',
          height: '198px'
        },
        desc: [
          {
            p: '采用基于Hadoop集群的大规模分布式深度学习平台，助力构建交通识别系统，能够在海量数据中实现高性能且精确的车辆对象识别，以及车牌识别，从而实现智能精准的交通监管。'
          },
          {
            h4: '图像精确识别',
            summary: '该平台提供深度学习和机器学习算法，在图像中对特定目标对象提取特征，实现识别和追踪，提供对识别精确度、比对准确性、识别速度的保障，构建车辆、车牌识别的智能化应用。'
          },
          {
            h4: '高吞吐',
            summary: '整体架构基于Hadoop集群实现，可以创造比传统数据库高5倍的性能，分析耗时更短。HDFS分布式文件系统的访问带宽是整个网络的聚合带宽，所以总带宽可达几百Gbps以上，完全消除了视频存储的访问带宽限制。集群中的各服务器既是计算节点又是存储节点，因此能够实现存储位置感知，将任务分配到视频所存储的节点之上，充分利用本地硬盘带宽，使访问吞吐进一步提高。'
          },
          {
            h4: '高可用的系统',
            summary: '该系统还提供可靠的数据检查，在执行较长时间的视频搜索任务时，如果主用任务调度器发生故障，备用任务调度器会自动接替，使搜索任务避免失败。当个别搜索任务失败时，任务调度器可以在集群中的另一个节点上自动重试。'
          }
        ]
      }
    ]
  },
  {
    id: 7,
    type: 'relational-database',
    screenshot: base+ 'relational-database'+ '.jpg',
    short: '关系数据库',

    title: '关系数据库  业务方案',
    slogan: '构建企业内部关系数据库服务，处理OLTP业务。支持复杂的SQL查询，提供高稳定、可扩展、强一致的数据处理。可以应用于创建跨越省市、跨多层下级机关的联网警务OA系统。',

    adv: bannerBase + 'relational-database.jpg',
    advBgColor: '#001945',

    details: [
      {
        title: '业务背景',
        desc: [
          {
            p: '公安机关是政府的重要组成部分，在打击违反犯罪、保障国家安全方面做着不懈努力。随着信息科技在政府内部的不多发展与深入，为了有效的利用警务资源，减少机关运作成本投入，需要构建全面自动化、信息化的警务OA系统。该平台收集各下属机关和单位的上传数据与提交信息，因此将存储大量公民信息与犯罪记录等关键信息，是警务数据管理的核心。'
          },
          {
            p: '由于公安机关结构复杂、处理案件多、请求频率高，系统务必提供高并发支持，同时实现跨省市、跨部门、跨警种的信息共享，保证各部门之间的信息联网互通，构建完整的数据资源库，增强请求响应速度与信息处理能力。此外，平台需提供统一的资源访问入口，就是说不论从任何节点访问资源库都可以得到相同的内容。因而在构建时必须保证数据一致性不受空间位置影响，保证跨节点、跨中心、跨城的数据同步。'
          },
          {
            p: '过去的系统在综合利用信息方面尚未达到理想水平，随着警务系统规模与业务的增长，网络的限制、管理的问题逐渐暴露，公安机关需要更加完善的警务系统解决方案，解决信息孤岛、高并发与分布式系统下的数据强一致问题。'
          }
        ]
      },
      {
        title: '核心问题',
        desc: [
          {
            h4: '效率低下',
            summary: '信息化程度低，并发度不高，无法满足实时在线办公需求。某些任务的处理需要靠人力实现，导致处理周期长，耗时久。有时甚至会受到空间和时间的影响，使处理时间再度延长，导致一些问题迟迟得不到解决或者制度无法落地。'
          },
          {
            h4: '数据不一致',
            summary: '在传统架构下，常见各类公安业务应用或部门为保障性能，通常各自独享一套数据库，这样的实现方式导致应用开发缺少统一规范与整体规划，信息共享水平低，容易形成数据孤岛。'
          },
          {
            h4: '难以实现线性扩展',
            summary: '随着数据量及并发量的上升，传统架构难以满足线性扩展的存储及性能需求。系统的处理能力不能应对业务量和需求量的增长趋势。'
          },
          {
            h4: '信息挖掘深度不足',
            summary: '应用数据的能力不足，只能对现有数据作比较浅显的分析，难以挖掘深层信息，尚未提升到提炼信息的高度，导致不能在关键时间点识别隐患核问题，从而及时处理。'
          }
        ]
      },
      {
        title: '解决方案',
        adv: {
          url: backgroundBase + 'relational-database.png',
          width: '450px',
          height: '250px'
        },
        desc: [
          {
            p: '对于公安信息化应用系统，星环的关系数据库产品具备完善的方案及落地案例，可以替代传统关系型数据库处理OLTP业务。该产品基于分布式的系统架构，能够真正地实现海量数据存储和计算能力的线性扩展，为公安各类场景提供强有力的性能保障。'
          },
          {
            p: '整个系统部署在多个节点，提供高并发响应支持。同时节点之间通过同步协议保证强一致，每个节点内部保障高可用。该系统主要由三类组件构成。'
          },
          {
            h4: 'TxSQL集群',
            summary: '是OLTP事务处理的基本单元，负责OLTP事务的数据片段的存储与执行查询。它是基于Paxos的强一致、高可用Mysql集群，通过Master-Slave结构实现，能够在超过半数机器健康的情况下继续提供服务。'
          },
          {
            h4: '分库分表中间件（TxShard）',
            summary: '负责将不同请求路由至不同节点。写事务或者读写混合的事务会被路由到Master节点，而只读事务则被路由至Slave节点。'
          },
          {
            h4: 'HAProxy',
            summary: '负责TxShard模块的负载均衡的透明代理。通过该结构实现的警务管理系统可应对上万的事务并发，同时具备完整的大数据对接接口，实现与大数据平台之间准实时的数据同步。'
          }
        ]
      }
    ]
  },
];
