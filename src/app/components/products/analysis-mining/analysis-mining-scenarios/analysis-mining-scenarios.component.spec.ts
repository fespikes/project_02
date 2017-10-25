import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisMiningScenariosComponent } from './analysis-mining-scenarios.component';

describe('AnalysisMiningScenariosComponent', () => {
  let component: AnalysisMiningScenariosComponent;
  let fixture: ComponentFixture<AnalysisMiningScenariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisMiningScenariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisMiningScenariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
