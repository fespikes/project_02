import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeComputationBannerComponent } from './realtime-computation-banner.component';

describe('RealtimeComputationBannerComponent', () => {
  let component: RealtimeComputationBannerComponent;
  let fixture: ComponentFixture<RealtimeComputationBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtimeComputationBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtimeComputationBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
