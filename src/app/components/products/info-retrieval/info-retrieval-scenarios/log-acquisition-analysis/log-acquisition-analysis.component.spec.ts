import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogAcquisitionAnalysisComponent } from './log-acquisition-analysis.component';

describe('LogAcquisitionAnalysisComponent', () => {
  let component: LogAcquisitionAnalysisComponent;
  let fixture: ComponentFixture<LogAcquisitionAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogAcquisitionAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogAcquisitionAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
