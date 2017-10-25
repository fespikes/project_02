import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialTransactionSystemComponent } from './financial-transaction-system.component';

describe('FinancialTransactionSystemComponent', () => {
  let component: FinancialTransactionSystemComponent;
  let fixture: ComponentFixture<FinancialTransactionSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialTransactionSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialTransactionSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
