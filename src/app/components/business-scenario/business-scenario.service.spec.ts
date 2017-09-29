import { TestBed, inject } from '@angular/core/testing';

import { BusinessScenarioService } from './business-scenario.service';

describe('BusinessScenarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusinessScenarioService]
    });
  });

  it('should be created', inject([BusinessScenarioService], (service: BusinessScenarioService) => {
    expect(service).toBeTruthy();
  }));
});
