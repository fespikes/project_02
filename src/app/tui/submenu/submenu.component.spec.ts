import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslatePipeStub } from '../../mock';
import { SubmenuService } from './submenu.service';
import { SubmenuComponent } from './submenu.component';

class SubmenuServiceStub {
  notifyToggle() {}
}

describe('SubmenuComponent', () => {
  let component: SubmenuComponent;
  let fixture: ComponentFixture<SubmenuComponent>;
  let service: SubmenuServiceStub;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ NO_ERRORS_SCHEMA ],
      declarations: [
        SubmenuComponent,
        TranslatePipeStub,
      ],
      providers: [
        {
          provide: SubmenuService,
          useClass: SubmenuServiceStub,
        },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.get(SubmenuService);

    fixture = TestBed.createComponent(SubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should toggle component when clicking head', () => {
    spyOn(service, 'notifyToggle');

    expect(fixture.debugElement.classes['tcc-submenu-collapsed']).toBe(false);
    component.toggle();
    fixture.detectChanges();
    expect(fixture.debugElement.classes['tcc-submenu-collapsed']).toBe(true);
    expect(service.notifyToggle).toHaveBeenCalled();
    component.toggle();
    fixture.detectChanges();
    expect(fixture.debugElement.classes['tcc-submenu-collapsed']).toBe(false);
    expect(service.notifyToggle).toHaveBeenCalledTimes(2);
  });
});
