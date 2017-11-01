import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import { DocumentSearchService } from '../../documents-search/documents-search.service';

@Component({
  selector: 'tdc-menu-tree',
  templateUrl: './doc-tree.component.html',
  styleUrls: ['./doc-tree.component.sass'],
})

export class DocTreeComponent implements OnInit {
  @Input() treeModel: any[];
  @Input() treeLevel: number;
  @Output() onSelectChange = new EventEmitter();

  constructor(
    private documentSearchService: DocumentSearchService
  ) { }

  ngOnInit() {

  }

  toggle(node, level) {
    node.expanded = !node.expanded;
    //this.selectChange(node, level);
  }


  selectChange(node, level) {
    this.treeModel = this.documentSearchService.traversalTree(
      this.treeModel, 'selected', false);
    node.selected = !node.selected;
    node.level = level || node.level;
    this.onSelectChange.emit(node);
  }
}
