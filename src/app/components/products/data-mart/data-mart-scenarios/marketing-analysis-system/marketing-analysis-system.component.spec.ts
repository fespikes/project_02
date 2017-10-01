import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingAnalysisSystemComponent } from './marketing-analysis-system.component';

describe('MarketingAnalysisSystemComponent', () => {
  let component: MarketingAnalysisSystemComponent;
  let fixture: ComponentFixture<MarketingAnalysisSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketingAnalysisSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingAnalysisSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
