import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisMiningFunctionalitiesComponent } from './analysis-mining-functionalities.component';

describe('AnalysisMiningFunctionalitiesComponent', () => {
  let component: AnalysisMiningFunctionalitiesComponent;
  let fixture: ComponentFixture<AnalysisMiningFunctionalitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisMiningFunctionalitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisMiningFunctionalitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
