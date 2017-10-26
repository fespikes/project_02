import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeComputationTabsComponent } from './realtime-computation-tabs.component';

describe('RealtimeComputationTabsComponent', () => {
  let component: RealtimeComputationTabsComponent;
  let fixture: ComponentFixture<RealtimeComputationTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtimeComputationTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtimeComputationTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
