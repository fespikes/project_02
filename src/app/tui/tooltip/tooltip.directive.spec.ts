import { TooltipDirective } from './tooltip.directive';
import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: '<span [tccTooltip]="tooltip" [tccTooltipPos]="pos"></span>',
})
class TooltipComponent {
  tooltip: string;
  pos: string;
}

describe('TooltipDirective', () => {
  let component: TooltipComponent;
  let fixture: ComponentFixture<TooltipComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipComponent, TooltipDirective ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.query(By.css('span')).nativeElement;
    fixture.detectChanges();
  });

  it('should do nothing if tooltip and pos are undefined', () => {
    expect(element.getAttribute('data-balloon')).toBeNull();
    expect(element.getAttribute('data-balloon-pos')).toBeNull();
  });

  it('should add data-balloon and data-balloon-pos attributes', () => {
    component.tooltip = 'hello';
    component.pos = 'top';
    fixture.detectChanges();
    expect(element.getAttribute('data-balloon')).toBe('hello');
    expect(element.getAttribute('data-balloon-pos')).toBe('top');
  });
});
