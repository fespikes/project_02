import { Injectable } from '@angular/core';

import { DocumentSearchService } from '../../documents-support/documents-search/documents-search.service';

@Injectable()
export class ProductUtilService {
  constructor(
    private documentSearchService: DocumentSearchService
  ) {

  }

  getModuleType(url): string {
    const pathArray = url.split('/');
    return pathArray[pathArray.length - 1];
  }

  refreshTreeState(moduleTree, moduleId): any[] {
    const node = this.documentSearchService.findTreeNode(
      moduleId, moduleTree) as any;
    const parentNode = this.documentSearchService.findTreeNode(
      node.parent, moduleTree) as any;
    parentNode.expanded = true;
    node.selected = true;
    return moduleTree;
  }

  anchorTabContent(anchorId): void {
    const ele = document.getElementById(anchorId);
    const offsetLeft = ele.offsetLeft;
    const offsetTop = ele.offsetTop;
    scrollTo(offsetLeft, offsetTop);
  }

  anchorScreenTop(): void {
    scrollTo(0, 0);
  }

}
