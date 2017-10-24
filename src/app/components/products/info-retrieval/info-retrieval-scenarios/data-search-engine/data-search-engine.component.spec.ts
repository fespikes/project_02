import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSearchEngineComponent } from './data-search-engine.component';

describe('DataSearchEngineComponent', () => {
  let component: DataSearchEngineComponent;
  let fixture: ComponentFixture<DataSearchEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataSearchEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSearchEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
