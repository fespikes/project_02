import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import { DocumentSearchService } from '../../documents-search/documents-search.service';
import { DocumentResService } from '../../services/document.res.service';

@Component({
  selector: 'tdc-menu-tree',
  templateUrl: './doc-tree.component.html',
  styleUrls: ['./doc-tree.component.sass'],
})

export class DocTreeComponent implements OnInit {
  @Input() treeModel: any[];
  @Input() treeLevel: number;
  @Output() onSelectChange = new EventEmitter();

  DOC_MENU_TREE_ID = 'doc-menu-tree';
  TREE_NODE_PREFIX = 'doc-tree-';
  RELA_DIS_SUB_TITLE = 105;

  constructor(
    private documentSearchService: DocumentSearchService,
    private documentResService: DocumentResService
  ) { }

  ngOnInit() {

  }

  toggle(node, level) {
    node.expanded = !node.expanded;
    this.selectChange(node, level);
  }

  selectChange(node, level) {
    this.updateTreeState(node, level);
    this.documentResService.setSectionId(node.id);
    this.onSelectChange.emit(node);
    if(level >= 3) {
      this.documentSearchService.anchorDocContent(
        node.id, this.RELA_DIS_SUB_TITLE);
    }
  }

  updateTreeState(node, level) {
    this.treeModel = this.documentSearchService.traversalTree(
      this.treeModel, 'selected', false);
    node.selected = !node.selected;
    node.level = level || node.level;
  }

  ngAfterViewInit() {
    if (this.treeModel && this.treeModel.length > 0) {
      const sectionId = this.documentResService.getSectionId();
      this.documentSearchService.anchorTreeNode(
        this.TREE_NODE_PREFIX + sectionId, this.DOC_MENU_TREE_ID);
    }
  }
}
