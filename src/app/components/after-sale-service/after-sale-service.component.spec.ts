import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterSaleServiceComponent } from './after-sale-service.component';

describe('AfterSaleServiceComponent', () => {
  let component: AfterSaleServiceComponent;
  let fixture: ComponentFixture<AfterSaleServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterSaleServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterSaleServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
