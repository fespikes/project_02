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
          'subTitle': 'MODULES.INCEPTOR.SUB_TITLE',
          'logoUrl': 'assets/images/modules/inceptor-logo.png'
        };
        break;
      case 'slipstream':
        bannerInfo = {
          'title': 'MODULES.SLIPSTREAM.TITLE',
          'subTitle': 'MODULES.SLIPSTREAM.SUB_TITLE',
          'logoUrl': 'assets/images/modules/inceptor-logo.png'
        };
        break;
      case 'discover':
        bannerInfo = {
          'title': 'MODULES.DISCOVER.TITLE',
          'subTitle': 'MODULES.DISCOVER.SUB_TITLE',
          'logoUrl': 'assets/images/modules/inceptor-logo.png'
        };
        break;
      case 'hyperbase':
        bannerInfo = {
          'title': 'MODULES.HYPERBASE.TITLE',
          'subTitle': 'MODULES.HYPERBASE.SUB_TITLE',
          'logoUrl': 'assets/images/modules/inceptor-logo.png'
        };
        break;
      case 'search':
        bannerInfo = {
          'title': 'MODULES.SEARCH.TITLE',
          'subTitle': 'MODULES.SEARCH.SUB_TITLE',
          'logoUrl': 'assets/images/modules/inceptor-logo.png'
        };
        break;
      case 'sophon':
        bannerInfo = {
          'title': 'MODULES.SOPHON.TITLE',
          'subTitle': 'MODULES.SOPHON.SUB_TITLE',
          'logoUrl': 'assets/images/modules/inceptor-logo.png'
        };
        break;
      case 'guardian':
        bannerInfo = {
          'title': 'MODULES.GUARDIAN.TITLE',
          'subTitle': 'MODULES.GUARDIAN.SUB_TITLE',
          'logoUrl': 'assets/images/modules/inceptor-logo.png'
        };
        break;
      case 'hadoop':
        bannerInfo = {
          'title': 'MODULES.HADOOP.TITLE',
          'subTitle': 'MODULES.HADOOP.SUB_TITLE',
          'logoUrl': 'assets/images/modules/inceptor-logo.png'
        };
        break;
      case 'pilot':
        bannerInfo = {
          'title': 'MODULES.PILOT.TITLE',
          'subTitle': 'MODULES.PILOT.SUB_TITLE',
          'logoUrl': 'assets/images/modules/inceptor-logo.png'
        };
        break;
      case 'workflow':
        bannerInfo = {
          'title': 'MODULES.WORKFLOW.TITLE',
          'subTitle': 'MODULES.WORKFLOW.SUB_TITLE',
          'logoUrl': 'assets/images/modules/inceptor-logo.png'
        };
        break;
      case 'transporter':
        bannerInfo = {
          'title': 'MODULES.TRANSPORTER.TITLE',
          'subTitle': 'MODULES.TRANSPORTER.SUB_TITLE',
          'logoUrl': 'assets/images/modules/inceptor-logo.png'
        };
        break;
      case 'governor':
        bannerInfo = {
          'title': 'MODULES.GOVERNOR.TITLE',
          'subTitle': 'MODULES.GOVERNOR.SUB_TITLE',
          'logoUrl': 'assets/images/modules/inceptor-logo.png'
        };
        break;
      case 'rubik':
        bannerInfo = {
          'title': 'MODULES.RUBIK.TITLE',
          'subTitle': 'MODULES.RUBIK.SUB_TITLE',
          'logoUrl': 'assets/images/modules/inceptor-logo.png'
        };
        break;
      case 'waterdrop':
        bannerInfo = {
          'title': 'MODULES.WATERDROP.TITLE',
          'subTitle': 'MODULES.WATERDROP.SUB_TITLE',
          'logoUrl': 'assets/images/modules/inceptor-logo.png'
        };
        break;
      case 'txsql':
        bannerInfo = {
          'title': 'MODULES.TXSQL.TITLE',
          'subTitle': 'MODULES.TXSQL.SUB_TITLE',
          'logoUrl': 'assets/images/modules/inceptor-logo.png'
        };
        break;
      case 'prometheus':
        bannerInfo = {
          'title': 'MODULES.PROMETHEUS.TITLE',
          'subTitle': 'MODULES.PROMETHEUS.SUB_TITLE',
          'logoUrl': 'assets/images/modules/inceptor-logo.png'
        };
        break;
      case 'kafka':
        bannerInfo = {
          'title': 'MODULES.KAFKA.TITLE',
          'subTitle': 'MODULES.KAFKA.SUB_TITLE',
          'logoUrl': 'assets/images/modules/inceptor-logo.png'
        };
        break;
      case 'zeppelin':
        bannerInfo = {
          'title': 'MODULES.ZEPPELIN.TITLE',
          'subTitle': 'MODULES.ZEPPELIN.SUB_TITLE',
          'logoUrl': 'assets/images/modules/inceptor-logo.png'
        };
        break;
      case 'midas':
        bannerInfo = {
          'title': 'MODULES.MIDAS.TITLE',
          'subTitle': 'MODULES.MIDAS.SUB_TITLE',
          'logoUrl': 'assets/images/modules/inceptor-logo.png'
        };
        break;
      case 'terminal':
        bannerInfo = {
          'title': 'MODULES.TERMINAL.TITLE',
          'subTitle': 'MODULES.TERMINAL.SUB_TITLE',
          'logoUrl': 'assets/images/modules/inceptor-logo.png'
        };
        break;
      case 'redis':
        bannerInfo = {
          'title': 'MODULES.REDIS.TITLE',
          'subTitle': 'MODULES.REDIS.SUB_TITLE',
          'logoUrl': 'assets/images/modules/inceptor-logo.png'
        };
        break;
      default:
        break;
    }
    return bannerInfo;
  }
}
