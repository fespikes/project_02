import { BtnOutlineDirective } from './btn-outline.directive';
import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: '<button tccBtnOutline>button</button>',
})
class BtnComponent {
}

describe('BtnOutlineDirective', () => {
  let component: BtnComponent;
  let fixture: ComponentFixture<BtnComponent>;
  let button: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnComponent, BtnOutlineDirective ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnComponent);
    component = fixture.componentInstance;
    button = fixture.debugElement.query(By.css('button')).nativeElement;
    fixture.detectChanges();
  });

  it('should add .tcc-btn-outline class', () => {
    expect(button.className).toBe('tcc-btn-outline');
  });
});
