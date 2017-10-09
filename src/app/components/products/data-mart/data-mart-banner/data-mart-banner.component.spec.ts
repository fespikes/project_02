import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMartBannerComponent } from './data-mart-banner.component';

describe('DataMartBannerComponent', () => {
  let component: DataMartBannerComponent;
  let fixture: ComponentFixture<DataMartBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataMartBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataMartBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
