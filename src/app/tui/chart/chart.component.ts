import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  HostListener,
  HostBinding,
  ContentChild,
} from '@angular/core';

import { Subscription } from 'rxjs/Rx';
import * as debounce from 'lodash/debounce';

import { TranslateService } from '../../i18n';
import { SubmenuService } from '../submenu';

import { ChartBaseComponent } from './chart-base.component';

@Component({
  selector: 'tcc-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.sass'],
})
export class ChartComponent implements OnInit, OnDestroy {
  @HostBinding('class.tcc-chart') hostClass = true;

  /** 标识当前表格是否处于loading状态 */
  @HostBinding('class.loading') get loadingClass() {
    return this.loading;
  }

  @ContentChild('tccChartContent') chart: ChartBaseComponent;
  @Input() loading = false;

  private _data: any;
  @Input() set data(value: any) {
    this._data = value;
    this.draw();
  }
  get data(): any {
    return this._data;
  }

  get empty() {
    return !this.data || !this.data.length;
  }

  private draw = debounce(() => {
    if (this.empty) {
      this.clear();
      return;
    }
    this.chart.draw(this.data);
  }, 200);

  private translateSub: Subscription;
  private submenuSub: Subscription;

  @HostListener('window:resize', ['$event'])
  private onResize(event) {
    this.draw();
  }

  constructor(
    private translate: TranslateService,
    private submenu: SubmenuService,
  ) {}

  ngOnInit() {
    this.translateSub = this.translate.onLangChange.subscribe(() => {
      this.draw();
    });

    this.submenuSub = this.submenu.onToggle
    .subscribe(() => {
      this.draw();
    });
  }

  ngOnDestroy() {
    this.translateSub.unsubscribe();
    this.submenuSub.unsubscribe();
  }

  private clear() {
    this.chart.clear();
  }

}
