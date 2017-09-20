import { Injectable } from '@angular/core';

@Injectable()
export class ProductContentService {
  constructor() {

  }

  getProductIntroduce(moduleName): any[] {
    let introduceItems = [];
    switch (moduleName) {
      case 'inceptor':
        introduceItems = [
          'MODULES.INCEPTOR.INTRODUCE_1',
          'MODULES.INCEPTOR.INTRODUCE_2',
          'MODULES.INCEPTOR.INTRODUCE_3'
        ];
        break;
      case 'slipsteam':
        introduceItems = [

        ];
        break;
      case 'discover':
        introduceItems = [
          'MODULES.DISCOVER.INTRODUCE_1',
          'MODULES.DISCOVER.INTRODUCE_2',
          'MODULES.DISCOVER.INTRODUCE_3',
          'MODULES.DISCOVER.INTRODUCE_4'
        ];
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
    return introduceItems;
  }

  getProductAdvantage(moduleName): any[] {
    let advantageItems = [];
    switch (moduleName) {
      case 'inceptor':
        advantageItems = [
          'MODULES.INCEPTOR.ADVANTAGE_1',
          'MODULES.INCEPTOR.ADVANTAGE_2',
          'MODULES.INCEPTOR.ADVANTAGE_3',
          'MODULES.INCEPTOR.ADVANTAGE_4'
        ];
        break;
      case 'slipsteam':
        advantageItems = [

        ];
        break;
      case 'discover':
        advantageItems = [
          'MODULES.DISCOVER.ADVANTAGE_1',
          'MODULES.DISCOVER.ADVANTAGE_2',
          'MODULES.DISCOVER.ADVANTAGE_3',
          'MODULES.DISCOVER.ADVANTAGE_4',
          'MODULES.DISCOVER.ADVANTAGE_5',
          'MODULES.DISCOVER.ADVANTAGE_6'
        ];
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
    return advantageItems;
  }

  getProductScenarios(moduleName): any[] {
    let scenariosItems = [];
    switch (moduleName) {
      case 'inceptor':
        scenariosItems = [
          'MODULES.INCEPTOR.SCENARIOS_1',
          'MODULES.INCEPTOR.SCENARIOS_2',
          'MODULES.INCEPTOR.SCENARIOS_3',
          'MODULES.INCEPTOR.SCENARIOS_4'
        ];
        break;
      case 'slipsteam':
        scenariosItems = [

        ];
        break;
      case 'discover':
        scenariosItems = [
          'MODULES.DISCOVER.SCENARIOS_1',
          'MODULES.DISCOVER.SCENARIOS_2',
          'MODULES.DISCOVER.SCENARIOS_3'
        ];
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
    return scenariosItems;
  }

  getModuleType(url): string {
    let array = url.split('/');
    let type = array[array.length - 1];
    return type;
  }
}
