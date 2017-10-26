import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FraudCheckComponent } from './fraud-check.component';

describe('FraudCheckComponent', () => {
  let component: FraudCheckComponent;
  let fixture: ComponentFixture<FraudCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraudCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FraudCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
