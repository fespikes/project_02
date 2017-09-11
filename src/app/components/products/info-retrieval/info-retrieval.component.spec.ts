import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRetrievalComponent } from './info-retrieval.component';

describe('InfoRetrievalComponent', () => {
  let component: InfoRetrievalComponent;
  let fixture: ComponentFixture<InfoRetrievalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoRetrievalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoRetrievalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
