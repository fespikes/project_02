import { TestBed, inject } from '@angular/core/testing';

import { AnalysisMiningService } from './analysis-mining.service';

describe('AnalysisMiningService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnalysisMiningService]
    });
  });

  it('should be created', inject([AnalysisMiningService], (service: AnalysisMiningService) => {
    expect(service).toBeTruthy();
  }));
});
