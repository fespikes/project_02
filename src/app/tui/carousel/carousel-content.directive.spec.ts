
import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CarouselContentDirective } from './';

@Component({
  template: `<div tccCarouselContent></div>`,
})
class CarouselContentComponent {
}

describe('CarouselContentDirective', () => {
  let component: CarouselContentComponent;
  let fixture: ComponentFixture<CarouselContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CarouselContentDirective,
        CarouselContentComponent,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = new CarouselContentDirective(fixture);
    expect(directive).toBeTruthy();
  });
});
