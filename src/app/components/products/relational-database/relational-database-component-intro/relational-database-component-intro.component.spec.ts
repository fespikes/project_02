import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationalDatabaseComponentIntroComponent } from './relational-database-component-intro.component';

describe('RelationalDatabaseComponentIntroComponent', () => {
  let component: RelationalDatabaseComponentIntroComponent;
  let fixture: ComponentFixture<RelationalDatabaseComponentIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelationalDatabaseComponentIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationalDatabaseComponentIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
