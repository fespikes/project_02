import { Directive, Input, HostBinding, Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TranslatePipeStub } from '../../mock';

import { FormItemComponent } from './form-item.component';
import { FormDirective } from './form.directive';

@Component({
  template: `
    <div tccForm labelFlex="2" inputFlex="3">
      <tcc-form-item></tcc-form-item>
    </div>
  `,
})
class TestComponent {}

describe('FormItemComponent', () => {
  let component: FormItemComponent;
  let fixture: ComponentFixture<FormItemComponent>;
  let element: HTMLElement;
  let itemLabel: HTMLElement;
  let itemBody: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent, FormItemComponent, TranslatePipeStub, FormDirective ],
      providers: [ FormDirective ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormItemComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
    itemLabel = fixture.debugElement.query(By.css('.form-label')).nativeElement;
    itemBody = fixture.debugElement.query(By.css('.tcc-form-item-body')).nativeElement;
    fixture.detectChanges();
  });

  it('should add tcc-form-item class to host element', () => {
    expect(element.classList.contains('tcc-form-item')).toBeTruthy();
  });

  it('should set flex style for itemLabel and itemBody', () => {
    expect(itemLabel['style']['flex']).toBe('');
    expect(itemBody['style']['flex']).toBe('');
    component.labelFlex = 1;
    component.inputFlex = 2;
    fixture.detectChanges();
    expect(itemLabel['style']['flex']).toBe('1 1 0%');
    expect(itemBody['style']['flex']).toBe('2 1 0%');
  });

  it('should accept label text input', () => {
    component.label = 'hello';
    fixture.detectChanges();
    expect(itemLabel.textContent.trim()).toBe('hello');
  });

  it('should set flex style from host form', () => {
    const testFixture = TestBed.createComponent(TestComponent);
    const testComponent = testFixture.componentInstance;
    itemLabel = testFixture.debugElement.query(By.css('.form-label')).nativeElement;
    itemBody = testFixture.debugElement.query(By.css('.tcc-form-item-body')).nativeElement;

    testFixture.detectChanges();
    expect(itemLabel['style']['flex']).toBe('2 1 0%');
    expect(itemBody['style']['flex']).toBe('3 1 0%');
  });
});
