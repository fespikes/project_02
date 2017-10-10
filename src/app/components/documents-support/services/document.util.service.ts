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
            url: '../../../../../documents-support'
          },
          {
            name: 'productDocument',
            alias: 'DOCUMENTS.PRODUCT_DOCUMENT',
            url: '../../../../../documents-support/docs/products'
          },
          {
            name: 'documentDetail',
            alias: alias,
            url: '../index',
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

  addDocsVersions(data): any[] {
    data.map(category => {
      let versionList = [];
      let docsCollection = {};
      category.sub.map(version => {
        versionList.push({name: version.name});
        docsCollection[version.name] = this.addDocsCollection(version.sub);
      });
      category.versionList = versionList;
      category.docsCollection = docsCollection;
      category.currentVersion = category.sub[0] || {'name': ''};
    });
    return data;
  }

  addDocsCollection(data): any[] {
    let docList = [];
    data.map(doc => {
      docList.push(doc);
    });
    return docList;
  }

  traversalTree(treeModel, expanded): any[] {

    var stack = [], item;
    for (var i = 0; i < treeModel.length; i++) {
      stack.push(treeModel[i]);
    }
    while (stack.length) {
      item = stack.shift();
      item.expanded = expanded;
      if (item.children && item.children.length) {
        stack = stack.concat(item.children);
      }
    }

    return treeModel;
  }
}
