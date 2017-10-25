import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisMiningTabsComponent } from './analysis-mining-tabs.component';

describe('AnalysisMiningTabsComponent', () => {
  let component: AnalysisMiningTabsComponent;
  let fixture: ComponentFixture<AnalysisMiningTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisMiningTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisMiningTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
