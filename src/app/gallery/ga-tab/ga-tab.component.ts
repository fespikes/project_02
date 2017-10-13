import { Component } from '@angular/core';

@Component({
  templateUrl: './ga-tab.component.html',
})
export class GaTabComponent {
  selectedIndex = 2;

  tabChange(index: number) {
    console.log(index);
  }
}
