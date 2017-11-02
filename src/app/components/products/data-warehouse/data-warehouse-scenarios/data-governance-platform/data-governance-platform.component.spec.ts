import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGovernancePlatformComponent } from './data-governance-platform.component';

describe('DataGovernancePlatformComponent', () => {
  let component: DataGovernancePlatformComponent;
  let fixture: ComponentFixture<DataGovernancePlatformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataGovernancePlatformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataGovernancePlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
