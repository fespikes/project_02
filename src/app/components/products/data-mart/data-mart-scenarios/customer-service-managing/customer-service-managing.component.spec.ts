import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerServiceManagingComponent } from './customer-service-managing.component';

describe('CustomerServiceManagingComponent', () => {
  let component: CustomerServiceManagingComponent;
  let fixture: ComponentFixture<CustomerServiceManagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerServiceManagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerServiceManagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
