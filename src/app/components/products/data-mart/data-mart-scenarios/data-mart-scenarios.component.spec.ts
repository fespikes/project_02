import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMartScenariosComponent } from './data-mart-scenarios.component';

describe('DataMartScenariosComponent', () => {
  let component: DataMartScenariosComponent;
  let fixture: ComponentFixture<DataMartScenariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataMartScenariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataMartScenariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
