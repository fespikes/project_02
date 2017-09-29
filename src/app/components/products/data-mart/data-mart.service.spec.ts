import { TestBed, inject } from '@angular/core/testing';

import { DataMartService } from './data-mart.service';

describe('DataMartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataMartService]
    });
  });

  it('should be created', inject([DataMartService], (service: DataMartService) => {
    expect(service).toBeTruthy();
  }));
});
