import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataWarehouseComponent } from './data-warehouse.component';

describe('DataWarehouseComponent', () => {
  let component: DataWarehouseComponent;
  let fixture: ComponentFixture<DataWarehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataWarehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
