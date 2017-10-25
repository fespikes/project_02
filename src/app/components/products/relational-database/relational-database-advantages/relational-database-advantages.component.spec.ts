import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationalDatabaseAdvantagesComponent } from './relational-database-advantages.component';

describe('RelationalDatabaseAdvantagesComponent', () => {
  let component: RelationalDatabaseAdvantagesComponent;
  let fixture: ComponentFixture<RelationalDatabaseAdvantagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelationalDatabaseAdvantagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationalDatabaseAdvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
