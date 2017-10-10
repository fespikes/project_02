import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaLayoutSimpleComponent } from './ga-layout-simple.component';

describe('GaLayoutSimpleComponent', () => {
  let component: GaLayoutSimpleComponent;
  let fixture: ComponentFixture<GaLayoutSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaLayoutSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaLayoutSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
