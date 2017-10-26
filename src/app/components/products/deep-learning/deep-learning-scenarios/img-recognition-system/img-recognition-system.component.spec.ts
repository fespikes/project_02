import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgRecognitionSystemComponent } from './img-recognition-system.component';

describe('ImgRecognitionSystemComponent', () => {
  let component: ImgRecognitionSystemComponent;
  let fixture: ComponentFixture<ImgRecognitionSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgRecognitionSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgRecognitionSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
