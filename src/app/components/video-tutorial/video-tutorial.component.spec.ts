import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTutorialComponent } from './video-tutorial.component';

describe('VideoTutorialComponent', () => {
  let component: VideoTutorialComponent;
  let fixture: ComponentFixture<VideoTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
