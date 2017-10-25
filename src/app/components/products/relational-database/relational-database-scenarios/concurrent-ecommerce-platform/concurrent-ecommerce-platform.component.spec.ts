import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcurrentEcommercePlatformComponent } from './concurrent-ecommerce-platform.component';

describe('ConcurrentEcommercePlatformComponent', () => {
  let component: ConcurrentEcommercePlatformComponent;
  let fixture: ComponentFixture<ConcurrentEcommercePlatformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcurrentEcommercePlatformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcurrentEcommercePlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
