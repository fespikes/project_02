import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepLearningScenariosComponent } from './deep-learning-scenarios.component';

describe('DeepLearningScenariosComponent', () => {
  let component: DeepLearningScenariosComponent;
  let fixture: ComponentFixture<DeepLearningScenariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeepLearningScenariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepLearningScenariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
