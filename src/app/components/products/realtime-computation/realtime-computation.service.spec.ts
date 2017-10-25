import { TestBed, inject } from '@angular/core/testing';

import { RealtimeComputationService } from './realtime-computation.service';

describe('RealtimeComputationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RealtimeComputationService]
    });
  });

  it('should be created', inject([RealtimeComputationService], (service: RealtimeComputationService) => {
    expect(service).toBeTruthy();
  }));
});
