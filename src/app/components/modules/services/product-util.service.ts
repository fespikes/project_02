import { Injectable } from '@angular/core';

@Injectable()
export class ProductUtilService {
  constructor() {

  }

  getModuleType(url): string {
    let array = url.split('/');
    let type = array[array.length - 1];
    return type;
  }

  introduceIncludeImg(moduleType): boolean {
    let includeImg = false;
    switch (moduleType) {
      case 'inceptor':
        includeImg = true;
        break;
      case 'slipstream':
        includeImg = true;
        break;
      case 'discover':
        includeImg = true;
        break;
      case 'hyperbase':
        includeImg = true;
        break;
      case 'search':
        includeImg = true;
        break;
      case 'sophon':
        includeImg = true;
        break;
      case 'guardian':
        includeImg = true;
        break;
      case 'hadoop':
        includeImg = false;
        break;
      case 'pilot':
        includeImg = true;
        break;
      case 'workflow':
        includeImg = true;
        break;
      case 'transporter':
        includeImg = true;
        break;
      case 'governor':
        includeImg = true;
        break;
      case 'rubik':
        includeImg = true;
        break;
      case 'waterdrop':
        includeImg = true;
        break;
      case 'txsql':
        includeImg = true;
        break;
      case 'prometheus':
        includeImg = true;
        break;
      case 'kafka':
        includeImg = false;
        break;
      case 'zeppelin':
        includeImg = true;
        break;
      case 'midas':
        includeImg = true;
        break;
      case 'terminal':
        includeImg = true;
        break;
      case 'redis':
        includeImg = false;
        break;
      default:
        break;
    }
    return includeImg;
  }

  advantageIncludeImgTable(moduleType): Object {
    let includeImgTable = {};
    switch (moduleType) {
      case 'inceptor':
        includeImgTable = {
          'img': false,
          'tTable': false
        };
        break;
      case 'slipstream':
        includeImgTable = {
          'img': false,
          'table': true
        };
        break;
      case 'discover':
        includeImgTable = {
          'img': false,
          'table': false
        };
        break;
      case 'hyperbase':
        includeImgTable = {
          'img': false,
          'table': false
        };
        break;
      case 'search':
        includeImgTable = {
          'img': false,
          'table': false
        };
        break;
      case 'sophon':
        includeImgTable = {
          'img': false,
          'table': true
        };
        break;
      case 'guardian':
        includeImgTable = {
          'img': false,
          'table': false
        };
        break;
      case 'hadoop':
        includeImgTable = {
          'img': false,
          'table': false
        };
        break;
      case 'pilot':
        includeImgTable = {
          'img': false,
          'table': false
        };
        break;
      case 'workflow':
        includeImgTable = {
          'img': false,
          'table': false
        };
        break;
      case 'transporter':
        includeImgTable = {
          'img': false,
          'table': false
        };
        break;
      case 'governor':
        includeImgTable = {
          'img': false,
          'table': false
        };
        break;
      case 'rubik':
        includeImgTable = {
          'img': false,
          'table': false
        };
        break;
      case 'waterdrop':
        includeImgTable = {
          'img': false,
          'table': false
        };
        break;
      case 'txsql':
        includeImgTable = {
          'img': false,
          'table': false
        };
        break;
      case 'prometheus':
        includeImgTable = {
          'img': false,
          'table': false
        };
        break;
      case 'kafka':
        includeImgTable = {
          'img': false,
          'table': false
        };
        break;
      case 'zeppelin':
        includeImgTable = {
          'img': false,
          'table': false
        };
        break;
      case 'midas':
        includeImgTable = {
          'img': false,
          'table': false
        };
        break;
      case 'terminal':
        includeImgTable = {
          'img': false,
          'table': false
        };
        break;
      case 'redis':
        includeImgTable = {
          'img': false,
          'table': false
        };
        break;
      default:
        break;
    }
    return includeImgTable;
  }

  scenariosIncludeImgTab(moduleType): Object {
    let includeImgTab = {};
    switch (moduleType) {
      case 'inceptor':
        includeImgTab = {
          'tab': false,
          'img': true
        };
        break;
      case 'slipstream':
        includeImgTab = {
          'tab': true,
          'img': false
        };
        break;
      case 'discover':
        includeImgTab = {
          'tab': false,
          'img': false
        };
        break;
      case 'hyperbase':
        includeImgTab = {
          'tab': false,
          'img': false
        };
        break;
      case 'search':
        includeImgTab = {
          'tab': false,
          'img': false
        };
        break;
      case 'sophon':
        includeImgTab = {
          'tab': false,
          'img': false
        };
        break;
      case 'guardian':
        includeImgTab = {
          'tab': false,
          'img': false
        };
        break;
      case 'hadoop':
        includeImgTab = {
          'tab': false,
          'img': false
        };
        break;
      case 'pilot':
        includeImgTab = {
          'tab': false,
          'img': false
        };
        break;
      case 'workflow':
        includeImgTab = {
          'tab': false,
          'img': false
        };
        break;
      case 'transporter':
        includeImgTab = {
          'tab': false,
          'img': false
        };
        break;
      case 'governor':
        includeImgTab = {
          'tab': false,
          'img': false
        };
        break;
      case 'rubik':
        includeImgTab = {
          'tab': false,
          'img': false
        };
        break;
      case 'waterdrop':
        includeImgTab = {
          'tab': false,
          'img': false
        };
        break;
      case 'txsql':
        includeImgTab = {
          'tab': false,
          'img': false
        };
        break;
      case 'prometheus':
        includeImgTab = {
          'tab': false,
          'img': false
        };
        break;
      case 'kafka':
        includeImgTab = {
          'tab': false,
          'img': false
        };
        break;
      case 'zeppelin':
        includeImgTab = {
          'tab': false,
          'img': false
        };
        break;
      case 'midas':
        includeImgTab = {
          'tab': false,
          'img': false
        };
        break;
      case 'terminal':
        includeImgTab = {
          'tab': false,
          'img': false
        };
        break;
      case 'redis':
        includeImgTab = {
          'tab': false,
          'img': false
        };
        break;
      default:
        break;
    }
    return includeImgTab;
  }
}
