import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMartComponent } from './data-mart.component';

describe('DataMartComponent', () => {
  let component: DataMartComponent;
  let fixture: ComponentFixture<DataMartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataMartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataMartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
