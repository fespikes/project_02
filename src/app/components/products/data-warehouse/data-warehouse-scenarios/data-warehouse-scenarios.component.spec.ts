import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataWarehouseScenariosComponent } from './data-warehouse-scenarios.component';

describe('DataWarehouseScenariosComponent', () => {
  let component: DataWarehouseScenariosComponent;
  let fixture: ComponentFixture<DataWarehouseScenariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataWarehouseScenariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataWarehouseScenariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
