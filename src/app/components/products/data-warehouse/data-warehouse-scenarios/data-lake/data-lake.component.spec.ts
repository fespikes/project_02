import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataLakeComponent } from './data-lake.component';

describe('DataLakeComponent', () => {
  let component: DataLakeComponent;
  let fixture: ComponentFixture<DataLakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataLakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataLakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
