import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentsSecurityWarningComponent } from './equipments-security-warning.component';

describe('EquipmentsSecurityWarningComponent', () => {
  let component: EquipmentsSecurityWarningComponent;
  let fixture: ComponentFixture<EquipmentsSecurityWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentsSecurityWarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentsSecurityWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
