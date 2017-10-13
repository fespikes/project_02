import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudSubmenuComponent } from './cloud-submenu.component';

describe('CloudSubmenuComponent', () => {
  let component: CloudSubmenuComponent;
  let fixture: ComponentFixture<CloudSubmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudSubmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
