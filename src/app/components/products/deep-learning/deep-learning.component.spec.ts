import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepLearningComponent } from './deep-learning.component';

describe('DeepLearningComponent', () => {
  let component: DeepLearningComponent;
  let fixture: ComponentFixture<DeepLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeepLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
