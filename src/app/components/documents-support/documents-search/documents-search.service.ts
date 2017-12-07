import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { DocumentResService } from '../services/document.res.service';

@Injectable()
export class DocumentSearchService {

  MAX_LOOP = 10;
  constructor(
    private documentResService: DocumentResService
  ) {

  }

  traversalTree(treeModel, type, state): any[] {

    let stack = [], item;
    for (let i = 0; i < treeModel.length; i++) {
      stack.push(treeModel[i]);
    }
    while (stack.length) {
      item = stack.shift();
      item[type] = state;
      if (item.children && item.children.length) {
        stack = stack.concat(item.children);
      }
    }

    return treeModel;
  }

  removeSelectedState(treeModel) {
    let stack = [], item;
    for (let i = 0; i < treeModel.length; i++) {
      stack.push(treeModel[i]);
    }
    while (stack.length) {
      item = stack.shift();
      if(item.selected) {
        item.selected = false;
        break;
      }
      if (item.children && item.children.length) {
        stack = stack.concat(item.children);
      }
    }

    return treeModel;
  }

  findTreeNode(nodeId, treeModel): any {
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
    const productDoc = this.makeProductDocList([
      docsTree[4],
      docsTree[0],
      docsTree[3],
    ]);
    const faqDoc = this.setFAQIntroDocState(docsTree[1], 'faq');
    const introDoc = this.setFAQIntroDocState(docsTree[2], 'intro');
    return [
      productDoc,
      faqDoc,
      introDoc
    ];
  }

  makeProductDocList(docList): Object {

    const docObj = this.setProductDocState(docList);
    return {
      id: 'DOCUMENT',
      name: '产品文档',
      level: 1,
      tag: 'document',
      checkbox: false,
      children: docObj
    };
  }

  setProductDocState(docList): any[] {//add level、checkbox
    docList.map(category => {
        category.level = 2;
        category.checkbox = false;
        category.parent = 'DOCUMENT';
        category.children.map(doc => {
          doc.level = 3;
          doc.checkbox = true;
          doc.parent = category.id;
          doc.children.map(version => {
            version.level = 4;
            version.checkbox = true;
            version.parent = doc.id;
            version.tag = doc.tag;
          });
        });
    });
    return docList;
  }

  setFAQIntroDocState(category, tag): Object {
    category.level = 1;
    category.checkbox = false;
    category.tag = tag;
    category.children.map(doc => {
      doc.level = 2;
      doc.checkbox = true;
      doc.children = [];
      doc.parent = category.id;
    });

    return category;
  }

  initTreeSelectedState(treeModel, anchorId, sectionId): any[] {
    if(anchorId === 'index') {
      treeModel[0].selected = true;
      return treeModel;
    }
    let selectedNode = this.findTreeNode(anchorId, treeModel);
    if(JSON.stringify(selectedNode) === '{}') {//in some case anchorId not in treeModel
      selectedNode = this.findTreeNode(sectionId, treeModel);
    }
    selectedNode.selected = true;
    let loop = 0;
    while (selectedNode.parent !== 'index' && loop < this.MAX_LOOP) {
      selectedNode = this.findTreeNode(selectedNode.parent, treeModel);
      selectedNode.expanded =true;
      loop++;
    }
    return treeModel;
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
    if(doc.level === 4) {//version change
      collection = this.searchVersionChange(doc, collection, treeModel);
    }else {//manual change
      collection = this.searchManualChange(doc, collection, treeModel);
    }
    return {
      selectedDocs: collection,
      treeModel: treeModel
    };
  }

  searchVersionChange(doc, collection, treeModel): any[] {
    const manual = this.findTreeNode(doc.parent, treeModel) as any;
    this.updateTreeModelStateByVersion(manual, treeModel, doc);
    const param = `${doc.tag}/${manual.parent}/${doc.id}/${manual.id}`;
    collection.map((item, index) => {
      if(item === param) {
        collection.splice(index, 1);
      }
    });
    if(doc.selected) {
      collection.push(param);
    }
    return collection;
  }

  searchManualChange(doc, collection, treeModel): any[] {

    this.updateTreeModelStateByManual(doc.id, treeModel, doc.selected);
    collection = this.clearManualParams(collection, doc);
    if(doc.selected) {//select all version
      collection = this.addSearchParam(doc, collection);
    }
    return collection;
  }

  addSearchParam(doc, collection): any[] {
    if(doc.tag === 'document') {
      doc.children.map(item => {
        const param = `${doc.tag}/${doc.parent}/${item.id}/${doc.id}`;
        collection.push(param);
      });
    }else {
      const param = `${doc.tag}/${doc.parent}/none/${doc.id}`;
      collection.push(param);
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
      if(!(item.indexOf(doc.parent) >= 0 && item.indexOf(doc.id) >= 0)) {
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

  keyHighLight(id, key, bgColor, operation): void{
    if(!key || key === '') {
      return;
    }
    const dom = document.getElementById(id);
    const nodes  = dom.childNodes as any;
    let originalStr = key;
    let replacedStr = "<span style='background-color: "+bgColor+";'>"+key+"</span>";
    if(operation === 'remove') {//default add key high light
      originalStr = "<span style='background-color: "+bgColor+";'>"+key+"</span>";
      replacedStr = key;
    }
    const rStr = new RegExp(originalStr, "g");
    for(let i =0; i<nodes.length - 1; i++){
      if(nodes[i].nodeType == 3 && /\s/.test(nodes[i].nodeValue)){
        nodes[i].parentNode.removeChild(nodes[i]);
      }
      nodes[i].innerHTML = nodes[i].innerHTML.replace(rStr,replacedStr);
    }
  }

  anchorTreeNode(nodeId, treeId): void {
    const node = document.getElementById(nodeId);
    const menuTree = document.getElementById(treeId);
    if(!node || !menuTree) {
      return;
    }
    menuTree.scrollTop = node.offsetTop - 60;
  }

  anchorDocContent(nodeId, reDis): void {
    const ele = document.getElementById(nodeId);
    if(nodeId === 'index' || !ele) {
      return;
    }
    const offsetLeft = ele.offsetLeft;
    const offsetTop = ele.offsetTop - reDis;
    scrollTo(offsetLeft, offsetTop);
  }

  getSecondLevelNodeId(treeModel, node) {
    const secondLevelNode = this.findSecondLevelNode(treeModel, node) as any;
    return secondLevelNode.id;
  }

  hasSameSecondAncestor(node, treeModel, sectionId) {
    const sectionNode = this.findTreeNode(sectionId, treeModel) as any;
    if(sectionNode.level !== 2) {
      return false;
    }
    const secondLevelNode = this.findSecondLevelNode(treeModel, node) as any;
    return secondLevelNode.id === sectionId;
  }

  findSecondLevelNode(treeModel, node): Object {
    let parentNode = this.findTreeNode(node.parent, treeModel) as any;
    let loop = 0;
    while(parentNode.level > 2 && loop < this.MAX_LOOP ) {
      parentNode = this.findTreeNode(parentNode.parent, treeModel);
      loop++;
    }
    return parentNode;
  }
}
