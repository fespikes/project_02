import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialRiskManagementComponent } from './financial-risk-management.component';

describe('FinancialRiskManagementComponent', () => {
  let component: FinancialRiskManagementComponent;
  let fixture: ComponentFixture<FinancialRiskManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialRiskManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialRiskManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
