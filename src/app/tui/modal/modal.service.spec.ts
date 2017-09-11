import { Router } from '@angular/router';
import { TestBed, inject } from '@angular/core/testing';

import { Observable } from 'rxjs/Rx';

import { TccModalService } from './modal.service';

describe('ModaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TccModalService,
        {
          provide: Router,
          useValue: {
            events: Observable.of(null),
          },
        },
      ],
    });
  });

  it('should be created', inject([TccModalService], (service: TccModalService) => {
    expect(service).toBeTruthy();
  }));
});
