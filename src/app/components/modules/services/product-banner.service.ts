import { Injectable } from '@angular/core';

@Injectable()
export class ProductBannerService {
  constructor() {

  }

  getModuleBannerInfo(moduleType): Object {
    let bannerInfo = {};
    switch (moduleType) {
      case 'inceptor':
        bannerInfo = {
          'title': 'MODULES.INCEPTOR.TITLE',
          'alias': 'Inceptor',
          'subTitle': 'MODULES.INCEPTOR.SUB_TITLE',
          'logoUrl': 'assets/images/modules/inceptor-logo.png'
        };
        break;
      case 'slipstream':
        bannerInfo = {
          'title': 'MODULES.SLIPSTREAM.TITLE',
          'alias': 'Slipstream',
          'subTitle': 'MODULES.SLIPSTREAM.SUB_TITLE',
          'logoUrl': 'assets/images/modules/slipstream-logo.png'
        };
        break;
      case 'discover':
        bannerInfo = {
          'title': 'MODULES.DISCOVER.TITLE',
          'alias': 'Discover',
          'subTitle': 'MODULES.DISCOVER.SUB_TITLE',
          'logoUrl': 'assets/images/modules/discover-logo.png'
        };
        break;
      case 'hyperbase':
        bannerInfo = {
          'title': 'MODULES.HYPERBASE.TITLE',
          'alias': 'Hyperbase',
          'subTitle': 'MODULES.HYPERBASE.SUB_TITLE',
          'logoUrl': 'assets/images/modules/hyperbase-logo.png'
        };
        break;
      case 'search':
        bannerInfo = {
          'title': 'MODULES.SEARCH.TITLE',
          'alias': 'Search',
          'subTitle': 'MODULES.SEARCH.SUB_TITLE',
          'logoUrl': 'assets/images/modules/search-logo.png'
        };
        break;
      case 'sophon':
        bannerInfo = {
          'title': 'MODULES.SOPHON.TITLE',
          'alias': 'Sophon',
          'subTitle': 'MODULES.SOPHON.SUB_TITLE',
          'logoUrl': 'assets/images/modules/sophon-logo.png'
        };
        break;
      case 'guardian':
        bannerInfo = {
          'title': 'MODULES.GUARDIAN.TITLE',
          'alias': 'Guardian',
          'subTitle': 'MODULES.GUARDIAN.SUB_TITLE',
          'logoUrl': 'assets/images/modules/guardian-logo.png'
        };
        break;
      case 'hadoop':
        bannerInfo = {
          'title': 'MODULES.HADOOP.TITLE',
          'alias': 'Hadoop',
          'subTitle': 'MODULES.HADOOP.SUB_TITLE',
          'logoUrl': 'assets/images/modules/hadoop-logo.png'
        };
        break;
      case 'pilot':
        bannerInfo = {
          'title': 'MODULES.PILOT.TITLE',
          'alias': 'Pilot',
          'subTitle': 'MODULES.PILOT.SUB_TITLE',
          'logoUrl': 'assets/images/modules/pilot-logo.png'
        };
        break;
      case 'workflow':
        bannerInfo = {
          'title': 'MODULES.WORKFLOW.TITLE',
          'alias': 'Workflow',
          'subTitle': 'MODULES.WORKFLOW.SUB_TITLE',
          'logoUrl': 'assets/images/modules/workflow-logo.png'
        };
        break;
      case 'transporter':
        bannerInfo = {
          'title': 'MODULES.TRANSPORTER.TITLE',
          'alias': 'Transporter',
          'subTitle': 'MODULES.TRANSPORTER.SUB_TITLE',
          'logoUrl': 'assets/images/modules/transporter-logo.png'
        };
        break;
      case 'governor':
        bannerInfo = {
          'title': 'MODULES.GOVERNOR.TITLE',
          'alias': 'Governor',
          'subTitle': 'MODULES.GOVERNOR.SUB_TITLE',
          'logoUrl': 'assets/images/modules/governor-logo.png'
        };
        break;
      case 'rubik':
        bannerInfo = {
          'title': 'MODULES.RUBIK.TITLE',
          'alias': 'Rubik',
          'subTitle': 'MODULES.RUBIK.SUB_TITLE',
          'logoUrl': 'assets/images/modules/rubik-logo.png'
        };
        break;
      case 'waterdrop':
        bannerInfo = {
          'title': 'MODULES.WATERDROP.TITLE',
          'alias': 'Waterdrop',
          'subTitle': 'MODULES.WATERDROP.SUB_TITLE',
          'logoUrl': 'assets/images/modules/waterdrop-logo.png'
        };
        break;
      case 'txsql':
        bannerInfo = {
          'title': 'MODULES.TXSQL.TITLE',
          'alias': 'TxSQL',
          'subTitle': 'MODULES.TXSQL.SUB_TITLE',
          'logoUrl': 'assets/images/modules/txsql-logo.png'
        };
        break;
      case 'prometheus':
        bannerInfo = {
          'title': 'MODULES.PROMETHEUS.TITLE',
          'alias': 'Prometheus',
          'subTitle': 'MODULES.PROMETHEUS.SUB_TITLE',
          'logoUrl': 'assets/images/modules/prometheus-logo.png'
        };
        break;
      case 'kafka':
        bannerInfo = {
          'title': 'MODULES.KAFKA.TITLE',
          'alias': 'Kafka',
          'subTitle': 'MODULES.KAFKA.SUB_TITLE',
          'logoUrl': 'assets/images/modules/kafka-logo.png'
        };
        break;
      case 'zeppelin':
        bannerInfo = {
          'title': 'MODULES.ZEPPELIN.TITLE',
          'alias': 'Zeppelin',
          'subTitle': 'MODULES.ZEPPELIN.SUB_TITLE',
          'logoUrl': 'assets/images/modules/zeppelin-logo.png'
        };
        break;
      case 'midas':
        bannerInfo = {
          'title': 'MODULES.MIDAS.TITLE',
          'alias': 'Midas',
          'subTitle': 'MODULES.MIDAS.SUB_TITLE',
          'logoUrl': 'assets/images/modules/midas-logo.png'
        };
        break;
      case 'milano':
        bannerInfo = {
          'title': 'MODULES.MILANO.TITLE',
          'alias': 'Milano',
          'subTitle': 'MODULES.MILANO.SUB_TITLE',
          'logoUrl': 'assets/images/modules/milano-logo.png'
        };
        break;
      case 'terminal':
        bannerInfo = {
          'title': 'MODULES.TERMINAL.TITLE',
          'alias': 'Terminal',
          'subTitle': 'MODULES.TERMINAL.SUB_TITLE',
          'logoUrl': 'assets/images/modules/terminal-logo.png'
        };
        break;
      case 'redis':
        bannerInfo = {
          'title': 'MODULES.REDIS.TITLE',
          'alias': 'Redis',
          'subTitle': 'MODULES.REDIS.SUB_TITLE',
          'logoUrl': 'assets/images/modules/redis-logo.png'
        };
        break;
      default:
        break;
    }
    return bannerInfo;
  }
}
