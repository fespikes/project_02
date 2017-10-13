import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { DocumentResService } from './document.res.service';

@Injectable()
export class DocumentUtilService {

  constructor(
    private documentResService: DocumentResService
  ) {

  }

  getDocsType(path): string {
    let array = path.split('/');
    return array[array.length - 1];
  }

  getModuleName(path): string {
    let array = path.split('/');
    return array[array.length - 1];
  }

  getDocDetailUrlParams(path, sectionName): any {
    let array = path.split('/');
    return {
      section: sectionName,
      component: array[array.length - 1],
      version: array[array.length - 2],
      category: array[array.length - 3]
    };
  }

  makeDocDetailUrl(params): string {
    return '/v2/document/' + params.category + '/' + params.version + '/' + params.component + '/' + params.section;
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
      if (item.sub && item.sub.length) {
        stack = stack.concat(item.sub);
      }
    }

    return treeModel;
  }

  appendDocContent(content): void {
    document.getElementById('doc-detail-content').innerHTML = content;
  }

  appendDocCssSheet(sheet): void {
    let style = document.createElement("style");
    style.innerHTML = sheet;
    document.head.appendChild(style);
  }

  initSearchTree(docsTree): any[] {
    console.log('docsTree=', docsTree);
    return [
      this.documentResService.getSearchObject(),
      docsTree[0],
      docsTree[1]
    ];
  }

  makeSearchParams(keyword, pagination): Object {
    let from = (pagination.page - 1) * pagination.size;
    return {
      keywords: [keyword],
      documents: [],//todo dock real logistic
      from: from,
      size: pagination.size
    };
  }
}
