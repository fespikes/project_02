import { TestBed, inject } from '@angular/core/testing';

import { ModalCountService } from './modal-count.service';

describe('ModalCountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalCountService],
    });
  });

  it('should be created', inject([ModalCountService], (service: ModalCountService) => {
    expect(service).toBeTruthy();
  }));
});
