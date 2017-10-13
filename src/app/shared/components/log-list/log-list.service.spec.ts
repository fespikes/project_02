import { TestBed, inject } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { TdcApiService } from '../../services';

import { LogListService } from './log-list.service';

class TccApiServiceStub {
  get() {
    return Observable.of();
  }
}

describe('LogListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LogListService,
        {
          provide: TdcApiService,
          useClass: TccApiServiceStub,
        },
      ],
    });
  });

  it('should be created', inject([LogListService], (service: LogListService) => {
    expect(service).toBeTruthy();
  }));
});
