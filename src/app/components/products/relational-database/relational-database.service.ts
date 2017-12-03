import { Injectable } from '@angular/core';

@Injectable()
export class RelationalDatabaseService {

  constructor() { }

  getProductDetails() {
  	return {
  		banner: {
  			h3: '关系数据库',
        h4: '',
  			description: '构建企业关系型数据库，处理数据量在500GB以内的OLTP业务。支持复杂SQL查询，提供高稳定、可扩展、强一致保证。',
  			advImage: '/assets/images/products/relational-database.png'
  		},
  		tabs: [
        {
          text: '产品功能',
          href: 'relational-database-functionalities'
        },
        {
          text: '产品优势',
          href: 'relational-database-advantages'
        },
        {
          text: '应用场景',
          href: 'relational-database-scenarios'
        },
        {
          text: '组件介绍',
          href: 'relational-database-component-intro'
        },
        /*{
          text: '费用说明',
          link: './expense-explanation'
        }*/
      ],
      functionalities: {
        title: '产品功能',
        id: 'relational-database-functionalities',
        diagram: '/assets/images/diagram/relational-database.jpg',
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
        id: 'relational-database-advantages',
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
        id: 'relational-database-scenarios',
        tabs: [
          {
            class: '高并发电商平台',
            text: 'TDH-RDB可作为基础架构参与电商交易平台构建，提供交易数据录入和查询功能。能够在短时间内处理大量业务，响应高并发请求，从容应对访问高峰，保证始终对外提供稳定的数据服务。采用主从节点架构，并确保主从设备的数据一致性，实现可靠的即时容灾切换。其弹性伸缩能力，可为电商实现平台处理能力的按需扩展。',
          },
          {
            class: '金融交易系统',
            text: '保障金融数据的完整性、一致性，满足金融行业对于关系型数据库的特性需求。企业可以采用多节点多中心的架构部署TDH-RDB，以获取稳健的灾难恢复能力，同时提供分布式事务支持，维护数据时效性，保证在分布式环境下，数据不丢不错，防止因数据错乱或者丢失导致的金融损失和财产损害。',
          },
          {
            class: '网站读写分离应用',
            text: '某些网站的读操作远远多于写操作，例如对于大型的新闻网站而言，主要应对各种访问查询，而添加一则新闻的次数与之相比则微乎其微。对于这种特性的网站，可将读写请求分离在不同节点处理，主节点负责写，读操作分摊在各个从节点，从而缓解锁之间的竞争，提高资源利用率和生产效率，成倍提升对于读的应答效率。同时也通过增加冗余，提高了系统的可用性。',
          }
        ]
      },
      componentIntro: {
        title: '组件介绍',
        id: 'relational-database-component-intro',
        tabs: [
          {
            class: 'TDH开发套件',
            ctn: [{
              title: 'Pilot',
              text: 'Pilot是基于Web的报表展现工具，轻量、灵活，可以快速部署。它支持多维度的分析和自助分析，提供数十种报表样式，对时序数据 也有很好的展现。此外，Pilot还支持团队协作和共享，支持导入和导出报表。',
              link: '../../modules/suite/pilot'
            }],
          },
          {
            class: '运维和开发工具',
            ctn: [{
              title: 'TxSQL',
              text: 'TxSQL 是一个分布式可扩展、服务高可用、数据强一致的关系型数据库集群。 其底层通过 Paxos Group 保证数据的一致性和高可用，在业务层通过分布式的事 务管理器来提供高并发的事务支持',
              link: '../../modules/tool/txsql'
            },{
              title: 'Terminal',
              text: 'Terminal 容器命令行是集群上服务用命令行指令操作的入口，它集成了各个服务的客户端，可以在网页上连接并操作集群内的各个服务，避免了需要登录各个容器才可以操作服务的烦恼。',
              link: '../../modules/tool/terminal'
            }]
          }
        ]
      },

  	}
  }
}
