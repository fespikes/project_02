import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepLearningTabsComponent } from './deep-learning-tabs.component';

describe('DeepLearningTabsComponent', () => {
  let component: DeepLearningTabsComponent;
  let fixture: ComponentFixture<DeepLearningTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeepLearningTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepLearningTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
