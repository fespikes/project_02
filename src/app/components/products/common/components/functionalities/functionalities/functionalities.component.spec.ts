import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalitiesComponent } from './functionalities.component';

describe('FunctionalitiesComponent', () => {
  let component: FunctionalitiesComponent;
  let fixture: ComponentFixture<FunctionalitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionalitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionalitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
