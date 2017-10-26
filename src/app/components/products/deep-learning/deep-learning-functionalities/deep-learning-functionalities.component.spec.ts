import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepLearningFunctionalitiesComponent } from './deep-learning-functionalities.component';

describe('DeepLearningFunctionalitiesComponent', () => {
  let component: DeepLearningFunctionalitiesComponent;
  let fixture: ComponentFixture<DeepLearningFunctionalitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeepLearningFunctionalitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepLearningFunctionalitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
