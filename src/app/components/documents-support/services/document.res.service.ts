import { Injectable } from '@angular/core';

import {Http, Headers} from '@angular/http';

import { Observable } from 'rxjs/Rx';

import { TdcApiService } from '../../../shared/services/api.service';

@Injectable()
export class DocumentResService {
  sectionName = 'index';
  keyword = '';

  constructor() {

  }

  getSectionId(): string {
    return this.sectionName;
  }

  setSectionId(name): void {
    this.sectionName = name;
  }

  getKeyword(): string {
    return this.keyword;
  }

  setKeyword(keyword): void {
    this.keyword = keyword;
  }

  getDocsCrumb(type, alias): any[] {
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
      case 'docs-detail':
        crumbItems = [
          {
            name: 'documentSupport',
            alias: 'DOCUMENTS.DOCUMENT_SUPPORT',
            url: '../../../../documents-support'
          },
          {
            name: 'productDocument',
            alias: 'DOCUMENTS.PRODUCT_DOCUMENT',
            url: '../../../../documents-support/docs/products'
          },
          {
            name: 'documentDetail',
            alias: alias,
            url: './',
            last: true
          }
        ];
        break;
      default:
        break;
    }
    return crumbItems;
  }

  getTabItems() {
    return [ //for unify i18n in version 1
      {
        name: 'productDocument',
        type: 'products',
        alias: '产品文档',
        url: './products'
      },
      {
        name: 'normalIssue',
        type: 'issues',
        alias: '常见问题',
        url: './issues'
      },
      {
        name: 'freshGuide',
        type: 'guides',
        alias: '新手入门',
        url: './guides'
      }
    ];
  }

  getSearchObject(): Object {
    return {
      "name": "搜索对象",
      "alias": "searchObj",
      "children": [
        {
          "name": "产品文档",
          "alias": "productDocument",
          "type": "category",
          "children": []
        },
        {
          "name": "常见问题",
          "alias": "commonIssue",
          "type": "category",
          "children": []
        },
        {
          "name": "新手入门",
          "alias": "freshGuide",
          "type": "category",
          "children": []
        }
      ]
    };
  }
}
