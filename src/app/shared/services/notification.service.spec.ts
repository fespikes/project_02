import { TestBed, inject } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { TdcApiService } from '../../shared';

import { NotificationService } from './notification.service';

class TccApiServiceStub {
  get() {
    return Observable.of();
  }
}

describe('NotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NotificationService,
        {
          provide: TdcApiService,
          useClass: TccApiServiceStub,
        },
      ],
    });
  });

  it('should be created', inject([NotificationService], (service: NotificationService) => {
    expect(service).toBeTruthy();
  }));
});
