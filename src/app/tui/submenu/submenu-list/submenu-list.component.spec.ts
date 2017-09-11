import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

import { TranslatePipeStub } from '../../../mock';

import { SubmenuListComponent } from './submenu-list.component';
import { SubmenuComponent } from '../submenu.component';

describe('SubmenuListComponent', () => {
  let component: SubmenuListComponent;
  let fixture: ComponentFixture<SubmenuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ SubmenuListComponent, TranslatePipeStub ],
      providers: [
        {
          provide: Router,
          useValue: {
            isActive() {
              return false;
            },
            navigateByUrl() {},
          },
        },
        {
          provide: SubmenuComponent,
          useValue: {},
        },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmenuListComponent);
    component = fixture.componentInstance;
    component.items = [
      {
        name: '1',
        url: '/1',
        children: [
          {
            name: '11',
            url: '/11',
          },
        ],
      },
      {
        name: '2',
        url: '/2',
      },
    ];
    fixture.detectChanges();
  });

  it('should render a list of two', () => {
    const items = fixture.debugElement.queryAll(By.css('dd'));
    expect(items.length).toBe(2);
  });

  it('should navigate to url when click an item without child', () => {
    spyOn(component, 'navigate');
    const items = fixture.debugElement.queryAll(By.css('dd'));
    const clickable = items[1].query(By.css('a'));
    const event = new Event('click');
    clickable.triggerEventHandler('click', event);

    expect(component.navigate).toHaveBeenCalled();
  });

  it('should expand item when click an item with children', () => {
    let itemChildren = fixture.debugElement.query(By.css('.tcc-submenu-children'));
    expect(itemChildren).toBeFalsy();

    const itemWithChildren = fixture.debugElement.query(By.css('dd'));
    const clickable = itemWithChildren.query(By.css('a'));
    const event = new Event('click');
    clickable.triggerEventHandler('click', event);
    fixture.detectChanges();
    itemChildren = fixture.debugElement.query(By.css('.tcc-submenu-children'));

    expect(component.items[0].childrenOpen).toBeTruthy();
    expect(itemChildren).toBeTruthy();
  });
});
