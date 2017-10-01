import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenariosChildComponent } from './scenarios-child.component';

describe('ScenariosChildComponent', () => {
  let component: ScenariosChildComponent;
  let fixture: ComponentFixture<ScenariosChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenariosChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenariosChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
