import { TestBed, inject } from '@angular/core/testing';

import { InfoRetrievalService } from './info-retrieval.service';

describe('InfoRetrievalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfoRetrievalService]
    });
  });

  it('should be created', inject([InfoRetrievalService], (service: InfoRetrievalService) => {
    expect(service).toBeTruthy();
  }));
});
