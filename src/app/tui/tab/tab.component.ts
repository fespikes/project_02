import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  AfterContentInit,
  HostBinding,
  Input,
  Output,
  EventEmitter,
  ContentChildren,
  QueryList,
} from '@angular/core';

import { TabPane } from './tab-pane.model';
import { TabPaneDirective } from './tab-pane.directive';

@Component({
  selector: 'tcc-tab',
  templateUrl: './tab.component.html',
})
export class TabComponent implements AfterContentInit {
  @HostBinding('class.tcc-tab') true;
  @Input() selectedIndex = 0;
  @Output() selectedIndexChange = new EventEmitter();
  @ContentChildren(TabPaneDirective) panes: QueryList<TabPaneDirective>;

  ngAfterContentInit() {
    // 立即执行`show`可能会出现错误`Expression has changed after it was checked`
    // 比如TccTable组件
    setTimeout(() => {
      this.panes.forEach((pane, index) => {
        if (this.selectedIndex === index) {
          pane.show();
        }
      });
    });
  }

  selectPane(pane: TabPaneDirective, index: number, silent: boolean) {
    if (!pane) {
      return;
    }
    this.selectedIndex = index;
    this.panes.forEach((p: TabPaneDirective) => {
      p.hide();
    });
    pane.show();
    if (!silent) {
      this.selectedIndexChange.emit(index);
    }
  }

}
