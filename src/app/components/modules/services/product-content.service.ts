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
            'width': '530px',
            'height': '440px'
          },
          'items': [
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.INCEPTOR.INTRODUCE_1',
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.INCEPTOR.INTRODUCE_2',
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.INCEPTOR.INTRODUCE_3',
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.INCEPTOR.INTRODUCE_4',
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.INCEPTOR.INTRODUCE_5',
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.INCEPTOR.INTRODUCE_6',
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.INCEPTOR.INTRODUCE_7',
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.INCEPTOR.INTRODUCE_8',
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.INCEPTOR.INTRODUCE_9',
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.INCEPTOR.INTRODUCE_10',
            }
          ]
        };
        break;
      case 'slipstream':
        productIntroduce = {
          'img': {
            'url': 'MODULES.SLIPSTREAM.INTRODUCE_IMG_URL',
            'width': '530px',
            'height': '440px'
          },
          'items':[
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content':'MODULES.SLIPSTREAM.INTRODUCE_1'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': true,
              'title': true,
              'content':'MODULES.SLIPSTREAM.INTRODUCE_2'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': true,
              'title': false,
              'content':'MODULES.SLIPSTREAM.INTRODUCE_3'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': true,
              'title': true,
              'content':'MODULES.SLIPSTREAM.INTRODUCE_4'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': true,
              'title': false,
              'content':'MODULES.SLIPSTREAM.INTRODUCE_5'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': true,
              'title': true,
              'content':'MODULES.SLIPSTREAM.INTRODUCE_6'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': true,
              'title': false,
              'content':'MODULES.SLIPSTREAM.INTRODUCE_7'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': true,
              'title': true,
              'content':'MODULES.SLIPSTREAM.INTRODUCE_8'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': true,
              'title': false,
              'content':'MODULES.SLIPSTREAM.INTRODUCE_9'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': true,
              'title': true,
              'content':'MODULES.SLIPSTREAM.INTRODUCE_10'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': true,
              'title': false,
              'content':'MODULES.SLIPSTREAM.INTRODUCE_11'
            }
          ]
        };
        break;
      case 'discover':
        productIntroduce = {
          'img': {
            'url': 'MODULES.DISCOVER.INTRODUCE_IMG_URL',
            'width': '530px',
            'height': '440px'
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
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'content': 'MODULES.DISCOVER.INTRODUCE_5'
            }
          ]
        };
        break;
      case 'hyperbase':
        productIntroduce = {
          'img': {
            'url': 'MODULES.HYPERBASE.INTRODUCE_IMG_URL',
            'width': '530px',
            'height': '440px'
          },
          'items': [
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.HYPERBASE.INTRODUCE_1'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.HYPERBASE.INTRODUCE_2'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.HYPERBASE.INTRODUCE_3'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.HYPERBASE.INTRODUCE_4'
            }
          ]
        };
        break;
      case 'search':
        productIntroduce = {
          'img': {
            'url': 'MODULES.SEARCH.INTRODUCE_IMG_URL',
            'width': '530px',
            'height': '440px'
          },
          'items': [
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.SEARCH.INTRODUCE_1'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.SEARCH.INTRODUCE_2'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': false,
              'content': 'MODULES.SEARCH.INTRODUCE_3'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.SEARCH.INTRODUCE_4'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': true,
              'title': false,
              'content': 'MODULES.SEARCH.INTRODUCE_5'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': true,
              'title': false,
              'content': 'MODULES.SEARCH.INTRODUCE_6'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': true,
              'title': false,
              'content': 'MODULES.SEARCH.INTRODUCE_7'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.SEARCH.INTRODUCE_8'
            }
          ]
        };
        break;
      case 'sophon':
        productIntroduce = {
          'img': {
            'url': 'MODULES.SOPHON.INTRODUCE_IMG_URL',
            'width': '530px',
            'height': '440px'
          },
          'items': [
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.SOPHON.INTRODUCE_1'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.SOPHON.INTRODUCE_2'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.SOPHON.INTRODUCE_3'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.SOPHON.INTRODUCE_4'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.SOPHON.INTRODUCE_5'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.SOPHON.INTRODUCE_6'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.SOPHON.INTRODUCE_7'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.SOPHON.INTRODUCE_8'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.SOPHON.INTRODUCE_9'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.SOPHON.INTRODUCE_10'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.SOPHON.INTRODUCE_11'
            }
          ]
        };
        break;
      case 'guardian':
        productIntroduce = {
          'img': {
            'url': 'MODULES.GUARDIAN.INTRODUCE_IMG_URL',
            'width': '530px',
            'height': '440px'
          },
          'items': [
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.GUARDIAN.INTRODUCE_1'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.GUARDIAN.INTRODUCE_2'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.GUARDIAN.INTRODUCE_3'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.GUARDIAN.INTRODUCE_4'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.GUARDIAN.INTRODUCE_3'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.GUARDIAN.INTRODUCE_4'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.GUARDIAN.INTRODUCE_5'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.GUARDIAN.INTRODUCE_6'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.GUARDIAN.INTRODUCE_7'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.GUARDIAN.INTRODUCE_8'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.GUARDIAN.INTRODUCE_9'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.GUARDIAN.INTRODUCE_10'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.GUARDIAN.INTRODUCE_11'
            }
          ]
        };
        break;
      case 'hadoop':
        productIntroduce = {
          'img': {
            'url': 'MODULES.HADOOP.INTRODUCE_IMG_URL',
            'width': '530px',
            'height': '440px'
          },
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
            'width': '530px',
            'height': '440px'
          },
          'items': [
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.PILOT.INTRODUCE_1'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.PILOT.INTRODUCE_2'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.PILOT.INTRODUCE_3'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.PILOT.INTRODUCE_4'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.PILOT.INTRODUCE_5'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.PILOT.INTRODUCE_6'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.PILOT.INTRODUCE_7'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.PILOT.INTRODUCE_8'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.PILOT.INTRODUCE_9'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.PILOT.INTRODUCE_10'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.PILOT.INTRODUCE_11'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.PILOT.INTRODUCE_12'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.PILOT.INTRODUCE_13'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.PILOT.INTRODUCE_14'
            }
          ]
        };
        break;
      case 'workflow':
        productIntroduce = {
          'img': {
            'url': 'MODULES.WORKFLOW.INTRODUCE_IMG_URL',
            'width': '530px',
            'height': '440px'
          },
          'items': [
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.WORKFLOW.INTRODUCE_1'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.WORKFLOW.INTRODUCE_2'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.WORKFLOW.INTRODUCE_3'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.WORKFLOW.INTRODUCE_4'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.WORKFLOW.INTRODUCE_5'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.WORKFLOW.INTRODUCE_6'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.WORKFLOW.INTRODUCE_7'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.WORKFLOW.INTRODUCE_8'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.WORKFLOW.INTRODUCE_9'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.WORKFLOW.INTRODUCE_10'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.WORKFLOW.INTRODUCE_11'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.WORKFLOW.INTRODUCE_12'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.WORKFLOW.INTRODUCE_13'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.WORKFLOW.INTRODUCE_14'
            }
          ]
        };
        break;
      case 'transporter':
        productIntroduce = {
          'img': {
            'url': 'MODULES.TRANSPORTER.INTRODUCE_IMG_URL',
            'width': '530px',
            'height': '440px'
          },
          'items': [
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.TRANSPORTER.INTRODUCE_1'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.TRANSPORTER.INTRODUCE_2'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.TRANSPORTER.INTRODUCE_3'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': false,
              'content': 'MODULES.TRANSPORTER.INTRODUCE_4'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': false,
              'content': 'MODULES.TRANSPORTER.INTRODUCE_5'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.TRANSPORTER.INTRODUCE_6'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.TRANSPORTER.INTRODUCE_7'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.TRANSPORTER.INTRODUCE_8'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.TRANSPORTER.INTRODUCE_9'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.TRANSPORTER.INTRODUCE_10'
            }
          ]
        };
        break;
      case 'governor':
        productIntroduce = {
          'img': {
            'url': 'MODULES.GOVERNOR.INTRODUCE_IMG_URL',
            'width': '530px',
            'height': '440px'
          },
          'items': [
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.GOVERNOR.INTRODUCE_1'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.GOVERNOR.INTRODUCE_2'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': false,
              'content': 'MODULES.GOVERNOR.INTRODUCE_3'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.GOVERNOR.INTRODUCE_4'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': false,
              'content': 'MODULES.GOVERNOR.INTRODUCE_5'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.GOVERNOR.INTRODUCE_6'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': false,
              'content': 'MODULES.GOVERNOR.INTRODUCE_7'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.GOVERNOR.INTRODUCE_8'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': false,
              'content': 'MODULES.GOVERNOR.INTRODUCE_9'
            }
          ]
        };
        break;
      case 'rubik':
        productIntroduce = {
          'img': {
            'url': 'MODULES.RUBIK.INTRODUCE_IMG_URL',
            'width': '530px',
            'height': '440px'
          },
          'items': [
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.RUBIK.INTRODUCE_1'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.RUBIK.INTRODUCE_2'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.RUBIK.INTRODUCE_3'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.RUBIK.INTRODUCE_4'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.RUBIK.INTRODUCE_5'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.RUBIK.INTRODUCE_6'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.RUBIK.INTRODUCE_7'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.RUBIK.INTRODUCE_8'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.RUBIK.INTRODUCE_9'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.RUBIK.INTRODUCE_10'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.RUBIK.INTRODUCE_11'
            }
          ]
        };
        break;
      case 'waterdrop':
        productIntroduce = {
          'img': {
            'url': 'MODULES.WATERDROP.INTRODUCE_IMG_URL',
            'width': '530px',
            'height': '440px'
          },
          'items': []
        };
        break;
      case 'txsql':
        productIntroduce = {
          'img': {
            'url': 'MODULES.TXSQL.INTRODUCE_IMG_URL',
            'width': '530px',
            'height': '440px'
          },
          'items': []
        };
        break;
      case 'prometheus':
        productIntroduce = {
          'img': {
            'url': 'MODULES.PROMETHEUS.INTRODUCE_IMG_URL',
            'width': '530px',
            'height': '440px'
          },
          'items': []
        };
        break;
      case 'kafka':
        productIntroduce = {
          'img': {
            'url': 'MODULES.KAFKA.INTRODUCE_IMG_URL',
            'width': '530px',
            'height': '440px'
          },
          'items': []
        };
        break;
      case 'zeppelin':
        productIntroduce = {
          'img': {
            'url': 'MODULES.ZEPPELIN.INTRODUCE_IMG_URL',
            'width': '530px',
            'height': '440px'
          },
          'items': []
        };
        break;
      case 'midas':
        productIntroduce = {
          'img': {
            'url': 'MODULES.MIDAS.INTRODUCE_IMG_URL',
            'width': '530px',
            'height': '440px'
          },
          'items': []
        };
        break;
      case 'terminal':
        productIntroduce = {
          'img': {
            'url': 'MODULES.TERMINAL.INTRODUCE_IMG_URL',
            'width': '530px',
            'height': '440px'
          },
          'items': []
        };
        break;
      case 'redis':
        productIntroduce = {
          'img': {
            'url': 'MODULES.REDIS.INTRODUCE_IMG_URL',
            'width': '530px',
            'height': '440px'
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
              'title':true,
              'content': 'MODULES.INCEPTOR.ADVANTAGE_1'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.INCEPTOR.ADVANTAGE_2'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title':true,
              'content': 'MODULES.INCEPTOR.ADVANTAGE_3'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.INCEPTOR.ADVANTAGE_4'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title':true,
              'content': 'MODULES.INCEPTOR.ADVANTAGE_5'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.INCEPTOR.ADVANTAGE_6'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title':true,
              'content': 'MODULES.INCEPTOR.ADVANTAGE_7'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.INCEPTOR.ADVANTAGE_8'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title':true,
              'content': 'MODULES.INCEPTOR.ADVANTAGE_9'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.INCEPTOR.ADVANTAGE_10'
            }
          ]
        };
        break;
      case 'slipstream':
        productAdvantage = {
          'items': [
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.SLIPSTREAM.ADVANTAGE_1'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.SLIPSTREAM.ADVANTAGE_2'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.SLIPSTREAM.ADVANTAGE_3'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.SLIPSTREAM.ADVANTAGE_4'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.SLIPSTREAM.ADVANTAGE_5'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.SLIPSTREAM.ADVANTAGE_6'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.SLIPSTREAM.ADVANTAGE_7'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.SLIPSTREAM.ADVANTAGE_8'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.SLIPSTREAM.ADVANTAGE_9'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.SLIPSTREAM.ADVANTAGE_10'
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
              'title': true,
              'content': 'MODULES.DISCOVER.ADVANTAGE_1'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.DISCOVER.ADVANTAGE_2'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.DISCOVER.ADVANTAGE_3'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.DISCOVER.ADVANTAGE_4'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.DISCOVER.ADVANTAGE_5'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.DISCOVER.ADVANTAGE_6'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.DISCOVER.ADVANTAGE_7'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.DISCOVER.ADVANTAGE_8'
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
              'title': true,
              'content': 'MODULES.HYPERBASE.ADVANTAGE_1'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.HYPERBASE.ADVANTAGE_2'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.HYPERBASE.ADVANTAGE_3'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.HYPERBASE.ADVANTAGE_4'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.HYPERBASE.ADVANTAGE_5'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.HYPERBASE.ADVANTAGE_6'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.HYPERBASE.ADVANTAGE_7'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.HYPERBASE.ADVANTAGE_8'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.HYPERBASE.ADVANTAGE_9'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.HYPERBASE.ADVANTAGE_10'
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
              'title': true,
              'content': 'MODULES.SEARCH.ADVANTAGE_1'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.SEARCH.ADVANTAGE_2'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.SEARCH.ADVANTAGE_3'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.SEARCH.ADVANTAGE_4'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.SEARCH.ADVANTAGE_5'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.SEARCH.ADVANTAGE_6'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.SEARCH.ADVANTAGE_7'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.SEARCH.ADVANTAGE_8'
            }
          ]
        };
        break;
      case 'sophon':
        productAdvantage = {
          'items': [
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.SOPHON.ADVANTAGE_1'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.SOPHON.ADVANTAGE_2'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.SOPHON.ADVANTAGE_3'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.SOPHON.ADVANTAGE_4'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.SOPHON.ADVANTAGE_5'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.SOPHON.ADVANTAGE_6'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.SOPHON.ADVANTAGE_7'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.SOPHON.ADVANTAGE_8'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.SOPHON.ADVANTAGE_9'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.SOPHON.ADVANTAGE_10'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.SOPHON.ADVANTAGE_11'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.SOPHON.ADVANTAGE_12'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.SOPHON.ADVANTAGE_13'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.SOPHON.ADVANTAGE_14'
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
              'title': true,
              'content': 'MODULES.GUARDIAN.ADVANTAGE_1'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.GUARDIAN.ADVANTAGE_2'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.GUARDIAN.ADVANTAGE_3'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.GUARDIAN.ADVANTAGE_4'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.GUARDIAN.ADVANTAGE_5'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.GUARDIAN.ADVANTAGE_6'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.GUARDIAN.ADVANTAGE_7'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.GUARDIAN.ADVANTAGE_8'
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
          items: [
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.PILOT.ADVANTAGE_1'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.PILOT.ADVANTAGE_2'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.PILOT.ADVANTAGE_3'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.PILOT.ADVANTAGE_4'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.PILOT.ADVANTAGE_5'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.PILOT.ADVANTAGE_6'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.PILOT.ADVANTAGE_7'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.PILOT.ADVANTAGE_8'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.PILOT.ADVANTAGE_9'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.PILOT.ADVANTAGE_10'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.PILOT.ADVANTAGE_11'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.PILOT.ADVANTAGE_12'
            }
          ]
        };
        break;
      case 'workflow':
        productAdvantage = {
          items: [
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.WORKFLOW.ADVANTAGE_1'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.WORKFLOW.ADVANTAGE_2'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.WORKFLOW.ADVANTAGE_3'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.WORKFLOW.ADVANTAGE_4'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.WORKFLOW.ADVANTAGE_5'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.WORKFLOW.ADVANTAGE_6'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.WORKFLOW.ADVANTAGE_7'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.WORKFLOW.ADVANTAGE_8'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.WORKFLOW.ADVANTAGE_9'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.WORKFLOW.ADVANTAGE_10'
            }
          ]
        };
        break;
      case 'transporter':
        productAdvantage = {
          items: [
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.TRANSPORTER.ADVANTAGE_1'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.TRANSPORTER.ADVANTAGE_2'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.TRANSPORTER.ADVANTAGE_3'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.TRANSPORTER.ADVANTAGE_4'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.TRANSPORTER.ADVANTAGE_5'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.TRANSPORTER.ADVANTAGE_6'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.TRANSPORTER.ADVANTAGE_7'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.TRANSPORTER.ADVANTAGE_8'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.TRANSPORTER.ADVANTAGE_9'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.TRANSPORTER.ADVANTAGE_10'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.TRANSPORTER.ADVANTAGE_11'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.TRANSPORTER.ADVANTAGE_12'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.TRANSPORTER.ADVANTAGE_13'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.TRANSPORTER.ADVANTAGE_14'
            }
          ]
        };
        break;
      case 'governor':
        productAdvantage = {
          items: [
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.GOVERNOR.ADVANTAGE_1'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.GOVERNOR.ADVANTAGE_2'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.GOVERNOR.ADVANTAGE_3'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.GOVERNOR.ADVANTAGE_4'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.GOVERNOR.ADVANTAGE_5'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.GOVERNOR.ADVANTAGE_6'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.GOVERNOR.ADVANTAGE_7'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.GOVERNOR.ADVANTAGE_8'
            }
          ]
        };
        break;
      case 'rubik':
        productAdvantage = {
          items: [
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.RUBIK.ADVANTAGE_1'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.RUBIK.ADVANTAGE_2'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.RUBIK.ADVANTAGE_3'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.RUBIK.ADVANTAGE_4'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.RUBIK.ADVANTAGE_5'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.RUBIK.ADVANTAGE_6'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.RUBIK.ADVANTAGE_7'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.RUBIK.ADVANTAGE_8'
            },
            {
              'chapter': false,
              'paragraph': true,
              'indent': false,
              'title': true,
              'content': 'MODULES.RUBIK.ADVANTAGE_9'
            },
            {
              'chapter': true,
              'paragraph': false,
              'indent': false,
              'title': false,
              'content': 'MODULES.RUBIK.ADVANTAGE_10'
            }
          ]
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
}
