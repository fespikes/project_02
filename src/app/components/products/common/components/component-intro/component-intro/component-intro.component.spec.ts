import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentIntroComponent } from './component-intro.component';

describe('ComponentIntroComponent', () => {
  let component: ComponentIntroComponent;
  let fixture: ComponentFixture<ComponentIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
