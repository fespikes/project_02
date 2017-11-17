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
  @Input() treeType: string;
  @Output() onSelectChange = new EventEmitter();

  DOC_MENU_TREE_ID = 'doc-menu-tree';
  TREE_NODE_PREFIX = 'doc-tree-';

  constructor(
    private documentSearchService: DocumentSearchService,
    private documentResService: DocumentResService
  ) { }

  ngOnInit() {
    console.log('ngOnInit-doc-tree=', this.treeType);
  }

  toggle(node) {
    node.expanded = !node.expanded;
    this.onSelectChange.emit(node);
  }

  dbClick(node) {
    this.toggle(node);
  }

  selectChange(node) {
    node.expanded = true;
    this.onSelectChange.emit(node);
  }

  checkboxChange(node) {
    console.log(node);
    console.log(this.treeType);
    this.onSelectChange.emit(node);
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
