import { TestBed, inject } from '@angular/core/testing';
import { Overlay } from '@angular/cdk/overlay';

import { MessageService } from './message.service';

class OverlayStub {

}

describe('MessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MessageService,
        {
          provide: Overlay,
          useClass: OverlayStub,
        },
      ],
    });
  });

  it('should be created', inject([MessageService], (service: MessageService) => {
    expect(service).toBeTruthy();
  }));
});
