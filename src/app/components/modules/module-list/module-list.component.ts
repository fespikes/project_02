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
  @Input() groupedPermissions: any[];
  @Input() permissionType: any[];
  @Output() onPermChange = new EventEmitter();
  constructor() { }
  ngOnInit() {
    console.log(this.permissionType);
    console.log(this.groupedPermissions);
  }

  togglePerms(permType) {
    permType.expanded = !permType.expanded;
    if (permType.expanded) {
      this.permissionType.map((type) => {
        if (permType.value !== type.value) {
        type.expanded = false;
        }
      });
    }
  }

  selectPerm(perm, permType) {
    if (!perm.selected) {
      perm.selected = true;
      this.permissionType.map((type) => {
        this.groupedPermissions[type.value].map((groupedPerm) => {
          if (perm.permName !== groupedPerm.permName) {
            groupedPerm.selected = false;
          }
        });
      });
      this.onPermChange.emit(perm);
    }
  }
}
