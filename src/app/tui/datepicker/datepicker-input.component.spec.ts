import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerInputComponent } from './datepicker-input.component';

describe('DatepickerInputComponent', () => {
  let component: DatepickerInputComponent<any>;
  let fixture: ComponentFixture<DatepickerInputComponent<any>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerInputComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
