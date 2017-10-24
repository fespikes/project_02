import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRetrievalTabsComponent } from './info-retrieval-tabs.component';

describe('InfoRetrievalTabsComponent', () => {
  let component: InfoRetrievalTabsComponent;
  let fixture: ComponentFixture<InfoRetrievalTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoRetrievalTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoRetrievalTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
