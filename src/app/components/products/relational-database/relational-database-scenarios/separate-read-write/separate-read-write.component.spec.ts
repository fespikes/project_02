import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparateReadWriteComponent } from './separate-read-write.component';

describe('SeparateReadWriteComponent', () => {
  let component: SeparateReadWriteComponent;
  let fixture: ComponentFixture<SeparateReadWriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeparateReadWriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeparateReadWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
