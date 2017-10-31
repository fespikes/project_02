import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { DocumentResService } from '../services/document.res.service';

@Injectable()
export class DocumentSearchService {

  constructor(
    private documentResService: DocumentResService
  ) {

  }

  traversalTree(treeModel, expanded): any[] {

    let stack = [], item;
    for (let i = 0; i < treeModel.length; i++) {
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

  findTreeNode(nodeId, treeModel): Object {
    let stack = [], item;
    for (let i = 0; i < treeModel.length; i++) {
      stack.push(treeModel[i]);
    }
    while (stack.length) {
      item = stack.shift();
      if (item.id === nodeId) {
        return item;
      }
      stack = stack.concat(item.children);
    }

    return {};
  }

  initSearchTree(docsTree): any[] {
    return [
      this.documentResService.getSearchObject(),
      docsTree[0],
      docsTree[1],
      docsTree[2]
    ];
  }

  makeSearchParams(keyword, pagination, docs): Object {
    let from = (pagination.page - 1) * pagination.size;
    return {
      keywords: [keyword],
      documents: docs,
      from: from,
      size: pagination.size
    };
  }

  makeSelectedDocs(doc, collection, treeModel): Object {
    if(doc.version) {//version change
      collection = this.searchVersionChange(doc, collection, treeModel);
    }else {
      if(doc.module.type) {//category change
        collection = this.searchCategoryChange(doc, collection);
      }else {//manual change
        collection = this.searchManualChange(doc, collection, treeModel);
      }
    }
    return {
      selectedDocs: collection,
      treeModel: treeModel
    };
  }

  searchCategoryChange(doc, collection): any[] {
    //TODO api not include fresh guides and normal issue
    return collection;
  }

  searchVersionChange(doc, collection, treeModel): any[] {
    this.updateTreeModelStateByVersion(doc.module, treeModel, doc.version);
    const param = `${doc.category.id}/${doc.version.id}/${doc.module.id}`;
    collection.map((item, index) => {
      if(item === param) {
        collection.splice(index, 1);
      }
    });
    if(doc.version.selected) {
      collection.push(param);
    }
    return collection;
  }

  searchManualChange(doc, collection, treeModel): any[] {

    this.updateTreeModelStateByManual(doc.module.id, treeModel, doc.module.selected);
    collection = this.clearManualParams(collection, doc);
    if(doc.module.selected) {//select all version
      doc.module.children.map(item => {
        const param = `${doc.category.id}/${item.id}/${doc.module.id}`;
        collection.push(param);
      });
    }
    return collection;
  }

  updateTreeModelStateByManual(manualId, treeModel, selected) {
    let versions: any = this.findTreeNode(manualId, treeModel);
    versions.children.map(version => {
      version.selected = selected;
    });
  }

  updateTreeModelStateByVersion(manual, treeModel, version) {
    const consistent = this.stateConsistent(manual.children, version.selected);
    let manualNode: any = this.findTreeNode(manual.id, treeModel);
    if(consistent) {
      manualNode.selected = version.selected;
    }else {
      manualNode.selected = false;
    }
  }

  stateConsistent(versions, selected): boolean {
    let count = 0;
    versions.map(item => {
      if(!selected === !item.selected) {
        count++;
      }
    });
    if(count === versions.length) {
      return true;
    }else {
      return false;
    }
  }

  clearManualParams(collection, doc): any[] {
    let selectedDocs = [];
    collection.map((item, index) => {//delete original version
      if(!(item.indexOf(doc.category.id) >= 0 && item.indexOf(doc.module.id) >= 0)) {
        selectedDocs.push(item);
      }
    });
    return selectedDocs;
  }

  makePaginationParams(docsCount, pagination) {
    return {
      page: pagination.page,
      size: pagination.size,
      total: docsCount
    };
  }

}
