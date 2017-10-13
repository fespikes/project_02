import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaLayoutVerticalComponent } from './ga-layout-vertical.component';

describe('GaLayoutVerticalComponent', () => {
  let component: GaLayoutVerticalComponent;
  let fixture: ComponentFixture<GaLayoutVerticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaLayoutVerticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaLayoutVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
