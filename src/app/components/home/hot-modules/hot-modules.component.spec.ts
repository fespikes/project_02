import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotModulesComponent } from './hot-modules.component';

describe('HotModulesComponent', () => {
  let component: HotModulesComponent;
  let fixture: ComponentFixture<HotModulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotModulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
