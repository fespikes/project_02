import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaTableIdComponent } from './ga-table-id.component';

describe('GaTableIdComponent', () => {
  let component: GaTableIdComponent;
  let fixture: ComponentFixture<GaTableIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaTableIdComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaTableIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
