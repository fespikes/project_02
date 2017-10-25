import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisMiningAdvantagesComponent } from './analysis-mining-advantages.component';

describe('AnalysisMiningAdvantagesComponent', () => {
  let component: AnalysisMiningAdvantagesComponent;
  let fixture: ComponentFixture<AnalysisMiningAdvantagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisMiningAdvantagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisMiningAdvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
