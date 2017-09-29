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

  advantageIncludeImg(moduleType): boolean {
    let includeImg = false;
    switch (moduleType) {
      case 'inceptor':
        includeImg = false;
        break;
      case 'slipsteam':
        includeImg = true;
        break;
      case 'discover':
        includeImg = false;
        break;
      case 'hyperbase':
        includeImg = false;
        break;
      case 'search':
        includeImg = false;
        break;
      case 'sophon':
        includeImg = true;
        break;
      case 'guardian':
        includeImg = false;
        break;
      case 'hadoop':
        includeImg = false;
        break;
      default:
        break;
    }
    return includeImg;
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
      case 'slipsteam':
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
      default:
        break;
    }
    return includeImgTab;
  }
}
