import {
  Component,
  OnInit,
  HostBinding,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'module-tab',
  templateUrl: './module-tab.component.html',
  styleUrls: ['./module-tab.component.sass']
})

export class ModuleTabComponent implements OnInit {
  @HostBinding('class.module-tab') hostClass = true;

  @Input() tabItems: any[];
  @Output() onTabChange = new EventEmitter();
  constructor() {

  }

  ngOnInit() {

  }

  tabChange(name) {
    this.updateTabState(name);
    this.onTabChange.emit(name);
  }

  updateTabState(tabName) {
    this.tabItems.map(tab => {
      if(tab.name === tabName) {
        tab.selected = true;
      }else {
        tab.selected = false;
      }
    });
  }
}
