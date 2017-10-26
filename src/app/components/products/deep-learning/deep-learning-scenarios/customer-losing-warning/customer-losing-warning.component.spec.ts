import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerLosingWarningComponent } from './customer-losing-warning.component';

describe('CustomerLosingWarningComponent', () => {
  let component: CustomerLosingWarningComponent;
  let fixture: ComponentFixture<CustomerLosingWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerLosingWarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerLosingWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
