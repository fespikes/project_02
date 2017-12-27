import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { DocumentResService } from './document.res.service';

@Injectable()
export class DocumentUtilService {

  constructor(
    private documentResService: DocumentResService,
  ) {

  }

  getDocsType(path): string {
    return this.getPathLastParam(path);
  }

  getModuleName(path): string {
    return this.getPathLastParam(path);
  }

  getPathLastParam(path): string {
    const array = path.split('/');
    return array[array.length - 1];
  }

  getDocDetailUrlParams(path, sectionName): any {
    const array = path.split('/');
    return {
      section: sectionName,
      component: array[array.length - 1],
      version: array[array.length - 2],
      category: array[array.length - 3],
    };
  }

  makeDocTreeUrl(params): string {
    return 'document/' + params.category + '/' + params.version + '/' + params.component;
  }

  makeDocDetailUrl(params): string {
    return 'document/' + params.category + '/' + params.version + '/' + params.component + '/' + params.section;
  }

  addDocsVersions(data): any[] {
    data.map(category => {
      const versionList = [];
      const docsCollection = {};
      category.children.map(version => {
        versionList.push({
          id: version.id,
          name: version.name,
        });
        docsCollection[version.name] = this.addDocsCollection(version.children);
      });
      category.versionList = versionList;
      category.docsCollection = docsCollection;
      category.currentVersion = category.children[category.children.length - 1];
    });
    return data;
  }

  addDocsCollection(data): any[] {
    const docList = [];
    data.map(doc => {
      docList.push(doc);
    });
    return docList;
  }

  appendDocContent(content): void {
    document.getElementById('doc-detail-content').innerHTML = content;
  }

  appendDocCssSheet(sheet): void {
    const style = document.createElement('style');
    style.innerHTML = sheet;
    document.head.appendChild(style);
  }

  hideDocElement(eleId): void {
    document.getElementById(eleId).style.display = 'none';
  }

  setBodyWidthAttribute(attribute): void {
    const bodyEl = document.getElementsByTagName('body')[0];
    bodyEl.style.width = attribute;
  }

  scrollScreenTop(): void {
    scrollTo(0, 0);
  }
}
