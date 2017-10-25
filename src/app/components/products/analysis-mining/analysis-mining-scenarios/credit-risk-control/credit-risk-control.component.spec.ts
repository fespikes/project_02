import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditRiskControlComponent } from './credit-risk-control.component';

describe('CreditRiskControlComponent', () => {
  let component: CreditRiskControlComponent;
  let fixture: ComponentFixture<CreditRiskControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditRiskControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditRiskControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
