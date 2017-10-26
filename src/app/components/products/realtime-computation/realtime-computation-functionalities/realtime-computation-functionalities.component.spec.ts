import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeComputationFunctionalitiesComponent } from './realtime-computation-functionalities.component';

describe('RealtimeComputationFunctionalitiesComponent', () => {
  let component: RealtimeComputationFunctionalitiesComponent;
  let fixture: ComponentFixture<RealtimeComputationFunctionalitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtimeComputationFunctionalitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtimeComputationFunctionalitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
