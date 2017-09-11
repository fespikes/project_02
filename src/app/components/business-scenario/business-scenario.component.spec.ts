import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessScenarioComponent } from './business-scenario.component';

describe('BusinessScenarioComponent', () => {
  let component: BusinessScenarioComponent;
  let fixture: ComponentFixture<BusinessScenarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessScenarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
