import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearViewComponent } from './year-view.component';

describe('YearViewComponent', () => {
  let component: YearViewComponent<any>;
  let fixture: ComponentFixture<YearViewComponent<any>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearViewComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
