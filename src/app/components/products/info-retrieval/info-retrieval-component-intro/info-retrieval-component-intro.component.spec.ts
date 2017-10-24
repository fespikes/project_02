import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRetrievalComponentIntroComponent } from './info-retrieval-component-intro.component';

describe('InfoRetrievalComponentIntroComponent', () => {
  let component: InfoRetrievalComponentIntroComponent;
  let fixture: ComponentFixture<InfoRetrievalComponentIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoRetrievalComponentIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoRetrievalComponentIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
