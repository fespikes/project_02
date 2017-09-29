import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheNewsComponent } from './the-news.component';

describe('TheNewsComponent', () => {
  let component: TheNewsComponent;
  let fixture: ComponentFixture<TheNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
