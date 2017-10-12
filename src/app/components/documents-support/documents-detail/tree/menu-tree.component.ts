import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'tdc-menu-tree',
  templateUrl: './menu-tree.component.html',
  styleUrls: ['./menu-tree.component.sass'],
})

export class MenuTreeComponent implements OnInit {
  @Input() treeModel: any[];
  @Output() onSelectChange = new EventEmitter();
  constructor() { }
  ngOnInit() {
  }

  toggle(moduleType) {
    moduleType.expanded = !moduleType.expanded;
  }


  selectChange(node) {
    //console.log('node=', node);
    this.onSelectChange.emit(node);
  }
}
