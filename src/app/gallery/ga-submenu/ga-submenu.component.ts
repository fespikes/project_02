import { Component, HostBinding } from '@angular/core';

import { SubmenuItem } from '../../tui';

@Component({
  selector: 'tcc-ga-submenu',
  templateUrl: './ga-submenu.component.html',
  styleUrls: ['./ga-submenu.component.sass'],
})
export class GaSubmenuComponent {
  @HostBinding('class.submenu-layout') layout = true;
  private routePrefix = '/gallery/submenu';
  menuTitle = '用户与权限';
  backUrl = '../';
  menuItems1: SubmenuItem[] = [
    {
        name: '用户管理',
        url: `${this.routePrefix}/user`,
        icon: 'user',
      },
      {
        name: '组管理',
        url: `${this.routePrefix}/group`,
        icon: 'user',
      },
      {
        name: '角色管理',
        url: `${this.routePrefix}/role`,
        icon: 'user',
      },
      {
        name: '权限管理',
        url: `${this.routePrefix}/permission`,
        icon: 'user',
      },
  ];
  menuItems2: SubmenuItem[] = [
    {
      name: '费用管理',
      url: `${this.routePrefix}/finance`,
      icon: 'user',
      children: [
        {
          name: '账户总览',
          url: `${this.routePrefix}/finance/overview`,
        },
      ],
    },
    {
      name: '操作日志',
      url: `${this.routePrefix}/log`,
      icon: 'user',
    },
  ];
}
