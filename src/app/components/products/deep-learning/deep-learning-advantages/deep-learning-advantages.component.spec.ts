import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepLearningAdvantagesComponent } from './deep-learning-advantages.component';

describe('DeepLearningAdvantagesComponent', () => {
  let component: DeepLearningAdvantagesComponent;
  let fixture: ComponentFixture<DeepLearningAdvantagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeepLearningAdvantagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepLearningAdvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
