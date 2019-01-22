import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { DocumentResService } from './document.res.service';
import { PRODUCT_CATEGORIES, FOOTER_HEIGHT, HEADER_HEIGHT, CRUMBS_HEIGHT } from '../documents-support.model';

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
    const array = (path.split('?')[0]).split('/');
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

  makeVideoCourse(videoTutorial): any[] {
    const videoCourse = [];
    videoTutorial.items.map(video => {
      const course = Object.assign(video, {tag: 'video'});
      videoCourse.push(course);
    });
    return videoCourse;
  }

  addDocsVersions(data): any[] {
    const docList = [];
    data.map(category => {
      if (category.children && category.children.length > 0) {
        const versionList = [], docsCollection = {};
        category.children.map(version => {
          versionList.push({
            id: version.id,
            name: version.name,
            alias: this.getVersionAlias(category.id.split('-')[0], version.name),
          });
          version.alias = this.getVersionAlias(category.id.split('-')[0], version.name);
          docsCollection[version.name] = this.addDocsCollection(version.children);
        });
        category.versionList = versionList;
        category.docsCollection = docsCollection;
        category.currentVersion = category.children[category.children.length - 1];

        docList.push(category);
      }
    });
    return docList;
  }

  getVersionAlias(categoryId, versionName) {
    let alias = '';
    switch (categoryId) {
      case PRODUCT_CATEGORIES.TDH:
        alias = `TDH ${versionName}`;
        break;
      case PRODUCT_CATEGORIES.SOPHON:
        alias = `Sophon ${versionName}`;
        break;
      case PRODUCT_CATEGORIES.ARGODB:
        alias = `ArgoDB ${versionName}`;
        break;
      case PRODUCT_CATEGORIES.STELLARDB:
        alias = `StellarDB ${versionName}`;
        break;
      case PRODUCT_CATEGORIES.TDC:
        alias = `TDC ${versionName}`;
        break;
      default:
        alias = `TDH ${versionName}`;
    }

    return alias;
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

  computeScrollPosition(treeId: string, treeSpace: number) {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const height = document.documentElement.clientHeight || document.body.clientHeight;

    const treeHeight = Number(height - HEADER_HEIGHT - CRUMBS_HEIGHT - treeSpace);
    const deviation = Number(scrollHeight - height - scrollTop - FOOTER_HEIGHT);

    if (deviation < 0 ) {
      document.getElementById(treeId).style.height = treeHeight - Math.abs(deviation) + 'px';
    } else {
      document.getElementById(treeId).style.height = treeHeight + 'px';
    }
  }
}
