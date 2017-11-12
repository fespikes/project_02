import { Injectable } from '@angular/core';
import { Scenario } from './scenario/scenario';

const base = '/assets/images/scenarios/'
const bannerBase = base+ 'scenario/banner/';
const backgroundBase = base+ 'scenario/background/';

let scenarios: Scenario[];
//TODO: add back all scenario contents

@Injectable()
export class BusinessScenarioService {

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

const root = '/assets/images/scenarios/'
scenarios = [
  {
    id: 1,
    type: 'relational-database',
    screenshot: base+ 'relational-database'+ '.jpg',
    short: '关系数据库'
  },
  {
    id: 2,
    type: 'realtime-computation',
    screenshot: base+ 'realtime-computation'+ '.jpg',
    short: '实时计算'
  },
  {
    id: 3,
    type: 'info-retrieval',
    screenshot: base+ 'info-retrieval'+ '.jpg',
    short: '信息检索'
  },
  {
    id: 4,
    type: 'deep-learning',
    screenshot: base+ 'deep-learning'+ '.jpg',
    short: '深度学习'
  },
  {
    id: 5,
    type: 'data-warehouse',
    screenshot: base+ 'data-warehouse'+ '.jpg',
    short: '数据仓库',

    title: '数据仓库 业务方案',
    slogan: '一站式数据仓库服务解决方案，实现数据采集、数据整合、模型加工、数据管理等完备的一体化数仓功能，支持对于查询速度、并发度、扩展性的保障。',

    adv: bannerBase + 'data-warehouse.jpg',//TODO: the pic
    advBgColor: '#001740',

    details: [
      //'business-background': 
      {
        title: '业务背景',
        adv: backgroundBase + 'data-warehouse.jpg', //TODO: the pic
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
        // adv: string,
        desc: [
          {
            h4: '海量数据的存储',
            summary: '这样一个企业系统，存在着由各种因素形成的数据板块，如上下级单位构成的板块，由业务类型不同导致的板块。部门隔离造成的数据壁垒，导致系统数据共享不足，形成数据孤岛，无法实现企业数据的充分有效利用。为了获取跨部门跨层级的信息，需要单位向上级申请数据资源，经过层层审批，等到可以拿到数据用于分析时，已经损坏了信息的时效性。实现数据的全面整合。'
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
        adv: '', //TODO:
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
            summary: 'TDH-DW中融入了多种工具以及功能，减少引入错误、冗余、缺失、噪声数据以及它们带来的影响，全方面保障数据质量，提升决策可靠性。首先当数据进入数仓是利用工具Transporter进行数据清洗，在入口对数据质量把关；其次在执行计算时，通过Inceptor的数据稽查能力，减弱错误数据的影响；然后，通过数据治理工具Governor管理，数仓中所有元数据的生命周期，实现数据质量的全面把控。'
          }
        ]
      },
    ]
  },
  {
    id: 6,
    type: 'analysis-mining',
    screenshot: base+ 'analysis-mining'+ '.jpg',
    short: '数据分析与挖掘'
  },
  {
    id: 7,
    type: 'data-mart',
    screenshot: base+ 'data-mart'+ '.jpg',
    short: '数据集市'
  },
  {
    id: 8,
    type: 'others',
    screenshot: base+ 'others'+ '.jpg',
    short: '其他案例'
  }
];
