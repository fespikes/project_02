import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseExplanationComponent } from './expense-explanation.component';

describe('ExpenseExplanationComponent', () => {
  let component: ExpenseExplanationComponent;
  let fixture: ComponentFixture<ExpenseExplanationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseExplanationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseExplanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
