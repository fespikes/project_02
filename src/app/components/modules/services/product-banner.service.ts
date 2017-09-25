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
          'logoUrl': 'MODULES.INCEPTOR.LOGO_URL'
        };
        break;
      case 'slipsteam':
        bannerInfo = {
          'title': 'MODULES.SLIPSTEAM.TITLE',
          'subTitle': 'MODULES.SLIPSTEAM.SUB_TITLE',
          'logoUrl': 'MODULES.SLIPSTEAM.LOGO_URL'
        };
        break;
      case 'discover':
        bannerInfo = {
          'title': 'MODULES.DISCOVER.TITLE',
          'subTitle': 'MODULES.DISCOVER.SUB_TITLE',
          'logoUrl': 'MODULES.DISCOVER.LOGO_URL'
        };
        break;
      case 'hyperbase':
        bannerInfo = {
          'title': 'MODULES.HYPERBASE.TITLE',
          'subTitle': 'MODULES.HYPERBASE.SUB_TITLE',
          'logoUrl': 'MODULES.HYPERBASE.LOGO_URL'
        };
        break;
      case 'search':
        bannerInfo = {
          'title': 'MODULES.SEARCH.TITLE',
          'subTitle': 'MODULES.SEARCH.SUB_TITLE',
          'logoUrl': 'MODULES.SEARCH.LOGO_URL'
        };
        break;
      case 'sophon':
        bannerInfo = {
          'title': 'MODULES.SOPHON.TITLE',
          'subTitle': 'MODULES.SOPHON.SUB_TITLE',
          'logoUrl': 'MODULES.SOPHON.LOGO_URL'
        };
        break;
      case 'guardian':
        bannerInfo = {
          'title': 'MODULES.GUARDIAN.TITLE',
          'subTitle': 'MODULES.GUARDIAN.SUB_TITLE',
          'logoUrl': 'MODULES.GUARDIAN.LOGO_URL'
        };
        break;
      case 'hadoop':
        bannerInfo = {
          'title': 'MODULES.HADOOP.TITLE',
          'subTitle': 'MODULES.HADOOP.SUB_TITLE',
          'logoUrl': 'MODULES.HADOOP.LOGO_URL'
        };
        break;
      default:
        break;
    }
    return bannerInfo;
  }
}
