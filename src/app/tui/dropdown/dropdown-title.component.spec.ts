import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownTitleComponent } from './dropdown-title.component';

describe('DropdownTitleComponent', () => {
  let component: DropdownTitleComponent;
  let fixture: ComponentFixture<DropdownTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownTitleComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
