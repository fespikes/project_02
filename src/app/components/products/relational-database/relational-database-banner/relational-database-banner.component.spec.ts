import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationalDatabaseBannerComponent } from './relational-database-banner.component';

describe('RelationalDatabaseBannerComponent', () => {
  let component: RelationalDatabaseBannerComponent;
  let fixture: ComponentFixture<RelationalDatabaseBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelationalDatabaseBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationalDatabaseBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
