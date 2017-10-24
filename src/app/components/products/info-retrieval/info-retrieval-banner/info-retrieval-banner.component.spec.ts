import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRetrievalBannerComponent } from './info-retrieval-banner.component';

describe('InfoRetrievalBannerComponent', () => {
  let component: InfoRetrievalBannerComponent;
  let fixture: ComponentFixture<InfoRetrievalBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoRetrievalBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoRetrievalBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
