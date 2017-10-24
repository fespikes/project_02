import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRetrievalFunctionalitiesComponent } from './info-retrieval-functionalities.component';

describe('InfoRetrievalFunctionalitiesComponent', () => {
  let component: InfoRetrievalFunctionalitiesComponent;
  let fixture: ComponentFixture<InfoRetrievalFunctionalitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoRetrievalFunctionalitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoRetrievalFunctionalitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
