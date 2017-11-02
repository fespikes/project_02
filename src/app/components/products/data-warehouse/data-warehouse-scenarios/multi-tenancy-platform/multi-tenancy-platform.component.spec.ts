import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiTenancyPlatformComponent } from './multi-tenancy-platform.component';

describe('MultiTenancyPlatformComponent', () => {
  let component: MultiTenancyPlatformComponent;
  let fixture: ComponentFixture<MultiTenancyPlatformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiTenancyPlatformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiTenancyPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
