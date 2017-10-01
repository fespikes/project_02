import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfAnalysisPlatformComponent } from './self-analysis-platform.component';

describe('SelfAnalysisPlatformComponent', () => {
  let component: SelfAnalysisPlatformComponent;
  let fixture: ComponentFixture<SelfAnalysisPlatformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfAnalysisPlatformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfAnalysisPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
