import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeComputationComponentIntroComponent } from './realtime-computation-component-intro.component';

describe('RealtimeComputationComponentIntroComponent', () => {
  let component: RealtimeComputationComponentIntroComponent;
  let fixture: ComponentFixture<RealtimeComputationComponentIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtimeComputationComponentIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtimeComputationComponentIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
