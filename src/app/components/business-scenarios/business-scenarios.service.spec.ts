import { TestBed, inject } from '@angular/core/testing';

import { BusinessScenariosService } from './business-scenarios.service';

describe('BusinessScenariosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusinessScenariosService]
    });
  });

  it('should be created', inject([BusinessScenariosService], (service: BusinessScenariosService) => {
    expect(service).toBeTruthy();
  }));
});
