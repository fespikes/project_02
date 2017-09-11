import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationalDatabaseComponent } from './relational-database.component';

describe('RelationalDatabaseComponent', () => {
  let component: RelationalDatabaseComponent;
  let fixture: ComponentFixture<RelationalDatabaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelationalDatabaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationalDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
