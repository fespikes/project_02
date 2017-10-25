import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisMiningBannerComponent } from './analysis-mining-banner.component';

describe('AnalysisMiningBannerComponent', () => {
  let component: AnalysisMiningBannerComponent;
  let fixture: ComponentFixture<AnalysisMiningBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisMiningBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisMiningBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
