import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
  RadioGroupComponent,
  RadioItemComponent,
} from '..';

@Component({
  template: `
    <tcc-radio-group>
      <tcc-radio-item></tcc-radio-item>
    </tcc-radio-group>
  `,
})
class TestComponent {}

describe('RadioItemComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ FormsModule ],
      declarations: [
        RadioGroupComponent,
        RadioItemComponent,
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
