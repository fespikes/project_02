import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisMiningComponent } from './analysis-mining.component';

describe('AnalysisMiningComponent', () => {
  let component: AnalysisMiningComponent;
  let fixture: ComponentFixture<AnalysisMiningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisMiningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisMiningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
