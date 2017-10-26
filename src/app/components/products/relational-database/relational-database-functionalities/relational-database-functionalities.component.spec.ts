import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationalDatabaseFunctionalitiesComponent } from './relational-database-functionalities.component';

describe('RelationalDatabaseFunctionalitiesComponent', () => {
  let component: RelationalDatabaseFunctionalitiesComponent;
  let fixture: ComponentFixture<RelationalDatabaseFunctionalitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelationalDatabaseFunctionalitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationalDatabaseFunctionalitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
