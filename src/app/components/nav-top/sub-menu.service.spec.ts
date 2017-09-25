import { TestBed, inject } from '@angular/core/testing';

import { SubMenuService } from './sub-menu.service';

describe('SubMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubMenuService]
    });
  });

  it('should be created', inject([SubMenuService], (service: SubMenuService) => {
    expect(service).toBeTruthy();
  }));
});
