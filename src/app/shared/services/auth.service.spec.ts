import { TestBed, inject } from '@angular/core/testing';
import { Http } from '@angular/http';

import { TccAuthService } from './auth.service';
import { TdcApiService } from './api.service';

describe('TccAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TccAuthService,
        {
          provide: TdcApiService,
          useValue: {},
        },
        {
          provide: Http,
          useValue: {},
        },
      ],
    });
  });

  it('should be created', inject([TccAuthService], (service: TccAuthService) => {
    expect(service).toBeTruthy();
  }));
});
