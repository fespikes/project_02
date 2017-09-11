import { IconDirective } from './icon.directive';
import { Input, Component, SimpleChanges, SimpleChange } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'tcc-icon',
  template: '<svg [tccIcon]="icon" [color]="color" [size]="size"></svg>',
})
class IconComponent {
  icon: string;
  color: string;
  size: string;
}

describe('IconDirective', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;
  let svg: SVGUseElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconComponent, IconDirective ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
    svg = fixture.debugElement.query(By.directive(IconDirective)).nativeElement;
    component.icon = 'add';
    fixture.detectChanges();
  });

  it('should render use element', () => {
    expect(svg.firstElementChild.tagName.toLowerCase()).toBe('use');
    expect(svg.firstElementChild.getAttribute('xlink:href')).toBe('#add');
  });

  it('should change icon', () => {
    component.icon = 'loading';
    fixture.detectChanges();
    expect(svg.firstElementChild.getAttribute('xlink:href')).toBe('#loading');
  });

  it('should set color class', () => {
    ['danger', 'primary', 'default', 'warning', 'inverse', 'white'].forEach((color) => {
      component.color = color;
      fixture.detectChanges();
      expect(svg.firstElementChild.classList.contains(`tcc-icon-${color}`)).toBeTruthy();
    });
  });

  it('should set component dimension', () => {
    function checkSvgDimension(size) {
      fixture.detectChanges();
      expect(svg.style.width).toBe(size);
      expect(svg.style.height).toBe(size);
    }
    component.size = 'sm';
    checkSvgDimension('12px');
    component.size = 'md';
    checkSvgDimension('16px');
    component.size = 'lg';
    checkSvgDimension('24px');
  });
});
