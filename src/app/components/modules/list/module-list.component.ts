import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'tdc-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.sass'],
})

export class ModuleListComponent implements OnInit {
  @Input() moduleTree: any[];
  @Output() onModuleChange = new EventEmitter();

  backUrl = '../home';

  constructor() { }
  ngOnInit() {
  }

  toggleModules(moduleType) {
    moduleType.expanded = !moduleType.expanded;
    if (moduleType.expanded) {
      this.moduleTree.map((type) => {
        if (moduleType.id !== type.id) {
          type.expanded = false;
        }
      });
    }
  }

  selectModule(module) {
    if (!module.selected) {
      module.selected = true;
      this.moduleTree.map((type) => {
        type.children.map(item => {
          if (module.id !== item.id) {
            item.selected = false;
          }
        });
      });
    }
  }
}
