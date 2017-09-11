import { BtnDirective } from './btn.directive';
import { Input, Component, SimpleChanges, SimpleChange } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: '<button [tccBtn]="color">btn</button>',
})
class ButtonComponent {
  color: string;
}

@Component({
  template: '<button [tccBtn]="color" size="sm">btn</button>',
})
class SmButtonComponent {
  color: string;
}

describe('BtnDirective', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let button: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonComponent, BtnDirective, SmButtonComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    button = fixture.debugElement.query(By.css('button')).nativeElement;
    fixture.detectChanges();
  });

  it('should render button', () => {
    expect(button).toBeDefined();
  });

  it('should have .tcc-btn class', () => {
    expect(button.classList.contains('tcc-btn')).toBeTruthy();
  });

  it('should set color class', () => {
    component.color = 'danger';
    fixture.detectChanges();
    expect(button.classList.contains('tcc-btn-danger')).toBeTruthy();
  });

  it('should set btn md size on creation', () => {
    expect(button.classList.contains('tcc-btn-md')).toBeTruthy();
  });

  it('should override size class when size input is valid', () => {
    fixture = TestBed.createComponent(SmButtonComponent);
    component = fixture.componentInstance;
    button = fixture.debugElement.query(By.css('button')).nativeElement;
    fixture.detectChanges();
    expect(button.classList.contains('tcc-btn-sm')).toBeTruthy();
    expect(button.classList.contains('tcc-btn-md')).toBeFalsy();
  });
});
