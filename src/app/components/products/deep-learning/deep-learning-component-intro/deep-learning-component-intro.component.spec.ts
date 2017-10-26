import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepLearningComponentIntroComponent } from './deep-learning-component-intro.component';

describe('DeepLearningComponentIntroComponent', () => {
  let component: DeepLearningComponentIntroComponent;
  let fixture: ComponentFixture<DeepLearningComponentIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeepLearningComponentIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepLearningComponentIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
