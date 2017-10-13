import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'tdc-menu-tree',
  templateUrl: './doc-tree.component.html',
  styleUrls: ['./doc-tree.component.sass'],
})

export class DocTreeComponent implements OnInit {
  @Input() treeModel: any[];
  @Input() treeLevel: number;
  @Output() onSelectChange = new EventEmitter();

  constructor() { }
  ngOnInit() {

  }

  toggle(node, level) {
    node.expanded = !node.expanded;
    this.selectChange(node, level);
  }


  selectChange(node, level) {
    if(level > 2) {
      return;
    }
    node.level = level;
    this.onSelectChange.emit(node);
  }
}
