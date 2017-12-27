import { Injectable } from '@angular/core';

@Injectable()
export class ProductContentService {
  IMG_WIDTH_LARGE = '560px';
  IMG_WIDTH_SMALL = '420px';

  constructor() {

  }

  getProductIntroduce(moduleName): any {
    let productIntroduce = {};
    switch (moduleName) {
      case 'inceptor':
        productIntroduce = {
          img: {
            url: 'MODULES.INCEPTOR.INTRODUCE_IMG_URL',
            width: this.IMG_WIDTH_LARGE,
            height: '400px',
          },
          items: [
            {
              type: 'text',
              content: 'MODULES.INCEPTOR.INTRODUCE_1',
            },
            {
              type: 'title',
              content: 'MODULES.INCEPTOR.INTRODUCE_2',
            },
            {
              type: 'text',
              content: 'MODULES.INCEPTOR.INTRODUCE_3',
            },
            {
              type: 'title',
              content: 'MODULES.INCEPTOR.INTRODUCE_4',
            },
            {
              type: 'text',
              content: 'MODULES.INCEPTOR.INTRODUCE_5',
            },
            {
              type: 'title',
              content: 'MODULES.INCEPTOR.INTRODUCE_6',
            },
            {
              type: 'text',
              content: 'MODULES.INCEPTOR.INTRODUCE_7',
            },
            {
              type: 'title',
              content: 'MODULES.INCEPTOR.INTRODUCE_8',
            },
            {
              type: 'text',
              content: 'MODULES.INCEPTOR.INTRODUCE_9',
            },
            {
              type: 'title',
              content: 'MODULES.INCEPTOR.INTRODUCE_10',
            },
            {
              type: 'text',
              content: 'MODULES.INCEPTOR.INTRODUCE_11',
            },
          ],
        };
        break;
      case 'slipstream':
        productIntroduce = {
          img: {
            url: 'MODULES.SLIPSTREAM.INTRODUCE_IMG_URL',
            width: this.IMG_WIDTH_LARGE,
            height: '212px',
          },
          items: [
            {
              type: 'text',
              content: 'MODULES.SLIPSTREAM.INTRODUCE_1',
            },
            {
              type: 'title',
              content: 'MODULES.SLIPSTREAM.INTRODUCE_2',
            },
            {
              type: 'text',
              content: 'MODULES.SLIPSTREAM.INTRODUCE_3',
            },
            {
              type: 'title',
              content: 'MODULES.SLIPSTREAM.INTRODUCE_4',
            },
            {
              type: 'text',
              content: 'MODULES.SLIPSTREAM.INTRODUCE_5',
            },
            {
              type: 'title',
              content: 'MODULES.SLIPSTREAM.INTRODUCE_6',
            },
            {
              type: 'text',
              content: 'MODULES.SLIPSTREAM.INTRODUCE_7',
            },
            {
              type: 'title',
              content: 'MODULES.SLIPSTREAM.INTRODUCE_8',
            },
            {
              type: 'text',
              content: 'MODULES.SLIPSTREAM.INTRODUCE_9',
            },
            {
              type: 'title',
              content: 'MODULES.SLIPSTREAM.INTRODUCE_10',
            },
            {
              type: 'text',
              content: 'MODULES.SLIPSTREAM.INTRODUCE_11',
            },
          ],
        };
        break;
      case 'discover':
        productIntroduce = {
          img: {
            url: 'MODULES.DISCOVER.INTRODUCE_IMG_URL',
            width: this.IMG_WIDTH_SMALL,
            height: '250px',
          },
          items: [
            {
              type: 'text',
              content: 'MODULES.DISCOVER.INTRODUCE_1',
            },
            {
              type: 'text',
              content: 'MODULES.DISCOVER.INTRODUCE_2',
            },
            {
              type: 'text',
              content: 'MODULES.DISCOVER.INTRODUCE_3',
            },
            {
              type: 'text',
              content: 'MODULES.DISCOVER.INTRODUCE_4',
            },
            {
              type: 'text',
              content: 'MODULES.DISCOVER.INTRODUCE_5',
            },
            {
              type: 'text',
              content: 'MODULES.DISCOVER.INTRODUCE_6',
            },
          ],
        };
        break;
      case 'hyperbase':
        productIntroduce = {
          img: {
            url: 'MODULES.HYPERBASE.INTRODUCE_IMG_URL',
            width: this.IMG_WIDTH_LARGE,
            height: '285px',
          },
          items: [
            {
              type: 'text',
              content: 'MODULES.HYPERBASE.INTRODUCE_1',
            },
            {
              type: 'text',
              content: 'MODULES.HYPERBASE.INTRODUCE_2',
            },
            {
              type: 'text',
              content: 'MODULES.HYPERBASE.INTRODUCE_3',
            },
            {
              type: 'text',
              content: 'MODULES.HYPERBASE.INTRODUCE_4',
            },
          ],
        };
        break;
      case 'search':
        productIntroduce = {
          img: {
            url: 'MODULES.SEARCH.INTRODUCE_IMG_URL',
            width: this.IMG_WIDTH_SMALL,
            height: '364px',
          },
          items: [
            {
              type: 'text',
              content: 'MODULES.SEARCH.INTRODUCE_1',
            },
            {
              type: 'text',
              inline_group: true,
              content: 'MODULES.SEARCH.INTRODUCE_2',
            },
            {
              type: 'text',
              inline_group: true,
              content: 'MODULES.SEARCH.INTRODUCE_3',
            },
            {
              type: 'text',
              inline_group: true,
              content: 'MODULES.SEARCH.INTRODUCE_4',
            },
            {
              type: 'group-text',
              group: [
                {
                  type: 'text',
                  content: 'MODULES.SEARCH.INTRODUCE_5',
                },
                {
                  type: 'text',
                  content: 'MODULES.SEARCH.INTRODUCE_6',
                },
              ],
            },
            {
              type: 'text',
              content: 'MODULES.SEARCH.INTRODUCE_7',
            },
            {
              type: 'text',
              content: 'MODULES.SEARCH.INTRODUCE_8',
            },
          ],
        };
        break;
      case 'sophon':
        productIntroduce = {
          img: {
            url: 'MODULES.SOPHON.INTRODUCE_IMG_URL',
            width: this.IMG_WIDTH_LARGE,
            height: '277px',
          },
          items: [
            {
              type: 'text',
              content: 'MODULES.SOPHON.INTRODUCE_1',
            },
            {
              type: 'title',
              content: 'MODULES.SOPHON.INTRODUCE_2',
            },
            {
              type: 'text',
              content: 'MODULES.SOPHON.INTRODUCE_3',
            },
            {
              type: 'title',
              content: 'MODULES.SOPHON.INTRODUCE_4',
            },
            {
              type: 'text',
              content: 'MODULES.SOPHON.INTRODUCE_5',
            },
            {
              type: 'title',
              content: 'MODULES.SOPHON.INTRODUCE_6',
            },
            {
              type: 'text',
              content: 'MODULES.SOPHON.INTRODUCE_7',
            },
            {
              type: 'title',
              content: 'MODULES.SOPHON.INTRODUCE_8',
            },
            {
              type: 'text',
              content: 'MODULES.SOPHON.INTRODUCE_9',
            },
            {
              type: 'titile',
              content: 'MODULES.SOPHON.INTRODUCE_10',
            },
            {
              type: 'text',
              content: 'MODULES.SOPHON.INTRODUCE_11',
            },
          ],
        };
        break;
      case 'guardian':
        productIntroduce = {
          img: {
            url: 'MODULES.GUARDIAN.INTRODUCE_IMG_URL',
            width: this.IMG_WIDTH_SMALL,
            height: '378px',
          },
          items: [
            {
              type: 'text',
              content: 'MODULES.GUARDIAN.INTRODUCE_1',
            },
            {
              type: 'text',
              content: 'MODULES.GUARDIAN.INTRODUCE_2',
            },
            {
              type: 'title',
              content: 'MODULES.GUARDIAN.INTRODUCE_3',
            },
            {
              type: 'text',
              content: 'MODULES.GUARDIAN.INTRODUCE_4',
            },
            {
              type: 'title',
              content: 'MODULES.GUARDIAN.INTRODUCE_5',
            },
            {
              type: 'text',
              content: 'MODULES.GUARDIAN.INTRODUCE_6',
            },
            {
              type: 'title',
              content: 'MODULES.GUARDIAN.INTRODUCE_7',
            },
            {
              type: 'text',
              content: 'MODULES.GUARDIAN.INTRODUCE_8',
            },
            {
              type: 'title',
              content: 'MODULES.GUARDIAN.INTRODUCE_9',
            },
            {
              type: 'text',
              content: 'MODULES.GUARDIAN.INTRODUCE_10',
            },
            {
              type: 'text',
              content: 'MODULES.GUARDIAN.INTRODUCE_11',
            },
          ],
        };
        break;
      case 'hadoop':
        productIntroduce = {
          img: {
            url: false,
          },
          items: [
            {
              type: 'text',
              content: 'MODULES.HADOOP.INTRODUCE_1',
            },
            {
              type: 'title',
              content: 'MODULES.HADOOP.INTRODUCE_2',
            },
            {
              type: 'text',
              content: 'MODULES.HADOOP.INTRODUCE_3',
            },
            {
              type: 'title',
              content: 'MODULES.HADOOP.INTRODUCE_4',
            },
            {
              type: 'text',
              content: 'MODULES.HADOOP.INTRODUCE_5',
            },
            {
              type: 'text',
              content: 'MODULES.HADOOP.INTRODUCE_6',
            },
          ],
        };
        break;
      case 'pilot':
        productIntroduce = {
          img: {
            url: 'MODULES.PILOT.INTRODUCE_IMG_URL',
            width: this.IMG_WIDTH_LARGE,
            height: '313px',
          },
          items: [
            {
              type: 'text',
              content: 'MODULES.PILOT.INTRODUCE_1',
            },
            {
              type: 'text',
              content: 'MODULES.PILOT.INTRODUCE_2',
            },
            {
              type: 'title',
              content: 'MODULES.PILOT.INTRODUCE_3',
            },
            {
              type: 'text',
              content: 'MODULES.PILOT.INTRODUCE_4',
            },
            {
              type: 'title',
              content: 'MODULES.PILOT.INTRODUCE_5',
            },
            {
              type: 'text',
              content: 'MODULES.PILOT.INTRODUCE_6',
            },
            {
              type: 'title',
              content: 'MODULES.PILOT.INTRODUCE_7',
            },
            {
              type: 'text',
              content: 'MODULES.PILOT.INTRODUCE_8',
            },
            {
              type: 'title',
              content: 'MODULES.PILOT.INTRODUCE_9',
            },
            {
              type: 'text',
              content: 'MODULES.PILOT.INTRODUCE_10',
            },
            {
              type: 'text',
              inline_group: '10px',
              content: 'MODULES.PILOT.INTRODUCE_11',
            },
            {
              type: 'group-text',
              group: [
                {
                  type: 'text',
                  content: 'MODULES.PILOT.INTRODUCE_12',
                },
                {
                  type: 'text',
                  content: 'MODULES.PILOT.INTRODUCE_13',
                },
              ],
            },
            {
              type: 'title',
              content: 'MODULES.PILOT.INTRODUCE_14',
            },
            {
              type: 'text',
              content: 'MODULES.PILOT.INTRODUCE_15',
            },
            {
              type: 'title',
              content: 'MODULES.PILOT.INTRODUCE_16',
            },
            {
              type: 'text',
              content: 'MODULES.PILOT.INTRODUCE_17',
            },
          ],
        };
        break;
      case 'workflow':
        productIntroduce = {
          img: {
            url: 'MODULES.WORKFLOW.INTRODUCE_IMG_URL',
            width: this.IMG_WIDTH_LARGE,
            height: '344px',
          },
          items: [
            {
              type: 'text',
              content: 'MODULES.WORKFLOW.INTRODUCE_1',
            },
            {
              type: 'text',
              content: 'MODULES.WORKFLOW.INTRODUCE_2',
            },
            {
              type: 'title',
              content: 'MODULES.WORKFLOW.INTRODUCE_3',
            },
            {
              type: 'text',
              content: 'MODULES.WORKFLOW.INTRODUCE_4',
            },
            {
              type: 'title',
              content: 'MODULES.WORKFLOW.INTRODUCE_5',
            },
            {
              type: 'text',
              content: 'MODULES.WORKFLOW.INTRODUCE_6',
            },
            {
              type: 'title',
              content: 'MODULES.WORKFLOW.INTRODUCE_7',
            },
            {
              type: 'text',
              content: 'MODULES.WORKFLOW.INTRODUCE_8',
            },
            {
              type: 'title',
              content: 'MODULES.WORKFLOW.INTRODUCE_9',
            },
            {
              type: 'text',
              content: 'MODULES.WORKFLOW.INTRODUCE_10',
            },
            {
              type: 'title',
              content: 'MODULES.WORKFLOW.INTRODUCE_11',
            },
            {
              type: 'text',
              content: 'MODULES.WORKFLOW.INTRODUCE_12',
            },
            {
              type: 'title',
              content: 'MODULES.WORKFLOW.INTRODUCE_13',
            },
            {
              type: 'text',
              content: 'MODULES.WORKFLOW.INTRODUCE_14',
            },
          ],
        };
        break;
      case 'transporter':
        productIntroduce = {
          img: {
            url: 'MODULES.TRANSPORTER.INTRODUCE_IMG_URL',
            width: this.IMG_WIDTH_LARGE,
            height: '384px',
          },
          items: [
            {
              type: 'text',
              content: 'MODULES.TRANSPORTER.INTRODUCE_1',
            },
            {
              type: 'text',
              content: 'MODULES.TRANSPORTER.INTRODUCE_2',
            },
            {
              type: 'title',
              content: 'MODULES.TRANSPORTER.INTRODUCE_3',
            },
            {
              type: 'text',
              content: 'MODULES.TRANSPORTER.INTRODUCE_4',
            },
            {
              type: 'text',
              content: 'MODULES.TRANSPORTER.INTRODUCE_5',
            },
            {
              type: 'text',
              content: 'MODULES.TRANSPORTER.INTRODUCE_6',
            },
            {
              type: 'title',
              content: 'MODULES.TRANSPORTER.INTRODUCE_7',
            },
            {
              type: 'text',
              content: 'MODULES.TRANSPORTER.INTRODUCE_8',
            },
            {
              type: 'title',
              content: 'MODULES.TRANSPORTER.INTRODUCE_9',
            },
            {
              type: 'text',
              content: 'MODULES.TRANSPORTER.INTRODUCE_10',
            },
          ],
        };
        break;
      case 'governor':
        productIntroduce = {
          img: {
            url: 'MODULES.GOVERNOR.INTRODUCE_IMG_URL',
            width: this.IMG_WIDTH_LARGE,
            height: '322px',
          },
          items: [
            {
              type: 'text',
              content: 'MODULES.GOVERNOR.INTRODUCE_1',
            },
            {
              type: 'text',
              content: 'MODULES.GOVERNOR.INTRODUCE_2',
            },
            {
              type: 'title',
              content: 'MODULES.GOVERNOR.INTRODUCE_3',
            },
            {
              type: 'text',
              content: 'MODULES.GOVERNOR.INTRODUCE_4',
            },
            {
              type: 'title',
              content: 'MODULES.GOVERNOR.INTRODUCE_5',
            },
            {
              type: 'text',
              content: 'MODULES.GOVERNOR.INTRODUCE_6',
            },
            {
              type: 'title',
              content: 'MODULES.GOVERNOR.INTRODUCE_7',
            },
            {
              type: 'text',
              content: 'MODULES.GOVERNOR.INTRODUCE_8',
            },
            {
              type: 'title',
              content: 'MODULES.GOVERNOR.INTRODUCE_9',
            },
            {
              type: 'text',
              content: 'MODULES.GOVERNOR.INTRODUCE_10',
            },
          ],
        };
        break;
      case 'rubik':
        productIntroduce = {
          img: {
            url: 'MODULES.RUBIK.INTRODUCE_IMG_URL',
            width: this.IMG_WIDTH_LARGE,
            height: '261px',
          },
          items: [
            {
              type: 'text',
              content: 'MODULES.RUBIK.INTRODUCE_1',
            },
            {
              type: 'title',
              content: 'MODULES.RUBIK.INTRODUCE_2',
            },
            {
              type: 'text',
              content: 'MODULES.RUBIK.INTRODUCE_3',
            },
            {
              type: 'title',
              content: 'MODULES.RUBIK.INTRODUCE_4',
            },
            {
              type: 'text',
              content: 'MODULES.RUBIK.INTRODUCE_5',
            },
            {
              type: 'title',
              content: 'MODULES.RUBIK.INTRODUCE_6',
            },
            {
              type: 'text',
              content: 'MODULES.RUBIK.INTRODUCE_7',
            },
            {
              type: 'title',
              content: 'MODULES.RUBIK.INTRODUCE_8',
            },
            {
              type: 'text',
              content: 'MODULES.RUBIK.INTRODUCE_9',
            },
            {
              type: 'title',
              content: 'MODULES.RUBIK.INTRODUCE_10',
            },
            {
              type: 'text',
              content: 'MODULES.RUBIK.INTRODUCE_11',
            },
          ],
        };
        break;
      case 'txsql':
        productIntroduce = {
          img: {
            url: 'MODULES.TXSQL.INTRODUCE_IMG_URL',
            width: this.IMG_WIDTH_LARGE,
            height: '333px',
          },
          items: [
            {
              type: 'text',
              content: 'MODULES.TXSQL.INTRODUCE_1',
            },
            {
              type: 'text',
              content: 'MODULES.TXSQL.INTRODUCE_2',
            },
            {
              type: 'text',
              content: 'MODULES.TXSQL.INTRODUCE_3',
            },
            {
              type: 'group-text',
              group: [
                {
                  type: 'text',
                  content: 'MODULES.TXSQL.INTRODUCE_4',
                },
                {
                  type: 'text',
                  content: 'MODULES.TXSQL.INTRODUCE_5',
                },
                {
                  type: 'text',
                  content: 'MODULES.TXSQL.INTRODUCE_6',
                },
              ],
            },
            {
              type: 'text',
              content: 'MODULES.TXSQL.INTRODUCE_7',
            },
          ],
        };
        break;
      case 'milano':
        productIntroduce = {
          img: {
            url: 'MODULES.MILANO.INTRODUCE_IMG_URL',
            width: this.IMG_WIDTH_LARGE,
            height: '282px',
          },
          items: [
            {
              type: 'text',
              content: 'MODULES.MILANO.INTRODUCE_1',
            },
            {
              type: 'text',
              content: 'MODULES.MILANO.INTRODUCE_2',
            },
            {
              type: 'title',
              content: 'MODULES.MILANO.INTRODUCE_3',
            },
            {
              type: 'text',
              content: 'MODULES.MILANO.INTRODUCE_4',
            },
            {
              type: 'title',
              content: 'MODULES.MILANO.INTRODUCE_5',
            },
            {
              type: 'text',
              content: 'MODULES.MILANO.INTRODUCE_6',
            },
            {
              type: 'title',
              content: 'MODULES.MILANO.INTRODUCE_7',
            },
            {
              type: 'text',
              content: 'MODULES.MILANO.INTRODUCE_8',
            },
            {
              type: 'title',
              content: 'MODULES.MILANO.INTRODUCE_9',
            },
            {
              type: 'text',
              content: 'MODULES.MILANO.INTRODUCE_10',
            },
            {
              type: 'title',
              content: 'MODULES.MILANO.INTRODUCE_11',
            },
            {
              type: 'text',
              content: 'MODULES.MILANO.INTRODUCE_12',
            },
          ],
        };
        break;
      case 'prometheus':
        productIntroduce = {
          img: {
            url: 'MODULES.PROMETHEUS.INTRODUCE_IMG_URL',
            width: this.IMG_WIDTH_SMALL,
            height: '215px',
          },
          items: [
            {
              type: 'text',
              content: 'MODULES.PROMETHEUS.INTRODUCE_1',
            },
            {
              type: 'text',
              content: 'MODULES.PROMETHEUS.INTRODUCE_2',
            },
            {
              type: 'group-text',
              group: [
                {
                  type: 'text',
                  content: 'MODULES.PROMETHEUS.INTRODUCE_3',
                },
                {
                  type: 'text',
                  content: 'MODULES.PROMETHEUS.INTRODUCE_4',
                },
                {
                  type: 'text',
                  content: 'MODULES.PROMETHEUS.INTRODUCE_5',
                },
                {
                  type: 'text',
                  content: 'MODULES.PROMETHEUS.INTRODUCE_6',
                },
              ],
            },
          ],
        };
        break;
      case 'kafka':
        productIntroduce = {
          img: {
            url: 'MODULES.KAFKA.INTRODUCE_IMG_URL',
            width: this.IMG_WIDTH_SMALL,
            height: '266px',
          },
          items: [
            {
              type: 'text',
              content: 'MODULES.KAFKA.INTRODUCE_1',
            },
            {
              type: 'text',
              content: 'MODULES.KAFKA.INTRODUCE_2',
            },
            {
              type: 'text',
              content: 'MODULES.KAFKA.INTRODUCE_3',
            },
            {
              type: 'text',
              content: 'MODULES.KAFKA.INTRODUCE_4',
            },
            {
              type: 'text',
              content: 'MODULES.KAFKA.INTRODUCE_5',
            },
            {
              type: 'text',
              content: 'MODULES.KAFKA.INTRODUCE_6',
            },
            {
              type: 'text',
              content: 'MODULES.KAFKA.INTRODUCE_7',
            },
          ],
        };
        break;
      case 'zeppelin':
        productIntroduce = {
          img: {
            url: 'MODULES.ZEPPELIN.INTRODUCE_IMG_URL',
            width: this.IMG_WIDTH_LARGE,
            height: '386px',
          },
          items: [
            {
              type: 'text',
              content: 'MODULES.ZEPPELIN.INTRODUCE_1',
            },
            {
              type: 'text',
              content: 'MODULES.ZEPPELIN.INTRODUCE_2',
            },
            {
              type: 'title',
              content: 'MODULES.ZEPPELIN.INTRODUCE_3',
            },
            {
              type: 'text',
              content: 'MODULES.ZEPPELIN.INTRODUCE_4',
            },
            {
              type: 'title',
              content: 'MODULES.ZEPPELIN.INTRODUCE_5',
            },
            {
              type: 'text',
              content: 'MODULES.ZEPPELIN.INTRODUCE_6',
            },
            {
              type: 'title',
              content: 'MODULES.ZEPPELIN.INTRODUCE_7',
            },
            {
              type: 'text',
              content: 'MODULES.ZEPPELIN.INTRODUCE_8',
            },
            {
              type: 'title',
              content: 'MODULES.ZEPPELIN.INTRODUCE_9',
            },
            {
              type: 'text',
              content: 'MODULES.ZEPPELIN.INTRODUCE_10',
            },
            {
              type: 'group-text',
              group: [
                {
                  type: 'text',
                  content: 'MODULES.ZEPPELIN.INTRODUCE_11',
                },
                {
                  type: 'text',
                  content: 'MODULES.ZEPPELIN.INTRODUCE_12',
                },
                {
                  type: 'text',
                  content: 'MODULES.ZEPPELIN.INTRODUCE_13',
                },
              ],
            },
          ],
        };
        break;
      case 'midas':
        productIntroduce = {
          img: {
            url: 'MODULES.MIDAS.INTRODUCE_IMG_URL',
            width: this.IMG_WIDTH_LARGE,
            height: '311px',
          },
          items: [
            {
              type: 'text',
              content: 'MODULES.MIDAS.INTRODUCE_1',
            },
            {
              type: 'text',
              content: 'MODULES.MIDAS.INTRODUCE_2',
            },
            {
              type: 'title',
              content: 'MODULES.MIDAS.INTRODUCE_3',
            },
            {
              type: 'text',
              content: 'MODULES.MIDAS.INTRODUCE_4',
            },
            {
              type: 'title',
              content: 'MODULES.MIDAS.INTRODUCE_5',
            },
            {
              type: 'text',
              content: 'MODULES.MIDAS.INTRODUCE_6',
            },
            {
              type: 'title',
              content: 'MODULES.MIDAS.INTRODUCE_7',
            },
            {
              type: 'text',
              content: 'MODULES.MIDAS.INTRODUCE_8',
            },
            {
              type: 'title',
              content: 'MODULES.MIDAS.INTRODUCE_9',
            },
            {
              type: 'text',
              content: 'MODULES.MIDAS.INTRODUCE_10',
            },
            {
              type: 'title',
              content: 'MODULES.MIDAS.INTRODUCE_11',
            },
            {
              type: 'text',
              content: 'MODULES.MIDAS.INTRODUCE_12',
            },
          ],
        };
        break;
      case 'terminal':
        productIntroduce = {
          img: {
            url: 'MODULES.TERMINAL.INTRODUCE_IMG_URL',
            width: this.IMG_WIDTH_LARGE,
            height: '386px',
          },
          items: [
            {
              type: 'text',
              content: 'MODULES.TERMINAL.INTRODUCE_1',
            },
            {
              type: 'text',
              content: 'MODULES.TERMINAL.INTRODUCE_2',
            },
          ],
        };
        break;
      case 'redis':
        productIntroduce = {
          img: {
            url: false,
          },
          items: [
            {
              type: 'text',
              content: 'MODULES.REDIS.INTRODUCE_1',
            },
            {
              type: 'title',
              content: 'MODULES.REDIS.INTRODUCE_2',
            },
            {
              type: 'text',
              content: 'MODULES.REDIS.INTRODUCE_3',
            },
            {
              type: 'title',
              content: 'MODULES.REDIS.INTRODUCE_4',
            },
            {
              type: 'text',
              content: 'MODULES.REDIS.INTRODUCE_5',
            },
            {
              type: 'title',
              content: 'MODULES.REDIS.INTRODUCE_6',
            },
            {
              type: 'text',
              content: 'MODULES.REDIS.INTRODUCE_7',
            },
            {
              type: 'title',
              content: 'MODULES.REDIS.INTRODUCE_8',
            },
            {
              type: 'text',
              content: 'MODULES.REDIS.INTRODUCE_9',
            },
          ],
        };
        break;
      case 'tos':
        productIntroduce = {
          img: {
            url: 'MODULES.TOS.INTRODUCE_IMG_URL',
            width: this.IMG_WIDTH_LARGE,
            height: '240px',
          },
          items: [
            {
              type: 'text',
              content: 'MODULES.TOS.INTRODUCE_1',
            },
            {
              type: 'title',
              content: 'MODULES.TOS.INTRODUCE_2',
            },
            {
              type: 'text',
              content: 'MODULES.TOS.INTRODUCE_3',
            },
            {
              type: 'title',
              content: 'MODULES.TOS.INTRODUCE_4',
            },
            {
              type: 'text',
              content: 'MODULES.TOS.INTRODUCE_5',
            },
            {
              type: 'text',
              content: 'MODULES.TOS.INTRODUCE_6',
            },
            {
              type: 'text',
              content: 'MODULES.TOS.INTRODUCE_7',
            },
          ],
        };
        break;
      default:
        break;
    }
    return productIntroduce;
  }

  getProductAdvantage(moduleName): any {
    let productAdvantage = {};
    switch (moduleName) {
      case 'inceptor':
        productAdvantage = {
          items: [
            {
              type: 'title',
              content: 'MODULES.INCEPTOR.ADVANTAGE_1',
            },
            {
              type: 'text',
              content: 'MODULES.INCEPTOR.ADVANTAGE_2',
            },
            {
              type: 'title',
              content: 'MODULES.INCEPTOR.ADVANTAGE_3',
            },
            {
              type: 'text',
              content: 'MODULES.INCEPTOR.ADVANTAGE_4',
            },
            {
              type: 'title',
              content: 'MODULES.INCEPTOR.ADVANTAGE_5',
            },
            {
              type: 'text',
              content: 'MODULES.INCEPTOR.ADVANTAGE_6',
            },
            {
              type: 'title',
              content: 'MODULES.INCEPTOR.ADVANTAGE_7',
            },
            {
              type: 'text',
              content: 'MODULES.INCEPTOR.ADVANTAGE_8',
            },
            {
              type: 'title',
              content: 'MODULES.INCEPTOR.ADVANTAGE_9',
            },
            {
              type: 'text',
              content: 'MODULES.INCEPTOR.ADVANTAGE_10',
            },
          ],
        };
        break;
      case 'slipstream':
        productAdvantage = {
          items: [
            {
              type: 'title',
              content: 'MODULES.SLIPSTREAM.ADVANTAGE_1',
            },
            {
              type: 'text',
              content: 'MODULES.SLIPSTREAM.ADVANTAGE_2',
            },
            {
              type: 'title',
              content: 'MODULES.SLIPSTREAM.ADVANTAGE_3',
            },
            {
              type: 'text',
              content: 'MODULES.SLIPSTREAM.ADVANTAGE_4',
            },
            {
              type: 'title',
              content: 'MODULES.SLIPSTREAM.ADVANTAGE_5',
            },
            {
              type: 'text',
              content: 'MODULES.SLIPSTREAM.ADVANTAGE_6',
            },
            {
              type: 'title',
              content: 'MODULES.SLIPSTREAM.ADVANTAGE_7',
            },
            {
              type: 'text',
              content: 'MODULES.SLIPSTREAM.ADVANTAGE_8',
            },
            {
              type: 'title',
              content: 'MODULES.SLIPSTREAM.ADVANTAGE_9',
            },
            {
              type: 'text',
              content: 'MODULES.SLIPSTREAM.ADVANTAGE_10',
            },
          ],
        };
        break;
      case 'discover':
        productAdvantage = {
          items: [
            {
              type: 'title',
              content: 'MODULES.DISCOVER.ADVANTAGE_1',
            },
            {
              type: 'text',
              content: 'MODULES.DISCOVER.ADVANTAGE_2',
            },
            {
              type: 'title',
              content: 'MODULES.DISCOVER.ADVANTAGE_3',
            },
            {
              type: 'text',
              content: 'MODULES.DISCOVER.ADVANTAGE_4',
            },
            {
              type: 'title',
              content: 'MODULES.DISCOVER.ADVANTAGE_5',
            },
            {
              type: 'text',
              content: 'MODULES.DISCOVER.ADVANTAGE_6',
            },
            {
              type: 'title',
              content: 'MODULES.DISCOVER.ADVANTAGE_7',
            },
            {
              type: 'text',
              content: 'MODULES.DISCOVER.ADVANTAGE_8',
            },
          ],
        };
        break;
      case 'hyperbase':
        productAdvantage = {
          items: [
            {
              type: 'title',
              content: 'MODULES.HYPERBASE.ADVANTAGE_1',
            },
            {
              type: 'text',
              content: 'MODULES.HYPERBASE.ADVANTAGE_2',
            },
            {
              type: 'title',
              content: 'MODULES.HYPERBASE.ADVANTAGE_3',
            },
            {
              type: 'text',
              content: 'MODULES.HYPERBASE.ADVANTAGE_4',
            },
            {
              type: 'title',
              content: 'MODULES.HYPERBASE.ADVANTAGE_5',
            },
            {
              type: 'text',
              content: 'MODULES.HYPERBASE.ADVANTAGE_6',
            },
            {
              type: 'title',
              content: 'MODULES.HYPERBASE.ADVANTAGE_7',
            },
            {
              type: 'text',
              content: 'MODULES.HYPERBASE.ADVANTAGE_8',
            },
            {
              type: 'title',
              content: 'MODULES.HYPERBASE.ADVANTAGE_9',
            },
            {
              type: 'text',
              content: 'MODULES.HYPERBASE.ADVANTAGE_10',
            },
          ],
        };
        break;
      case 'search':
        productAdvantage = {
          items: [
            {
              type: 'title',
              content: 'MODULES.SEARCH.ADVANTAGE_1',
            },
            {
              type: 'text',
              content: 'MODULES.SEARCH.ADVANTAGE_2',
            },
            {
              type: 'title',
              content: 'MODULES.SEARCH.ADVANTAGE_3',
            },
            {
              type: 'text',
              content: 'MODULES.SEARCH.ADVANTAGE_4',
            },
            {
              type: 'title',
              content: 'MODULES.SEARCH.ADVANTAGE_5',
            },
            {
              type: 'text',
              content: 'MODULES.SEARCH.ADVANTAGE_6',
            },
            {
              type: 'title',
              content: 'MODULES.SEARCH.ADVANTAGE_7',
            },
            {
              type: 'text',
              content: 'MODULES.SEARCH.ADVANTAGE_8',
            },
          ],
        };
        break;
      case 'sophon':
        productAdvantage = {
          items: [
            {
              type: 'title',
              content: 'MODULES.SOPHON.ADVANTAGE_1',
            },
            {
              type: 'text',
              content: 'MODULES.SOPHON.ADVANTAGE_2',
            },
            {
              type: 'title',
              content: 'MODULES.SOPHON.ADVANTAGE_3',
            },
            {
              type: 'text',
              content: 'MODULES.SOPHON.ADVANTAGE_4',
            },
            {
              type: 'title',
              content: 'MODULES.SOPHON.ADVANTAGE_5',
            },
            {
              type: 'text',
              content: 'MODULES.SOPHON.ADVANTAGE_6',
            },
            {
              type: 'title',
              content: 'MODULES.SOPHON.ADVANTAGE_7',
            },
            {
              type: 'text',
              content: 'MODULES.SOPHON.ADVANTAGE_8',
            },
            {
              type: 'title',
              content: 'MODULES.SOPHON.ADVANTAGE_9',
            },
            {
              type: 'text',
              content: 'MODULES.SOPHON.ADVANTAGE_10',
            },
            {
              type: 'title',
              content: 'MODULES.SOPHON.ADVANTAGE_11',
            },
            {
              type: 'text',
              content: 'MODULES.SOPHON.ADVANTAGE_12',
            },
            {
              type: 'title',
              content: 'MODULES.SOPHON.ADVANTAGE_13',
            },
            {
              type: 'text',
              content: 'MODULES.SOPHON.ADVANTAGE_14',
            },
          ],
        };
        break;
      case 'guardian':
        productAdvantage = {
          items: [
            {
              type: 'title',
              content: 'MODULES.GUARDIAN.ADVANTAGE_1',
            },
            {
              type: 'text',
              content: 'MODULES.GUARDIAN.ADVANTAGE_2',
            },
            {
              type: 'title',
              content: 'MODULES.GUARDIAN.ADVANTAGE_3',
            },
            {
              type: 'text',
              content: 'MODULES.GUARDIAN.ADVANTAGE_4',
            },
            {
              type: 'title',
              content: 'MODULES.GUARDIAN.ADVANTAGE_5',
            },
            {
              type: 'text',
              content: 'MODULES.GUARDIAN.ADVANTAGE_6',
            },
            {
              type: 'title',
              content: 'MODULES.GUARDIAN.ADVANTAGE_7',
            },
            {
              type: 'text',
              content: 'MODULES.GUARDIAN.ADVANTAGE_8',
            },
          ],
        };
        break;
      case 'hadoop':
        productAdvantage = {
          items: [
            {
              type: 'title',
              content: 'MODULES.HADOOP.ADVANTAGE_1',
            },
            {
              type: 'text',
              content: 'MODULES.HADOOP.ADVANTAGE_2',
            },
            {
              type: 'title',
              content: 'MODULES.HADOOP.ADVANTAGE_3',
            },
            {
              type: 'text',
              content: 'MODULES.HADOOP.ADVANTAGE_4',
            },
            {
              type: 'title',
              content: 'MODULES.HADOOP.ADVANTAGE_5',
            },
            {
              type: 'text',
              content: 'MODULES.HADOOP.ADVANTAGE_6',
            },
            {
              type: 'title',
              content: 'MODULES.HADOOP.ADVANTAGE_7',
            },
            {
              type: 'text',
              content: 'MODULES.HADOOP.ADVANTAGE_8',
            },
          ],
        };
        break;
      case 'pilot':
        productAdvantage = {
          items: [
            {
              type: 'title',
              content: 'MODULES.PILOT.ADVANTAGE_1',
            },
            {
              type: 'text',
              content: 'MODULES.PILOT.ADVANTAGE_2',
            },
            {
              type: 'title',
              content: 'MODULES.PILOT.ADVANTAGE_3',
            },
            {
              type: 'text',
              content: 'MODULES.PILOT.ADVANTAGE_4',
            },
            {
              type: 'title',
              content: 'MODULES.PILOT.ADVANTAGE_5',
            },
            {
              type: 'text',
              content: 'MODULES.PILOT.ADVANTAGE_6',
            },
            {
              type: 'title',
              content: 'MODULES.PILOT.ADVANTAGE_7',
            },
            {
              type: 'text',
              content: 'MODULES.PILOT.ADVANTAGE_8',
            },
            {
              type: 'title',
              content: 'MODULES.PILOT.ADVANTAGE_9',
            },
            {
              type: 'text',
              content: 'MODULES.PILOT.ADVANTAGE_10',
            },
            {
              type: 'title',
              content: 'MODULES.PILOT.ADVANTAGE_11',
            },
            {
              type: 'text',
              content: 'MODULES.PILOT.ADVANTAGE_12',
            },
          ],
        };
        break;
      case 'workflow':
        productAdvantage = {
          items: [
            {
              type: 'title',
              content: 'MODULES.WORKFLOW.ADVANTAGE_1',
            },
            {
              type: 'text',
              content: 'MODULES.WORKFLOW.ADVANTAGE_2',
            },
            {
              type: 'title',
              content: 'MODULES.WORKFLOW.ADVANTAGE_3',
            },
            {
              type: 'text',
              content: 'MODULES.WORKFLOW.ADVANTAGE_4',
            },
            {
              type: 'title',
              content: 'MODULES.WORKFLOW.ADVANTAGE_5',
            },
            {
              type: 'text',
              content: 'MODULES.WORKFLOW.ADVANTAGE_6',
            },
            {
              type: 'title',
              content: 'MODULES.WORKFLOW.ADVANTAGE_7',
            },
            {
              type: 'text',
              content: 'MODULES.WORKFLOW.ADVANTAGE_8',
            },
            {
              type: 'title',
              content: 'MODULES.WORKFLOW.ADVANTAGE_9',
            },
            {
              type: 'text',
              content: 'MODULES.WORKFLOW.ADVANTAGE_10',
            },
          ],
        };
        break;
      case 'transporter':
        productAdvantage = {
          items: [
            {
              type: 'title',
              content: 'MODULES.TRANSPORTER.ADVANTAGE_1',
            },
            {
              type: 'text',
              content: 'MODULES.TRANSPORTER.ADVANTAGE_2',
            },
            {
              type: 'title',
              content: 'MODULES.TRANSPORTER.ADVANTAGE_3',
            },
            {
              type: 'text',
              content: 'MODULES.TRANSPORTER.ADVANTAGE_4',
            },
            {
              type: 'title',
              content: 'MODULES.TRANSPORTER.ADVANTAGE_5',
            },
            {
              type: 'text',
              content: 'MODULES.TRANSPORTER.ADVANTAGE_6',
            },
            {
              type: 'title',
              content: 'MODULES.TRANSPORTER.ADVANTAGE_7',
            },
            {
              type: 'text',
              content: 'MODULES.TRANSPORTER.ADVANTAGE_8',
            },
            {
              type: 'title',
              content: 'MODULES.TRANSPORTER.ADVANTAGE_9',
            },
            {
              type: 'text',
              content: 'MODULES.TRANSPORTER.ADVANTAGE_10',
            },
            {
              type: 'title',
              content: 'MODULES.TRANSPORTER.ADVANTAGE_11',
            },
            {
              type: 'text',
              content: 'MODULES.TRANSPORTER.ADVANTAGE_12',
            },
            {
              type: 'title',
              content: 'MODULES.TRANSPORTER.ADVANTAGE_13',
            },
            {
              type: 'text',
              content: 'MODULES.TRANSPORTER.ADVANTAGE_14',
            },
          ],
        };
        break;
      case 'governor':
        productAdvantage = {
          items: [
            {
              type: 'title',
              content: 'MODULES.GOVERNOR.ADVANTAGE_1',
            },
            {
              type: 'text',
              content: 'MODULES.GOVERNOR.ADVANTAGE_2',
            },
            {
              type: 'title',
              content: 'MODULES.GOVERNOR.ADVANTAGE_3',
            },
            {
              type: 'text',
              content: 'MODULES.GOVERNOR.ADVANTAGE_4',
            },
            {
              type: 'title',
              content: 'MODULES.GOVERNOR.ADVANTAGE_5',
            },
            {
              type: 'text',
              content: 'MODULES.GOVERNOR.ADVANTAGE_6',
            },
            {
              type: 'title',
              content: 'MODULES.GOVERNOR.ADVANTAGE_7',
            },
            {
              type: 'text',
              content: 'MODULES.GOVERNOR.ADVANTAGE_8',
            },
          ],
        };
        break;
      case 'rubik':
        productAdvantage = {
          items: [
            {
              type: 'title',
              content: 'MODULES.RUBIK.ADVANTAGE_1',
            },
            {
              type: 'text',
              content: 'MODULES.RUBIK.ADVANTAGE_2',
            },
            {
              type: 'title',
              content: 'MODULES.RUBIK.ADVANTAGE_3',
            },
            {
              type: 'text',
              content: 'MODULES.RUBIK.ADVANTAGE_4',
            },
            {
              type: 'title',
              content: 'MODULES.RUBIK.ADVANTAGE_5',
            },
            {
              type: 'text',
              content: 'MODULES.RUBIK.ADVANTAGE_6',
            },
            {
              type: 'title',
              content: 'MODULES.RUBIK.ADVANTAGE_7',
            },
            {
              type: 'text',
              content: 'MODULES.RUBIK.ADVANTAGE_8',
            },
            {
              type: 'title',
              content: 'MODULES.RUBIK.ADVANTAGE_9',
            },
            {
              type: 'text',
              content: 'MODULES.RUBIK.ADVANTAGE_10',
            },
          ],
        };
        break;
      case 'txsql':
        productAdvantage = {
          items: [
            {
              type: 'title',
              content: 'MODULES.TXSQL.ADVANTAGE_1',
            },
            {
              type: 'text',
              content: 'MODULES.TXSQL.ADVANTAGE_2',
            },
            {
              type: 'title',
              content: 'MODULES.TXSQL.ADVANTAGE_3',
            },
            {
              type: 'text',
              content: 'MODULES.TXSQL.ADVANTAGE_4',
            },
            {
              type: 'title',
              content: 'MODULES.TXSQL.ADVANTAGE_5',
            },
            {
              type: 'text',
              content: 'MODULES.TXSQL.ADVANTAGE_6',
            },
            {
              type: 'title',
              content: 'MODULES.TXSQL.ADVANTAGE_7',
            },
            {
              type: 'text',
              content: 'MODULES.TXSQL.ADVANTAGE_8',
            },
            {
              type: 'title',
              content: 'MODULES.TXSQL.ADVANTAGE_9',
            },
            {
              type: 'text',
              content: 'MODULES.TXSQL.ADVANTAGE_10',
            },
            {
              type: 'title',
              content: 'MODULES.TXSQL.ADVANTAGE_11',
            },
            {
              type: 'text',
              content: 'MODULES.TXSQL.ADVANTAGE_12',
            },
          ],
        };
        break;
      case 'milano':
        productAdvantage = {
          items: [
            {
              type: 'title',
              content: 'MODULES.MILANO.ADVANTAGE_1',
            },
            {
              type: 'text',
              content: 'MODULES.MILANO.ADVANTAGE_2',
            },
            {
              type: 'title',
              content: 'MODULES.MILANO.ADVANTAGE_3',
            },
            {
              type: 'text',
              content: 'MODULES.MILANO.ADVANTAGE_4',
            },
            {
              type: 'title',
              content: 'MODULES.MILANO.ADVANTAGE_5',
            },
            {
              type: 'text',
              content: 'MODULES.MILANO.ADVANTAGE_6',
            },
            {
              type: 'title',
              content: 'MODULES.MILANO.ADVANTAGE_7',
            },
            {
              type: 'text',
              content: 'MODULES.MILANO.ADVANTAGE_8',
            },
            {
              type: 'title',
              content: 'MODULES.MILANO.ADVANTAGE_9',
            },
            {
              type: 'text',
              content: 'MODULES.MILANO.ADVANTAGE_10',
            },
          ],
        };
        break;
      case 'prometheus':
        productAdvantage = {
          items: [
            {
              type: 'title',
              content: 'MODULES.PROMETHEUS.ADVANTAGE_1',
            },
            {
              type: 'text',
              content: 'MODULES.PROMETHEUS.ADVANTAGE_2',
            },
            {
              type: 'title',
              content: 'MODULES.PROMETHEUS.ADVANTAGE_3',
            },
            {
              type: 'text',
              content: 'MODULES.PROMETHEUS.ADVANTAGE_4',
            },
            {
              type: 'title',
              content: 'MODULES.PROMETHEUS.ADVANTAGE_5',
            },
            {
              type: 'text',
              content: 'MODULES.PROMETHEUS.ADVANTAGE_6',
            },
          ],
        };
        break;
      case 'kafka':
        productAdvantage = {
          items: [
            {
              type: 'title',
              content: 'MODULES.KAFKA.ADVANTAGE_1',
            },
            {
              type: 'text',
              content: 'MODULES.KAFKA.ADVANTAGE_2',
            },
            {
              type: 'title',
              content: 'MODULES.KAFKA.ADVANTAGE_3',
            },
            {
              type: 'text',
              content: 'MODULES.KAFKA.ADVANTAGE_4',
            },
            {
              type: 'title',
              content: 'MODULES.KAFKA.ADVANTAGE_5',
            },
            {
              type: 'text',
              content: 'MODULES.KAFKA.ADVANTAGE_6',
            },
            {
              type: 'title',
              content: 'MODULES.KAFKA.ADVANTAGE_7',
            },
            {
              type: 'text',
              content: 'MODULES.KAFKA.ADVANTAGE_8',
            },
          ],
        };
        break;
      case 'zeppelin':
        productAdvantage = {
          items: [
            {
              type: 'title',
              content: 'MODULES.ZEPPELIN.ADVANTAGE_1',
            },
            {
              type: 'text',
              content: 'MODULES.ZEPPELIN.ADVANTAGE_2',
            },
            {
              type: 'title',
              content: 'MODULES.ZEPPELIN.ADVANTAGE_3',
            },
            {
              type: 'text',
              content: 'MODULES.ZEPPELIN.ADVANTAGE_4',
            },
            {
              type: 'title',
              content: 'MODULES.ZEPPELIN.ADVANTAGE_5',
            },
            {
              type: 'text',
              content: 'MODULES.ZEPPELIN.ADVANTAGE_6',
            },
          ],
        };
        break;
      case 'midas':
        productAdvantage = {
          items: [
            {
              type: 'title',
              content: 'MODULES.MIDAS.ADVANTAGE_1',
            },
            {
              type: 'text',
              content: 'MODULES.MIDAS.ADVANTAGE_2',
            },
            {
              type: 'title',
              content: 'MODULES.MIDAS.ADVANTAGE_3',
            },
            {
              type: 'text',
              content: 'MODULES.MIDAS.ADVANTAGE_4',
            },
            {
              type: 'title',
              content: 'MODULES.MIDAS.ADVANTAGE_5',
            },
            {
              type: 'text',
              content: 'MODULES.MIDAS.ADVANTAGE_6',
            },
            {
              type: 'title',
              content: 'MODULES.MIDAS.ADVANTAGE_7',
            },
            {
              type: 'text',
              content: 'MODULES.MIDAS.ADVANTAGE_8',
            },
          ],
        };
        break;
      case 'terminal':
        productAdvantage = {
          items: [
            {
              type: 'title',
              content: 'MODULES.TERMINAL.ADVANTAGE_1',
            },
            {
              type: 'text',
              content: 'MODULES.TERMINAL.ADVANTAGE_2',
            },
            {
              type: 'title',
              content: 'MODULES.TERMINAL.ADVANTAGE_3',
            },
            {
              type: 'text',
              content: 'MODULES.TERMINAL.ADVANTAGE_4',
            },
          ],
        };
        break;
      case 'redis':
        productAdvantage = {
          items: [
            {
              type: 'title',
              content: 'MODULES.REDIS.ADVANTAGE_1',
            },
            {
              type: 'text',
              content: 'MODULES.REDIS.ADVANTAGE_2',
            },
            {
              type: 'title',
              content: 'MODULES.REDIS.ADVANTAGE_3',
            },
            {
              type: 'text',
              content: 'MODULES.REDIS.ADVANTAGE_4',
            },
            {
              type: 'title',
              content: 'MODULES.REDIS.ADVANTAGE_5',
            },
            {
              type: 'text',
              content: 'MODULES.REDIS.ADVANTAGE_6',
            },
            {
              type: 'title',
              content: 'MODULES.REDIS.ADVANTAGE_7',
            },
            {
              type: 'text',
              content: 'MODULES.REDIS.ADVANTAGE_8',
            },
            {
              type: 'title',
              content: 'MODULES.REDIS.ADVANTAGE_9',
            },
            {
              type: 'text',
              content: 'MODULES.REDIS.ADVANTAGE_10',
            },
          ],
        };
        break;
      case 'tos':
        productAdvantage = {
          items: [
            {
              type: 'title',
              content: 'MODULES.TOS.ADVANTAGE_1',
            },
            {
              type: 'text',
              content: 'MODULES.TOS.ADVANTAGE_2',
            },
            {
              type: 'title',
              content: 'MODULES.TOS.ADVANTAGE_3',
            },
            {
              type: 'text',
              content: 'MODULES.TOS.ADVANTAGE_4',
            },
            {
              type: 'title',
              content: 'MODULES.TOS.ADVANTAGE_5',
            },
            {
              type: 'text',
              content: 'MODULES.TOS.ADVANTAGE_6',
            },
            {
              type: 'title',
              content: 'MODULES.TOS.ADVANTAGE_7',
            },
            {
              type: 'text',
              content: 'MODULES.TOS.ADVANTAGE_8',
            },
          ],
        };
        break;
      default:
        break;
    }
    return productAdvantage;
  }
}
