import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataWarehouseComponentIntroComponent } from './data-warehouse-component-intro.component';

describe('DataWarehouseComponentIntroComponent', () => {
  let component: DataWarehouseComponentIntroComponent;
  let fixture: ComponentFixture<DataWarehouseComponentIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataWarehouseComponentIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataWarehouseComponentIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
