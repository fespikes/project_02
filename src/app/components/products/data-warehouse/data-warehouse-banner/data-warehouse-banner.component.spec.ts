import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataWarehouseBannerComponent } from './data-warehouse-banner.component';

describe('DataWarehouseBannerComponent', () => {
  let component: DataWarehouseBannerComponent;
  let fixture: ComponentFixture<DataWarehouseBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataWarehouseBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataWarehouseBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
