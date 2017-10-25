import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationalDatabaseTabsComponent } from './relational-database-tabs.component';

describe('RelationalDatabaseTabsComponent', () => {
  let component: RelationalDatabaseTabsComponent;
  let fixture: ComponentFixture<RelationalDatabaseTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelationalDatabaseTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationalDatabaseTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
