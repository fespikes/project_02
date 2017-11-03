import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataWarehouseFunctionalitiesComponent } from './data-warehouse-functionalities.component';

describe('DataWarehouseFunctionalitiesComponent', () => {
  let component: DataWarehouseFunctionalitiesComponent;
  let fixture: ComponentFixture<DataWarehouseFunctionalitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataWarehouseFunctionalitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataWarehouseFunctionalitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
