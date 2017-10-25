import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeComputationAdvantagesComponent } from './realtime-computation-advantages.component';

describe('RealtimeComputationAdvantagesComponent', () => {
  let component: RealtimeComputationAdvantagesComponent;
  let fixture: ComponentFixture<RealtimeComputationAdvantagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtimeComputationAdvantagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtimeComputationAdvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
