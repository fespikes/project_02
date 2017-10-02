import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { TdcApiService } from '../../../shared';

@Injectable()
export class DocumentUtilService {
  constructor() {

  }

  getDocsType(url): string {
    let array = url.split('/');
    return array[array.length - 1];
  }

  getDocsCrumb(type): any[] {
    let crumbItems = [];
    switch (type) {
      case 'products':
        crumbItems = [
          {
            name: 'documentSupport',
            alias: 'DOCUMENTS.DOCUMENT_SUPPORT',
            url: '../'
          },
          {
            name: 'productDocument',
            alias: 'DOCUMENTS.PRODUCT_DOCUMENT',
            url: './products',
            last: true
          }
        ];
        break;
      case 'issues':
        crumbItems = [
          {
            name: 'documentSupport',
            alias: 'DOCUMENTS.DOCUMENT_SUPPORT',
            url: '../'
          },
          {
            name: 'normalIssue',
            alias: 'DOCUMENTS.NORMAL_ISSUE',
            url: './issues',
            last: true
          }
        ];
        break;
      case 'guides':
        crumbItems = [
          {
            name: 'documentSupport',
            alias: 'DOCUMENTS.DOCUMENT_SUPPORT',
            url: '../'
          },
          {
            name: 'freshGuide',
            alias: 'DOCUMENTS.FRESH_GUIDE',
            url: './guides',
            last: true
          }
        ];
        break;
      case 'docs-search':
        crumbItems = [
          {
            name: 'documentSupport',
            alias: 'DOCUMENTS.DOCUMENT_SUPPORT',
            url: '../'
          },
          {
            name: 'documentSearch',
            alias: 'DOCUMENTS.SEARCH_RESULTS',
            url: '../docs-search',
            last: true
          }
        ];
        break;
      default:
        break;
    }
    return crumbItems;
  }

}
