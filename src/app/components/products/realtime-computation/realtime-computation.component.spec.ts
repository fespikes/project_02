import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeComputationComponent } from './realtime-computation.component';

describe('RealtimeComputationComponent', () => {
  let component: RealtimeComputationComponent;
  let fixture: ComponentFixture<RealtimeComputationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtimeComputationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtimeComputationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
