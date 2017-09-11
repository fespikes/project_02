import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
  CheckboxGroupComponent,
  CheckboxItemComponent,
} from '..';

@Component({
  template: `
    <tcc-checkbox-group>
      <tcc-checkbox-item></tcc-checkbox-item>
    </tcc-checkbox-group>
  `,
})
class TestComponent {}

describe('CheckboxItemComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ FormsModule ],
      declarations: [
        CheckboxGroupComponent,
        CheckboxItemComponent,
        TestComponent,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
