import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.sass'],
})

export class ModuleListComponent implements OnInit {
  @Input() moduleItems: any[];
  @Input() moduleTypes: any[];
  @Output() onModuleChange = new EventEmitter();
  constructor() { }
  ngOnInit() {
  }

  toggleModules(moduleType) {
    moduleType.expanded = !moduleType.expanded;
    if (moduleType.expanded) {
      this.moduleTypes.map((type) => {
        if (moduleType.value !== type.value) {
          type.expanded = false;
        }
      });
    }
  }

  selectModule(module, moduleType) {
    if (!module.selected) {
      module.selected = true;
      this.moduleTypes.map((type) => {
        this.moduleItems[type.value].map((item) => {
          if (module.name !== item.name) {
            item.selected = false;
          }
        });
      });
      this.onModuleChange.emit(module);
    }
  }
}
