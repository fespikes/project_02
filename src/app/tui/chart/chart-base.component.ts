import { Component } from '@angular/core';

import { Chart } from './chart.model';

@Component({
  selector: 'tcc-chart-base',
  template: '',
})
export class ChartBaseComponent implements Chart {

  constructor() {}

  draw(data: any, clear?: boolean) {}

  clear() {}

}
