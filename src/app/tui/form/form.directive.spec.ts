import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TranslatePipeStub } from '../../mock';

import { FormDirective } from './form.directive';

@Component({
  template: `
    <div tccForm labelFlex="1" inputFlex="2">
    </div>
  `,
})
class TestComponent {}

describe('FormDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let element: HTMLElement;
  let form: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent, FormDirective, TranslatePipeStub],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
    form = fixture.debugElement.query(By.directive(FormDirective)).nativeElement;
    fixture.detectChanges();
  });

  it('should add tcc-form class to host element', () => {
    expect(form.classList.contains('tcc-form')).toBeTruthy();
  });
});
