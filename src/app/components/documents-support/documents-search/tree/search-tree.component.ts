import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'tdc-search-tree',
  templateUrl: './search-tree.component.html',
  styleUrls: ['./search-tree.component.sass'],
})

export class SearchTreeComponent implements OnInit {
  @Input() treeModel: any[];
  @Output() onSelectChange = new EventEmitter();
  constructor() { }
  ngOnInit() {
  }

  toggle(moduleType) {
    moduleType.expanded = !moduleType.expanded;
  }


  selectChange(category, module, version) {
    this.onSelectChange.emit({
      category: category,
      module: module,
      version: version
    });
  }
}
