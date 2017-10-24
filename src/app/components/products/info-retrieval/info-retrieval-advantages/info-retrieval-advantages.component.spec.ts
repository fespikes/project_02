import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRetrievalAdvantagesComponent } from './info-retrieval-advantages.component';

describe('InfoRetrievalAdvantagesComponent', () => {
  let component: InfoRetrievalAdvantagesComponent;
  let fixture: ComponentFixture<InfoRetrievalAdvantagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoRetrievalAdvantagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoRetrievalAdvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
