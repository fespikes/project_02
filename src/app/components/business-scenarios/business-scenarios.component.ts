import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BusinessScenariosService } from './business-scenarios.service';
import { Scenario } from './scenario/scenario';


@Component({
  selector: 'tdc-business-scenarios',
  templateUrl: './business-scenarios.component.html',
  styleUrls: ['./business-scenarios.component.sass']
})
export class BusinessScenariosComponent implements OnInit {

	scenarios: Scenario[];

  constructor(
	  private route: ActivatedRoute,
	  private router: Router,
	  private service: BusinessScenariosService
	  ) {
  }

  ngOnInit() {
  	this.scenarios = this.service.getScenarios();
  }

  gotoScenario (scenario: Scenario) {
    // this.router.navigate(['/business-scenario', {type: scenario.type} ]);//{ id: scenarioId }
    this.router.navigate(['/business-scenario', scenario.type]);//{ id: scenarioId }
	}

}
