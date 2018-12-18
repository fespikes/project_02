import {
  Component,
  OnInit,
  OnDestroy,
  HostBinding,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'tdc-module-tab',
  templateUrl: './module-tab.component.html',
  styleUrls: ['./module-tab.component.sass'],
})

export class ModuleTabComponent implements OnInit, OnDestroy {
  @HostBinding('class.module-tab') hostClass = true;

  @Input() tabItems: any[];
  @Input() anchorTop: any;
  @Output() onTabChange = new EventEmitter();

  tabEl = null;

  constructor() {

  }

  ngOnInit() {
    this.tabEl = document.getElementById('module-tab-ul');
    document.onscroll = this.manipulateTabPosition.bind(this);
  }

  manipulateTabPosition() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop <= this.anchorTop) {
      this.tabEl.className = 'tab-ul';
    } else {
      this.tabEl.className = 'fixed';
    }
  }

  tabChange(name) {
    this.updateTabState(name);
    this.onTabChange.emit({
      tabName: name,
      className: this.tabEl.className,
    });
  }

  updateTabState(tabName) {
    this.tabItems.map(tab => {
      if (tab.name === tabName) {
        tab.selected = true;
      } else {
        tab.selected = false;
      }
    });
  }

  ngOnDestroy() {
    document.onscroll = null;
  }
}
