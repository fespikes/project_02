import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BusinessScenariosService } from '../business-scenarios.service';
import { Scenario } from './scenario';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'tdc-scenario',
  templateUrl: './scenario.component.html',
  styleUrls: ['./scenario.component.sass']
})
export class ScenarioComponent implements OnInit {

	scenario: Scenario;

  breadCrumbs: any;

  constructor(
	  private route: ActivatedRoute,
	  private router: Router,
	  private service: BusinessScenariosService
	) { }

  ngOnInit() {
  	let type: string = null;
    let crumbRoot = this.service.getRoute();

  	this.route.paramMap
      .switchMap(
        (params: ParamMap) => this.service.getScenarioByType( type=params.get('type') )
      ).subscribe(
        (scenario: Scenario) => {
          this.scenario = scenario;
          this.breadCrumbs = [
            {
              text: crumbRoot.short,
              href: crumbRoot.href
            },
            {
              text: scenario.short,
              href: 'business-scenario/:'+ type
            }
          ]
        }
      );
  }

}