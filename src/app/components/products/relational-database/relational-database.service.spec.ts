import { TestBed, inject } from '@angular/core/testing';

import { RelationalDatabaseService } from './relational-database.service';

describe('RelationalDatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RelationalDatabaseService]
    });
  });

  it('should be created', inject([RelationalDatabaseService], (service: RelationalDatabaseService) => {
    expect(service).toBeTruthy();
  }));
});
