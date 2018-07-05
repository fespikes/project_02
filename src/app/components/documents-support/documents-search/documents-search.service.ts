import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { DocumentResService } from '../services/document.res.service';
import { TranslateService } from 'app/i18n';
import * as Mark from 'mark.js';

import { TreeNode } from './documents-search.model';

@Injectable()
export class DocumentSearchService {

  MAX_LOOP = 10;
  constructor(
    private translate: TranslateService,
    private documentResService: DocumentResService,
  ) {

  }

  // 遍历(广度优先)treeModel，设置节点状态
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

  // 遍历treeModel，查找树节点
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

  // 移除选中节点状态，找到一个即退出查找
  removeSelectedState(treeModel) {
    let stack = [], item;
    for (let i = 0; i < treeModel.length; i++) {
      stack.push(treeModel[i]);
    }
    while (stack.length) {
      item = stack.shift();
      if (item.selected) {
        item.selected = false;
        break;
      }
      if (item.children && item.children.length) {
        stack = stack.concat(item.children);
      }
    }

    return treeModel;
  }

  // 初始化搜索树treeModel
  initSearchTree(docsTree): any[] {
    const tdhDoc = this.getTreeModelByCategory(['TDH-PLATFORM', 'TDH-DEV_SUITE', 'TDH-OPS'], docsTree);
    const sophonDoc = this.getTreeModelByCategory(['SOPHON-PLATFORM', 'SOPHON-DEV_SUITE', 'SOPHON-OPS'], docsTree);
    const faqDoc = this.getTreeModelByCategory(['FAQ'], docsTree);
    const introDoc = this.getTreeModelByCategory(['INTRO'], docsTree);

    return [
      this.makeProductDocList(tdhDoc, sophonDoc),
      this.setFAQIntroDocState(faqDoc[0], 'faq'),
      this.setFAQIntroDocState(introDoc[0], 'intro'),
    ];
  }

  // 根据树节点类别，对节点进行分类，返回分好类别的子树
  getTreeModelByCategory(categories, docsTree): any[] {
    const model = [];
    docsTree.map(node => {
      if (categories.indexOf(node.id) > -1) {
        node.parent = (node.id).split('-')[0];
        model.push(node);
      }
    });
    return model;
  }

  // 构造产品子树
  makeProductDocList(tdhDocs, sophonDocs): Object {
    const tdhObj = this.setProductDocState(tdhDocs, 'TDH');
    const sophonObj = this.setProductDocState(sophonDocs, 'SOPHON');
    return {
      id: 'DOCUMENT',
      name: this.translate.translateKey('DOCUMENTS.PRODUCT_DOCUMENT'),
      level: 1,
      tag: 'document',
      checkbox: false,
      children: [tdhObj, sophonObj],
    };
  }

  // 初始设置产品子树的状态
  setProductDocState(docList, categoryId: string): Object {
    const productName = categoryId === 'TDH' ? 'Transwarp Data Hub' : 'Sophon';
    docList.map(category => {
        category.level = 3;
        category.checkbox = true;
        category.parent = categoryId;
        category.tag = 'document',
        category.children.map(doc => {
          doc.level = 4;
          doc.checkbox = true;
          doc.parent = category.id;
          doc.children.map(version => {
            version.level = 5;
            version.checkbox = true;
            version.parent = doc.id;
            version.tag = doc.tag;
            version.searchParam = `${category.tag}/${category.id}/${version.id}/${doc.id}`;
          });
        });
    });
    return {
      id: categoryId,
      name: productName,
      level: 2,
      tag: 'document',
      checkbox: true,
      children: docList,
    };
  }

  // 设置常见问题、新手入门子树状态
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

  // 初始化文档详情树选中节点目录状态
  initTreeSelectedState(treeModel, anchorId, sectionId): any[] {
    if (anchorId === 'index') {
      treeModel[0].selected = true;
      return treeModel;
    }
    let selectedNode = this.findTreeNode(anchorId, treeModel);
    if (JSON.stringify(selectedNode) === '{}') { // in some case anchorId not in treeModel
      selectedNode = this.findTreeNode(sectionId, treeModel);
    }
    selectedNode.selected = true;
    let loop = 0;
    while (selectedNode.parent !== 'index' && loop < this.MAX_LOOP) {
      selectedNode = this.findTreeNode(selectedNode.parent, treeModel);
      selectedNode.expanded = true;
      loop++;
    }
    return treeModel;
  }

  // 构造搜索参数
  makeSearchAPIParams(keyword, pagination, docs): Object {
    const from = (pagination.page - 1) * pagination.size;
    return {
      keywords: [keyword],
      documents: docs,
      from: from,
      size: pagination.size,
    };
  }

  // 构造选中的文档(对应于search api中documents字段的参数)以及更新树的选中状态
  makeSelectedDocsParams(node: TreeNode, searchParams: string[], treeModel: TreeNode[]): string[] {
    // 更新TreeModel的选中状态
    this.updateTreeSelectedState(node, treeModel);
    // 构造选中文档的搜索参数(即对应于search api中documents字段的参数)
    searchParams = this.makeSearchParams(searchParams, node, treeModel);
    return searchParams;
  }

  // 树节点选中状态发生变化，更新树选中的状态
  updateTreeSelectedState(node: TreeNode, treeModel: TreeNode[]) {
    // 向下遍历设置当前节点子树的selected状态
    this.traversalTree(node.children, 'selected', node.selected);
    // 更新祖先节点的选中状态
    this.traversalConsistentState(node, treeModel);
  }

  // 更新祖先节点的选中状态
  traversalConsistentState(node: TreeNode, treeModel: TreeNode[]) {
    let currentNode = node;
    let loop = 0;
    while (currentNode.parent && loop < this.MAX_LOOP) {
      const parentNode = this.findTreeNode(currentNode.parent, treeModel);
      const consistented = this.checkConsistentState(parentNode.children, currentNode.selected);
      parentNode.selected = consistented ? currentNode.selected : false;
      currentNode = parentNode;
      loop++;
    }
  }

  // 检查子树状态是否一致，用来更新父节点状态
  checkConsistentState(children, selected): boolean {
    let count = 0;
    children.map(item => {
      if (!selected === !item.selected) {
        count++;
      }
    });
    if (count === children.length) {
      return true;
    }else {
      return false;
    }
  }

  // 构造搜索参数
  makeSearchParams(searchParams: string[], node: TreeNode, treeModel: TreeNode[]): string[] {
    searchParams = this.clearSearchParams(searchParams, node, treeModel);
    if (node.selected) {
      searchParams = this.addSearchParam(node, searchParams);
    }
    return searchParams;
  }

  // 清除所选树节点相关搜索参数
  clearSearchParams(collection: string[], entity, treeModel: any[]): string[] {
    const selectedDocsParams = [];
    // 这里采用过滤的方式，即将与该节点不相关的参数加入参数集合中
    collection.map((item, index) => {
      if (entity.level === 5) {
        const parent = this.findTreeNode(entity.parent, treeModel);
        if (item.indexOf(`${entity.id}/${parent.id}`) === -1) {
          selectedDocsParams.push(item);
        }
      } else {
        if (item.indexOf(entity.id) === -1) {
          selectedDocsParams.push(item);
        }
      }
    });
    return selectedDocsParams;
  }

  // 添加搜索参数，即search api中documents字段对应的参数
  addSearchParam(node: TreeNode, searchParams: string[]): string[] {
    if (node.tag === 'document') {
      searchParams = searchParams.concat(this.getLeafSearchParams(node));
    }else {
      const param = `${node.tag}/${node.parent}/none/${node.id}`;
      searchParams.push(param);
    }
    return searchParams;
  }

  getLeafSearchParams(node: TreeNode): string[] {
    const searchParams = [];
    // 该节点是叶子结点，即版本节点
    if (!node.children.length) {
      searchParams.push(node.searchParam);
    } else {
      let stack = [], item;
      for (let i = 0; i < node.children.length; i++) {
        stack.push(node.children[i]);
      }
      while (stack.length) {
        item = stack.shift();
        if (!item.children || !item.children.length) {
          searchParams.push(item.searchParam);
        }
        stack = stack.concat(item.children);
      }
    }
    return searchParams;
  }

  makePaginationParams(docsCount, pagination) {
    return {
      page: pagination.page,
      size: pagination.size,
      total: docsCount,
    };
  }

  keyHighLight(className, key, operation): void {
    if (!key) {
      return;
    }
    const instance = new Mark(document.querySelector(className));
    if (operation === 'add') {
      instance.mark(key, {});
    } else if (operation === 'remove') {
      instance.unmark({});
    }
  }

  anchorTreeNode(nodeId, treeId): void {
    const node = document.getElementById(nodeId);
    const menuTree = document.getElementById(treeId);
    if (!node || !menuTree) {
      return;
    }
    menuTree.scrollTop = node.offsetTop - 60;
  }

  anchorDocContent(nodeId, reDis): void {
    const ele = document.getElementById(nodeId);
    if (nodeId === 'index' || !ele) {
      return;
    }
    const offsetLeft = ele.offsetLeft;
    const offsetTop = ele.offsetTop - reDis;
    scrollTo(offsetLeft, offsetTop);
  }

  getSecondLevelNodeId(treeModel, node) {
    const secondLevelNode = this.findSecondLevelNode(treeModel, node);
    return secondLevelNode.id;
  }

  hasSameSecondAncestor(node, treeModel, sectionId) {
    const sectionNode = this.findTreeNode(sectionId, treeModel);
    if (sectionNode.level !== 2) {
      return false;
    }
    const secondLevelNode = this.findSecondLevelNode(treeModel, node);
    return secondLevelNode.id === sectionId;
  }

  findSecondLevelNode(treeModel, node): any {
    let parentNode = this.findTreeNode(node.parent, treeModel);
    let loop = 0;
    while (parentNode.level > 2 && loop < this.MAX_LOOP ) {
      parentNode = this.findTreeNode(parentNode.parent, treeModel);
      loop++;
    }
    return parentNode;
  }
}
