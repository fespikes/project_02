import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BusinessScenarioService } from './business-scenario.service';
import { Scenario } from './scenario/scenario';


@Component({
  selector: 'tdc-business-scenario',
  templateUrl: './business-scenario.component.html',
  styleUrls: ['./business-scenario.component.sass']
})
export class BusinessScenarioComponent implements OnInit {

	private scenarios: Scenario[];

  constructor(
	  private route: ActivatedRoute,
	  private router: Router,
	  private service: BusinessScenarioService
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
