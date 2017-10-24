import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRetrievalScenariosComponent } from './info-retrieval-scenarios.component';

describe('InfoRetrievalScenariosComponent', () => {
  let component: InfoRetrievalScenariosComponent;
  let fixture: ComponentFixture<InfoRetrievalScenariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoRetrievalScenariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoRetrievalScenariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
