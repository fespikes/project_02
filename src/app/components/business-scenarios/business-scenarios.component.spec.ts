import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessScenariosComponent } from './business-scenarios.component';

describe('BusinessScenarioComponent', () => {
  let component: BusinessScenariosComponent;
  let fixture: ComponentFixture<BusinessScenariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessScenariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessScenariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
