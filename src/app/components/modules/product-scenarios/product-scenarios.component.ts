import { Component, OnInit, HostBinding, Input } from '@angular/core';

import { RealTimeCollectionComponent } from './scenarios-tab/real-time-collection/real-time-collection.component';
import { RealTimeMonitoringComponent } from './scenarios-tab/real-time-monitoring/real-time-monitoring.component';
import { RiskPredictComponent } from './scenarios-tab/risk-predict/risk-predict.component';

@Component({
  selector: 'product-scenarios',
  templateUrl: './product-scenarios.component.html',
  styleUrls: ['./product-scenarios.component.sass'],
})
export class ProductScenariosComponent implements OnInit {
  @Input() scenariosItems: any[];
  @Input() scenariosIncludeImg: boolean;
  @Input() scenariosIncludeTab: boolean;
  constructor() { }

  ngOnInit() {

  }
}
