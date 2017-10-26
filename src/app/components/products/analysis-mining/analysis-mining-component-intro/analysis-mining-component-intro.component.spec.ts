import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisMiningComponentIntroComponent } from './analysis-mining-component-intro.component';

describe('AnalysisMiningComponentIntroComponent', () => {
  let component: AnalysisMiningComponentIntroComponent;
  let fixture: ComponentFixture<AnalysisMiningComponentIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisMiningComponentIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisMiningComponentIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
