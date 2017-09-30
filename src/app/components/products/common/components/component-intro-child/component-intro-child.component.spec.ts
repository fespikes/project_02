import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentIntroChildComponent } from './component-intro-child.component';

describe('ComponentIntroChildComponent', () => {
  let component: ComponentIntroChildComponent;
  let fixture: ComponentFixture<ComponentIntroChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentIntroChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentIntroChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
