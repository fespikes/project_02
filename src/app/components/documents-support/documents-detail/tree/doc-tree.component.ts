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

  dbClick(node, level) {
    this.toggle(node, level);
  }

  selectChange(node, level) {
    if(level) {//exclude parent event
      node.level = level;
    }
    this.onSelectChange.emit(node);
  }

  ngAfterViewInit() {
    if (this.treeModel && this.treeModel.length > 0) {
      const anchorId = this.documentResService.getAnchorId();
      this.documentSearchService.anchorTreeNode(
        this.TREE_NODE_PREFIX + anchorId, this.DOC_MENU_TREE_ID
      );
    }
  }
}
