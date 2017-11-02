import { TestBed, inject } from '@angular/core/testing';

import { DataWarehouseService } from './data-warehouse.service';

describe('DataWarehouseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataWarehouseService]
    });
  });

  it('should be created', inject([DataWarehouseService], (service: DataWarehouseService) => {
    expect(service).toBeTruthy();
  }));
});
