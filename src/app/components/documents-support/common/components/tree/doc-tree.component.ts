import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import { DocumentSearchService } from '../../../documents-search/documents-search.service';
import { DocumentResService } from '../../../services/document.res.service';

@Component({
  selector: 'tdc-menu-tree',
  templateUrl: './doc-tree.component.html',
  styleUrls: ['./doc-tree.component.sass'],
})

export class DocTreeComponent implements OnInit {
  @Input() treeModel: any[];
  @Input() treeLevel: number;
  @Input() treeType: string;
  @Output() onSelectChange = new EventEmitter();

  DOC_MENU_TREE_ID = 'doc-menu-tree';
  TREE_NODE_PREFIX = 'doc-tree-';

  constructor(
    private documentSearchService: DocumentSearchService,
    private documentResService: DocumentResService
  ) { }

  ngOnInit() {
  }

  toggle(node) {
    node.expanded = !node.expanded;
    node['clickToggle'] = true;
    this.onSelectChange.emit(node);
    delete node['clickToggle'];
  }

  dbClick(node) {
    this.toggle(node);
  }

  selectChange(node) {
    this.onSelectChange.emit(node);
  }

  checkboxChange(node) {
    this.selectChange(node);
  }

  ngAfterViewInit() {
    if (this.treeModel && this.treeModel.length > 0 && this.treeType === 'doc-tree') {
      const anchorId = this.documentResService.getAnchorId();
      this.documentSearchService.anchorTreeNode(
        this.TREE_NODE_PREFIX + anchorId, this.DOC_MENU_TREE_ID
      );
    }
  }
}
