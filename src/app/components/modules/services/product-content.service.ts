import { Injectable } from '@angular/core';

@Injectable()
export class ProductContentService {
  constructor() {

  }

  getProductIntroduce(moduleName): Object {
    let productIntroduce = {};
    switch (moduleName) {
      case 'inceptor':
        productIntroduce = {
          'img': {
            'url': 'MODULES.INCEPTOR.INTRODUCE_IMG_URL',
            'width': '410px',
            'height': '270px'
          },
          'items': [
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'content': 'MODULES.INCEPTOR.INTRODUCE_1',
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'content': 'MODULES.INCEPTOR.INTRODUCE_2',
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'content': 'MODULES.INCEPTOR.INTRODUCE_3',
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'content': 'MODULES.INCEPTOR.INTRODUCE_4',
            }
          ]
        };
        break;
      case 'slipsteam':
        productIntroduce = {
          'img': {
            'url': 'MODULES.SLIPSTEAM.INTRODUCE_IMG_URL',
            'width': '410px',
            'height': '270px'
          },
          'items':[
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'content':'MODULES.SLIPSTEAM.INTRODUCE_1'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': true,
              'content':'MODULES.SLIPSTEAM.INTRODUCE_2'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': true,
              'content':'MODULES.SLIPSTEAM.INTRODUCE_3'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'content':'MODULES.SLIPSTEAM.INTRODUCE_4'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'content':'MODULES.SLIPSTEAM.INTRODUCE_5'
            }
          ]
        };
        break;
      case 'discover':
        productIntroduce = {
          'img': {
            'url': 'MODULES.DISCOVER.INTRODUCE_IMG_URL',
            'width': '410px',
            'height': '330px'
          },
          'items': [
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'content': 'MODULES.DISCOVER.INTRODUCE_1'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'content': 'MODULES.DISCOVER.INTRODUCE_2'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'content': 'MODULES.DISCOVER.INTRODUCE_3'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'content': 'MODULES.DISCOVER.INTRODUCE_4'
            }
          ]
        };
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
    return productIntroduce;
  }

  getProductAdvantage(moduleName): Object {
    let productAdvantage = {};
    switch (moduleName) {
      case 'inceptor':
        productAdvantage = {
          'items':[
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.INCEPTOR.ADVANTAGE_1'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.INCEPTOR.ADVANTAGE_2'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.INCEPTOR.ADVANTAGE_3'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.INCEPTOR.ADVANTAGE_4'
            }
          ]
        };
        break;
      case 'slipsteam':
        productAdvantage = {
          'img': {
            'url': 'MODULES.SLIPSTEAM.ADVANTAGE_IMG_URL',
            'width': '700px',
            'height': '300px'
          },
          'items': [
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.SLIPSTEAM.ADVANTAGE_1'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.SLIPSTEAM.ADVANTAGE_2'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.SLIPSTEAM.ADVANTAGE_3'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.SLIPSTEAM.ADVANTAGE_4'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.SLIPSTEAM.ADVANTAGE_5'
            }
          ]
        };
        break;
      case 'discover':
        productAdvantage = {
          'items': [
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.DISCOVER.ADVANTAGE_1'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.DISCOVER.ADVANTAGE_2'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.DISCOVER.ADVANTAGE_3'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.DISCOVER.ADVANTAGE_4'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.DISCOVER.ADVANTAGE_5'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.DISCOVER.ADVANTAGE_6'
            }
          ]
        };
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
    return productAdvantage;
  }

  getProductScenarios(moduleName): Object {
    let productScenarios = {};
    switch (moduleName) {
      case 'inceptor':
        productScenarios = {
          'img': {
            'url': 'MODULES.INCEPTOR.SCENARIOS_IMG_URL',
            'width': '700px',
            'height': '400px'
          },
          'items': [
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.INCEPTOR.SCENARIOS_1'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.INCEPTOR.SCENARIOS_2'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.INCEPTOR.SCENARIOS_3'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.INCEPTOR.SCENARIOS_4'
            }
          ]
        };
        break;
      case 'slipsteam':
        productScenarios = {
          'items': [
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.SLIPSTEAM.SCENARIOS_1'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.SLIPSTEAM.SCENARIOS_2'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.SLIPSTEAM.SCENARIOS_3'
            }
          ]
        };
        break;
      case 'discover':
        productScenarios = {
          'items': [
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.DISCOVER.SCENARIOS_1'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.DISCOVER.SCENARIOS_2'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.DISCOVER.SCENARIOS_3'
            }
          ]
        };
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
    return productScenarios;
  }
}
