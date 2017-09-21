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
          'MODULES.SLIPSTEAM.INTRODUCE_1',
          'MODULES.SLIPSTEAM.INTRODUCE_2',
          'MODULES.SLIPSTEAM.INTRODUCE_3',
          'MODULES.SLIPSTEAM.INTRODUCE_4',
          'MODULES.SLIPSTEAM.INTRODUCE_5',
          'MODULES.SLIPSTEAM.INTRODUCE_6'
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
          'MODULES.SLIPSTEAM.ADVANTAGE_1',
          'MODULES.SLIPSTEAM.ADVANTAGE_2',
          'MODULES.SLIPSTEAM.ADVANTAGE_3',
          'MODULES.SLIPSTEAM.ADVANTAGE_4',
          'MODULES.SLIPSTEAM.ADVANTAGE_5'
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
          'MODULES.SLIPSTEAM.SCENARIOS_1',
          'MODULES.SLIPSTEAM.SCENARIOS_2',
          'MODULES.SLIPSTEAM.SCENARIOS_3'
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
}
