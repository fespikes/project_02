import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildDataWarehouseComponent } from './build-data-warehouse.component';

describe('BuildDataWarehouseComponent', () => {
  let component: BuildDataWarehouseComponent;
  let fixture: ComponentFixture<BuildDataWarehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildDataWarehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildDataWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
