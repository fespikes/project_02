import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataWarehouseAdvantagesComponent } from './data-warehouse-advantages.component';

describe('DataWarehouseAdvantagesComponent', () => {
  let component: DataWarehouseAdvantagesComponent;
  let fixture: ComponentFixture<DataWarehouseAdvantagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataWarehouseAdvantagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataWarehouseAdvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
