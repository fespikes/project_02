import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgImgUrlDirective } from './bg-img-url.directive';

@Component({
  template: '<img tdcBgImgUrl="nav/service.png">',
})
class TestComponent { }

describe('BgImgUrlDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let image;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent, BgImgUrlDirective ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    image = fixture.debugElement.query(By.directive(BgImgUrlDirective)).nativeElement;
  });

  it(`should set background-image with '/assets/images' prefix`, () => {
    expect(image.style.backgroundImage).toBe('url("/assets/images/nav/service.png")');
  });
});
