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

  scenariosIncludeImg(moduleType): boolean {
    let includeImg = false;
    switch (moduleType) {
      case 'inceptor':
        includeImg = true;
        break;
      case 'slipsteam':
        includeImg = false;
        break;
      case 'discover':
        includeImg = false;
        break;
      case 'hyperbase':
        break;
      case 'search':
        break;
      case 'sophon':
        break;
      case 'guardian':
        break;
      case 'hadoop':
        break;
      default:
        break;
    }
    return includeImg;
  }

  scenariosIncludeTab(moduleType): boolean {
    let includeTab = false;
    switch (moduleType) {
      case 'inceptor':
        includeTab = false;
        break;
      case 'slipsteam':
        includeTab = true;
        break;
      case 'discover':
        includeTab = false;
        break;
      case 'hyperbase':
        break;
      case 'search':
        break;
      case 'sophon':
        break;
      case 'guardian':
        break;
      case 'hadoop':
        break;
      default:
        break;
    }
    return includeTab;
  }
}
