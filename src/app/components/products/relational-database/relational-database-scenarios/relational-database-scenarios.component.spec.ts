import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationalDatabaseScenariosComponent } from './relational-database-scenarios.component';

describe('RelationalDatabaseScenariosComponent', () => {
  let component: RelationalDatabaseScenariosComponent;
  let fixture: ComponentFixture<RelationalDatabaseScenariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelationalDatabaseScenariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationalDatabaseScenariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
