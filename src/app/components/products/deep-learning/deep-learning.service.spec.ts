import { TestBed, inject } from '@angular/core/testing';

import { DeepLearningService } from './deep-learning.service';

describe('DeepLearningService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeepLearningService]
    });
  });

  it('should be created', inject([DeepLearningService], (service: DeepLearningService) => {
    expect(service).toBeTruthy();
  }));
});
