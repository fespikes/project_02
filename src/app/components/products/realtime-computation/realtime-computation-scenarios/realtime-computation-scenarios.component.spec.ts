import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeComputationScenariosComponent } from './realtime-computation-scenarios.component';

describe('RealtimeComputationScenariosComponent', () => {
  let component: RealtimeComputationScenariosComponent;
  let fixture: ComponentFixture<RealtimeComputationScenariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtimeComputationScenariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtimeComputationScenariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
