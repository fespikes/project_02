import { Injectable } from '@angular/core';

import {Http, Headers} from '@angular/http';

import { Observable } from 'rxjs/Rx';

import { TdcApiService } from '../../../shared/services/api.service';
import { DocumentStorageService } from './document.storage.service';

@Injectable()
export class DocumentResService {
  anchor = 'index';//for anchor content
  sectionId = 'index';//for common api request
  docName = '';

  searchCompleted = false;
  keyNeedRender = false;

  constructor(
    private documentStorageService: DocumentStorageService
  ) {

  }

  getSectionId(): string {
    return this.sectionId;
  }

  setSectionId(id): void {
    this.sectionId = id;
  }

  getAnchorId(): string {
    return this.anchor;
  }

  setAnchorId(anchor): void {
    this.anchor = anchor;
  }

  setLevelId(id, level) {
    this.setAnchorId(id);
    if(level <= 2) {
      this.setSectionId(id);
    }
  }

  getDocName(): string {
    return this.documentStorageService.getStorageItem('docName');
  }

  setDocName(name): void {
    this.documentStorageService.setStorageItem('docName', name);
  }

  getKeyword(): string {
    return this.documentStorageService.getStorageItem('keyword');
  }

  setKeyword(keyword): void {
    this.documentStorageService.setStorageItem('keyword', keyword);
  }

  getSearchCompleted(): boolean {
    return this.searchCompleted;
  }

  setSearchCompleted(completed): void {
    this.searchCompleted = completed;
  }

  getKeyNeedRender(): boolean {
    return this.keyNeedRender;
  }

  setKeyNeedRender(needRender): void {
    this.keyNeedRender = needRender;
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
      case 'doc-detail':
        crumbItems = [
          {
            name: 'documentSupport',
            alias: 'DOCUMENTS.DOCUMENT_SUPPORT',
            url: '../../../../../../documents-support'
          },
          {
            name: 'productDocument',
            alias: 'DOCUMENTS.PRODUCT_DOCUMENT',
            url: '../../../../../../documents-support/docs/products'
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

  getTabItems(): any[] {
    return [ //for unify i18n in version 1
      {
        name: 'products',
        type: 'products',
        alias: '产品文档',
        url: './products'
      },
      {
        name: 'issues',
        type: 'issues',
        alias: '常见问题',
        url: './issues'
      },
      {
        name: 'guides',
        type: 'guides',
        alias: '新手入门',
        url: './guides'
      }
    ];
  }

  getOtherCourse(): any[] {
    const otherCourse = [
      {
        name: 'TDH社区版中进行服务升级',
        url: 'https://mp.weixin.qq.com/s?__biz=MzIzNzU0ODEwOA==&mid=2247484410&idx=1&sn=41a48d474842be358499132cfd44977d&pass_ticket=UNH1mk9gYBs8tf5jxbYWBQoAzw0PGkFTncCRC3gcpA3knY91Fe%2BhpUorBL1XlATP',
        tag: 'course'
      },
      {
        name: 'Discover实现客户流失预警分析',
        url: 'https://mp.weixin.qq.com/s?__biz=MzIzNzU0ODEwOA==&mid=2247484364&idx=1&sn=3eb32e2588f10273a377f4705fa72d6d&pass_ticket=UNH1mk9gYBs8tf5jxbYWBQoAzw0PGkFTncCRC3gcpA3knY91Fe%2BhpUorBL1XlATP',
        tag: 'course'
      },
      {
        name: 'Waterdrop的许可证申请',
        url: 'https://mp.weixin.qq.com/s?__biz=MzIzNzU0ODEwOA==&mid=2247484375&idx=1&sn=71cb29c7cfdeb628d31848cc0bc4cbd2&pass_ticket=UNH1mk9gYBs8tf5jxbYWBQoAzw0PGkFTncCRC3gcpA3knY91Fe%2BhpUorBL1XlATP',
        tag: 'course'
      },
      {
        name: 'Discover实现客户流失预警分析',
        url: 'https://mp.weixin.qq.com/s?__biz=MzIzNzU0ODEwOA==&mid=2247484364&idx=1&sn=3eb32e2588f10273a377f4705fa72d6d&pass_ticket=UNH1mk9gYBs8tf5jxbYWBQoAzw0PGkFTncCRC3gcpA3knY91Fe%2BhpUorBL1XlATP',
        tag: 'course'
      },
      {
        name: 'Waterdrop的许可证申请',
        url: 'https://mp.weixin.qq.com/s?__biz=MzIzNzU0ODEwOA==&mid=2247484375&idx=1&sn=71cb29c7cfdeb628d31848cc0bc4cbd2&pass_ticket=UNH1mk9gYBs8tf5jxbYWBQoAzw0PGkFTncCRC3gcpA3knY91Fe%2BhpUorBL1XlATP',
        tag: 'course'
      }
    ];

    return otherCourse;
  }
}
