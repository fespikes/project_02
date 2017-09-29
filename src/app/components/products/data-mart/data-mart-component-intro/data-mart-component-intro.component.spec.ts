import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMartComponentIntroComponent } from './data-mart-component-intro.component';

describe('DataMartComponentIntroComponent', () => {
  let component: DataMartComponentIntroComponent;
  let fixture: ComponentFixture<DataMartComponentIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataMartComponentIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataMartComponentIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
