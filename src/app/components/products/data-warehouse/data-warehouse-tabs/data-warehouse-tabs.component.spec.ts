import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataWarehouseTabsComponent } from './data-warehouse-tabs.component';

describe('DataWarehouseTabsComponent', () => {
  let component: DataWarehouseTabsComponent;
  let fixture: ComponentFixture<DataWarehouseTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataWarehouseTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataWarehouseTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
