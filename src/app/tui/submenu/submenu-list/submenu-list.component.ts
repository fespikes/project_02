import { Component, OnInit, Input, Host } from '@angular/core';
import { Router } from '@angular/router';

import { SubmenuComponent } from '../submenu.component';
import { DropdownComponent } from '../../dropdown/dropdown.component';

export interface SubmenuItem {
  name: string;
  url: string;
  icon?: string;
  children?: SubmenuItem[];
  childrenOpen?: boolean;
}

@Component({
  selector: 'tcc-submenu-list',
  templateUrl: './submenu-list.component.html',
})
export class SubmenuListComponent implements OnInit {
  @Input() items: SubmenuItem[];
  @Input() menuTitle: string;
  constructor(private router: Router, @Host() private submenu: SubmenuComponent) { }

  ngOnInit() {
    // 展开对应的项目
    this.items.forEach((item: SubmenuItem) => {
      if (this.isActive(item)) {
        item.childrenOpen = true;
      }
    });
  }

  clickItem(item) {
    // 折叠除所有其他项目
    this.items.forEach((_item: SubmenuItem) => {
      if (item !== _item && _item.children) {
        _item.childrenOpen = false;
      }
    });
    if (item.children) {
      item.childrenOpen = !item.childrenOpen;
    } else {
      this.navigate(item.url);
    }
  }

  navigate(url) {
    this.router.navigateByUrl(url);
  }

  isActive(item) {
    if (!item.url) {
      return false;
    }
    return this.router.isActive(item.url, false);
  }

  getAvatar(item) {
    return item.name.substr(0, 1);
  }

  isCollapsed() {
    return this.submenu.collapsed;
  }

  showToggle(item) {
    return item.children && !this.submenu.collapsed;
  }
}
