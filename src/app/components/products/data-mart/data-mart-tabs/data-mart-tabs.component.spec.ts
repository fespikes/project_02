import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMartTabsComponent } from './data-mart-tabs.component';

describe('DataMartTabsComponent', () => {
  let component: DataMartTabsComponent;
  let fixture: ComponentFixture<DataMartTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataMartTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataMartTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
