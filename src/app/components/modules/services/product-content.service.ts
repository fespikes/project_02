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
      case 'slipstream':
        productIntroduce = {
          'img': {
            'url': 'MODULES.SLIPSTREAM.INTRODUCE_IMG_URL',
            'width': '410px',
            'height': '270px'
          },
          'items':[
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'content':'MODULES.SLIPSTREAM.INTRODUCE_1'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': true,
              'content':'MODULES.SLIPSTREAM.INTRODUCE_2'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': true,
              'content':'MODULES.SLIPSTREAM.INTRODUCE_3'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'content':'MODULES.SLIPSTREAM.INTRODUCE_4'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'content':'MODULES.SLIPSTREAM.INTRODUCE_5'
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
        productIntroduce = {
          'img': {
            'url': 'MODULES.HYPERBASE.INTRODUCE_IMG_URL',
            'width': '410px',
            'height': '330px'
          },
          'items': [
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'content': 'MODULES.HYPERBASE.INTRODUCE_1'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'content': 'MODULES.HYPERBASE.INTRODUCE_2'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'content': 'MODULES.HYPERBASE.INTRODUCE_3'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'content': 'MODULES.HYPERBASE.INTRODUCE_4'
            }
          ]
        };
        break;
      case 'search':
        productIntroduce = {
          'img': {
            'url': 'MODULES.SEARCH.INTRODUCE_IMG_URL',
            'width': '410px',
            'height': '330px'
          },
          'items': [
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'content': 'MODULES.SEARCH.INTRODUCE_1'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'content': 'MODULES.SEARCH.INTRODUCE_2'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'content': 'MODULES.SEARCH.INTRODUCE_3'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'content': 'MODULES.SEARCH.INTRODUCE_4'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'content': 'MODULES.SEARCH.INTRODUCE_5'
            }
          ]
        };
        break;
      case 'sophon':
        productIntroduce = {
          'img': {
            'url': 'MODULES.SOPHON.INTRODUCE_IMG_URL',
            'width': '410px',
            'height': '330px'
          },
          'items': [
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'content': 'MODULES.SOPHON.INTRODUCE_1'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'content': 'MODULES.SOPHON.INTRODUCE_2'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'content': 'MODULES.SOPHON.INTRODUCE_3'
            }
          ]
        };
        break;
      case 'guardian':
        productIntroduce = {
          'img': {
            'url': 'MODULES.GUARDIAN.INTRODUCE_IMG_URL',
            'width': '410px',
            'height': '330px'
          },
          'items': [
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'content': 'MODULES.GUARDIAN.INTRODUCE_1'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'content': 'MODULES.GUARDIAN.INTRODUCE_2'
            }
          ]
        };
        break;
      case 'hadoop':
        productIntroduce = {
          'items': [
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'content': 'MODULES.HADOOP.INTRODUCE_1'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'content': 'MODULES.HADOOP.INTRODUCE_2'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'content': 'MODULES.HADOOP.INTRODUCE_3'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': true,
              'content': 'MODULES.HADOOP.INTRODUCE_4'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': true,
              'content': 'MODULES.HADOOP.INTRODUCE_5'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': true,
              'content': 'MODULES.HADOOP.INTRODUCE_6'
            }
          ]
        };
        break;
      case 'pilot':
        productIntroduce = {
          'img': {
            'url': 'MODULES.PILOT.INTRODUCE_IMG_URL',
            'width': '410px',
            'height': '330px'
          },
          'items': []
        };
        break;
      case 'wrokflow':
        productIntroduce = {
          'img': {
            'url': 'MODULES.WORKFLOW.INTRODUCE_IMG_URL',
            'width': '410px',
            'height': '330px'
          },
          'items': []
        };
        break;
      case 'transporter':
        productIntroduce = {
          'img': {
            'url': 'MODULES.TRANSPORTER.INTRODUCE_IMG_URL',
            'width': '410px',
            'height': '330px'
          },
          'items': []
        };
        break;
      case 'governor':
        productIntroduce = {
          'img': {
            'url': 'MODULES.GOVERNOR.INTRODUCE_IMG_URL',
            'width': '410px',
            'height': '330px'
          },
          'items': []
        };
        break;
      case 'rubik':
        productIntroduce = {
          'img': {
            'url': 'MODULES.RUBIK.INTRODUCE_IMG_URL',
            'width': '410px',
            'height': '330px'
          },
          'items': []
        };
        break;
      case 'waterdrop':
        productIntroduce = {
          'img': {
            'url': 'MODULES.WATERDROP.INTRODUCE_IMG_URL',
            'width': '410px',
            'height': '330px'
          },
          'items': []
        };
        break;
      case 'txsql':
        productIntroduce = {
          'img': {
            'url': 'MODULES.TXSQL.INTRODUCE_IMG_URL',
            'width': '410px',
            'height': '330px'
          },
          'items': []
        };
        break;
      case 'prometheus':
        productIntroduce = {
          'img': {
            'url': 'MODULES.PROMETHEUS.INTRODUCE_IMG_URL',
            'width': '410px',
            'height': '330px'
          },
          'items': []
        };
        break;
      case 'kafka':
        productIntroduce = {
          'img': {
            'url': 'MODULES.KAFKA.INTRODUCE_IMG_URL',
            'width': '410px',
            'height': '330px'
          },
          'items': []
        };
        break;
      case 'zeppelin':
        productIntroduce = {
          'img': {
            'url': 'MODULES.ZEPPELIN.INTRODUCE_IMG_URL',
            'width': '410px',
            'height': '330px'
          },
          'items': []
        };
        break;
      case 'midas':
        productIntroduce = {
          'img': {
            'url': 'MODULES.MIDAS.INTRODUCE_IMG_URL',
            'width': '410px',
            'height': '330px'
          },
          'items': []
        };
        break;
      case 'terminal':
        productIntroduce = {
          'img': {
            'url': 'MODULES.TERMINAL.INTRODUCE_IMG_URL',
            'width': '410px',
            'height': '330px'
          },
          'items': []
        };
        break;
      case 'redis':
        productIntroduce = {
          'img': {
            'url': 'MODULES.REDIS.INTRODUCE_IMG_URL',
            'width': '410px',
            'height': '330px'
          },
          'items': []
        };
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
      case 'slipstream':
        productAdvantage = {
          'img': {
            'url': 'MODULES.SLIPSTREAM.ADVANTAGE_IMG_URL',
            'width': '700px',
            'height': '300px'
          },
          'items': [
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.SLIPSTREAM.ADVANTAGE_1'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.SLIPSTREAM.ADVANTAGE_2'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.SLIPSTREAM.ADVANTAGE_3'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.SLIPSTREAM.ADVANTAGE_4'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.SLIPSTREAM.ADVANTAGE_5'
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
        productAdvantage = {
          'items': [
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.HYPERBASE.ADVANTAGE_1'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.HYPERBASE.ADVANTAGE_2'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.HYPERBASE.ADVANTAGE_3'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.HYPERBASE.ADVANTAGE_4'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.HYPERBASE.ADVANTAGE_5'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.HYPERBASE.ADVANTAGE_6'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.HYPERBASE.ADVANTAGE_7'
            }
          ]
        };
        break;
      case 'search':
        productAdvantage = {
          'items': [
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.HYPERBASE.ADVANTAGE_1'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.HYPERBASE.ADVANTAGE_2'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.HYPERBASE.ADVANTAGE_3'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.HYPERBASE.ADVANTAGE_4'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.HYPERBASE.ADVANTAGE_5'
            }
          ]
        };
        break;
      case 'sophon':
        productAdvantage = {
          'img': {
            'url': 'MODULES.SOPHON.ADVANTAGE_IMG_URL',
            'width': '700px',
            'height': '300px'
          },
          'items': [
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.SOPHON.ADVANTAGE_1'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.SOPHON.ADVANTAGE_2'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.SOPHON.ADVANTAGE_3'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.SOPHON.ADVANTAGE_4'
            }
          ]
        };
        break;
      case 'guardian':
        productAdvantage = {
          'items': [
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.GUARDIAN.ADVANTAGE_1'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.GUARDIAN.ADVANTAGE_2'
            }
          ]
        };
        break;
      case 'hadoop':
        productAdvantage = {
          'items': [
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'content': 'MODULES.HADOOP.ADVANTAGE_1'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.HADOOP.ADVANTAGE_2'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.HADOOP.ADVANTAGE_3'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'content': 'MODULES.HADOOP.ADVANTAGE_4'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.HADOOP.ADVANTAGE_5'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.HADOOP.ADVANTAGE_6'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.HADOOP.ADVANTAGE_7'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'content': 'MODULES.HADOOP.ADVANTAGE_8'
            }
          ]
        };
        break;
      case 'pilot':
        productAdvantage = {

        };
        break;
      case 'wrokflow':
        productAdvantage = {

        };
        break;
      case 'transporter':
        productAdvantage = {

        };
        break;
      case 'governor':
        productAdvantage = {

        };
        break;
      case 'rubik':
        productAdvantage = {

        };
        break;
      case 'waterdrop':
        productAdvantage = {

        };
        break;
      case 'txsql':
        productAdvantage = {

        };
        break;
      case 'prometheus':
        productAdvantage = {

        };
        break;
      case 'kafka':
        productAdvantage = {

        };
        break;
      case 'zeppelin':
        productAdvantage = {

        };
        break;
      case 'midas':
        productAdvantage = {

        };
        break;
      case 'terminal':
        productAdvantage = {

        };
        break;
      case 'redis':
        productAdvantage = {

        };
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
      case 'slipstream':
        productScenarios = {
          'items': [
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.SLIPSTREAM.SCENARIOS_1'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.SLIPSTREAM.SCENARIOS_2'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.SLIPSTREAM.SCENARIOS_3'
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
        productScenarios = {
          'items': [
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.HYPERBASE.SCENARIOS_1'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.HYPERBASE.SCENARIOS_2'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.HYPERBASE.SCENARIOS_3'
            }
          ]
        };
        break;
      case 'search':
        productScenarios = {
          'items': [
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.SEARCH.SCENARIOS_1'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.SEARCH.SCENARIOS_2'
            }
          ]
        };
        break;
      case 'sophon':
        productScenarios = {
          'items': [
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.SEARCH.SCENARIOS_1'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.SEARCH.SCENARIOS_2'
            }
          ]
        };
        break;
      case 'guardian':
        productScenarios = {
          'items': [
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.GUARDIAN.SCENARIOS_1'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.GUARDIAN.SCENARIOS_2'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.GUARDIAN.SCENARIOS_3'
            }
          ]
        };
        break;
      case 'hadoop':
        productScenarios = {
          'items': [
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.HADOOP.SCENARIOS_1'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.HADOOP.SCENARIOS_2'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'content': 'MODULES.HADOOP.SCENARIOS_3'
            }
          ]
        };
        break;
      case 'pilot':
        productScenarios = {

        };
        break;
      case 'wrokflow':
        productScenarios = {

        };
        break;
      case 'transporter':
        productScenarios = {

        };
        break;
      case 'governor':
        productScenarios = {

        };
        break;
      case 'rubik':
        productScenarios = {

        };
        break;
      case 'waterdrop':
        productScenarios = {

        };
        break;
      case 'txsql':
        productScenarios = {

        };
        break;
      case 'prometheus':
        productScenarios = {

        };
        break;
      case 'kafka':
        productScenarios = {

        };
        break;
      case 'zeppelin':
        productScenarios = {

        };
        break;
      case 'midas':
        productScenarios = {

        };
        break;
      case 'terminal':
        productScenarios = {

        };
        break;
      case 'redis':
        productScenarios = {

        };
        break;
      default:
        break;
    }
    return productScenarios;
  }
}
