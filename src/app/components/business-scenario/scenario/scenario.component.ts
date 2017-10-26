import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BusinessScenarioService } from '../business-scenario.service';
import { Scenario } from './scenario';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'tdc-scenario',
  templateUrl: './scenario.component.html',
  styleUrls: ['./scenario.component.scss']
})
export class ScenarioComponent implements OnInit {

	scenario: Scenario;

  constructor(
	  private route: ActivatedRoute,
	  private router: Router,
	  private service: BusinessScenarioService
	) { }

  ngOnInit() {
  	let scenario: Scenario = null;
  	let type: string = null;

  	this.route.paramMap
      .switchMap((params: ParamMap) => params.get('type'));

/*  	this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.service.getScenarioByType(params.get('type')))
      .subscribe((scenario: Scenario) => this.scenario = scenario);*/
  }

}