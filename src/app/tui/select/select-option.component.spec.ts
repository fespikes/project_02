import { Component, ElementRef } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TranslatePipeStub } from '../../mock';
import { SelectOptionComponent } from './select-option.component';
import { SelectComponent } from './select.component';

@Component({
  template: `
  <tcc-select>
    <tcc-select-option [value]="1"></tcc-select-option>
    <tcc-select-option [value]="2"></tcc-select-option>
  </tcc-select>
  `,
})
class TestComponent {
  options = ['a', 'b'];
}

describe('SelectOptionComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let element: HTMLElement;
  let selectComponent: SelectComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TranslatePipeStub,
        SelectOptionComponent,
        SelectComponent,
        TestComponent,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
    selectComponent = fixture.debugElement.query(By.directive(SelectComponent)).componentInstance;
    fixture.detectChanges();
  });

  it('should add tcc-select-option class to host element', () => {
    selectComponent.optionsOpen = true;
    fixture.detectChanges();
    const selectOption = fixture.debugElement.query(By.directive(SelectOptionComponent)).nativeElement;
    expect(selectOption.classList).toContain('tcc-select-option');
  });
});
