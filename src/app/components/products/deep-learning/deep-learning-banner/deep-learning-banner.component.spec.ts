import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepLearningBannerComponent } from './deep-learning-banner.component';

describe('DeepLearningBannerComponent', () => {
  let component: DeepLearningBannerComponent;
  let fixture: ComponentFixture<DeepLearningBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeepLearningBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepLearningBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
