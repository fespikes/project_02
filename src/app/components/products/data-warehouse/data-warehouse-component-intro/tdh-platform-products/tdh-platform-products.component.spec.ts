import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdhPlatformProductsComponent } from './tdh-platform-products.component';

describe('TdhPlatformProductsComponent', () => {
  let component: TdhPlatformProductsComponent;
  let fixture: ComponentFixture<TdhPlatformProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdhPlatformProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdhPlatformProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
