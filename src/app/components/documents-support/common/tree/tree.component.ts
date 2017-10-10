import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'tdc-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.sass'],
})

export class TreeComponent implements OnInit {
  @Input() treeModel: any[];
  @Output() onSelectChange = new EventEmitter();
  constructor() { }
  ngOnInit() {
  }

  toggle(moduleType) {
    moduleType.expanded = !moduleType.expanded;
  }


  selectChange(module, version) {
    this.onSelectChange.emit({
      module: module,
      version: version
    });
  }
}
