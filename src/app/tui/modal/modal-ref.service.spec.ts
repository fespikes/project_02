import { TestBed, inject } from '@angular/core/testing';

import { TccModalRef } from './modal-ref.service';

describe('TccModalRef', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TccModalRef],
    });
  });

  it('should be created', inject([TccModalRef], (service: TccModalRef) => {
    expect(service).toBeTruthy();
  }));
});
