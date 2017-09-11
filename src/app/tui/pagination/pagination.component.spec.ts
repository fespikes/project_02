import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TranslatePipeStub } from '../../mock';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ NO_ERRORS_SCHEMA ],
      declarations: [ PaginationComponent, TranslatePipeStub ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate total page when given dataSize and pageSize', () => {
    expect(component.calcTotalPage(100, 10)).toBe(10);
    expect(component.calcTotalPage(101, 10)).toBe(11);
  });

  it('should calculate lowerBound and upperBound when given currentPage and totalPage', () => {
    const totalPage = 9;
    [1, 2, 3].forEach((currentPage) => {
      expect(component.calcBound(currentPage, totalPage)).toEqual({
        lowerBound: 1,
        upperBound: 5,
      });
    });

    [4, 5, 6].forEach((currentPage) => {
      expect(component.calcBound(currentPage, totalPage)).toEqual({
        lowerBound: currentPage - 2,
        upperBound: currentPage + 2,
      });
    });

    [7, 8, 9].forEach((currentPage) => {
      expect(component.calcBound(currentPage, totalPage)).toEqual({
        lowerBound: 5,
        upperBound: 9,
      });
    });
  });

  it('should calculate pages when given lowerBound, upperBound and totalPage', () => {
    expect(component.calcPages(1, 5, 9)).toEqual([1, 2, 3, 4, 5, 'omit', 9]);
    expect(component.calcPages(2, 5, 9)).toEqual([1, 2, 3, 4, 5, 'omit', 9]);
    expect(component.calcPages(3, 5, 9)).toEqual([1, 'omit', 3, 4, 5, 'omit', 9]);
    expect(component.calcPages(6, 8, 9)).toEqual([1, 'omit', 6, 7, 8, 9]);
    expect(component.calcPages(6, 9, 9)).toEqual([1, 'omit', 6, 7, 8, 9]);
  });

  it('should nav to previous page when call prev', () => {
    component.currentPage = 2;
    component.prev();
    expect(component.currentPage).toBe(1);

    component.prev();
    expect(component.currentPage).toBe(1);
  });

  it('should nav to next page when call next', () => {
    component.currentPage = 1;
    component.totalPage = 2;

    component.next();
    expect(component.currentPage).toBe(2);

    component.next();
    expect(component.currentPage).toBe(2);
  });

  it('should set currentPage when call goPage', () => {
    component.totalPage = 3;
    component.goPage(2);
    expect(component.currentPage).toBe(2);
    component.goPage(4);
    expect(component.currentPage).toBe(2);
    component.goPage(0);
    expect(component.currentPage).toBe(2);
  });

  it('should render pages when currentPage is changed', () => {
    spyOn(component, 'triggerPaginationChange').and.callThrough();
    component.totalPage = 2;
    component.currentPage = 2;

    expect(component.triggerPaginationChange).toHaveBeenCalled();
    expect(component.pages).toEqual([1, 2]);
  });

  it('should trigger pagination event when pageSize chages', () => {
    spyOn(component, 'triggerPaginationChange').and.callThrough();
    component.totalData = 22;
    component.pageSize = 10;
    component.pageSizeChange();

    expect(component.pages).toEqual([1, 2, 3]);
    expect(component.triggerPaginationChange).toHaveBeenCalled();
  });

  it('should render pages when input pagination changes', () => {
    spyOn(component, 'renderPages').and.callThrough();
    component.pagination = {
      size: 10,
      page: 2,
      total: 15,
    };

    expect(component.totalPage).toBe(2);
    expect(component.currentPage).toBe(2);
    expect(component.renderPages).toHaveBeenCalled();
    expect(component.pages).toEqual([1, 2]);
  });

  it('should trigger mute pagination event when input pagination changes', fakeAsync(() => {
    spyOn(component, 'triggerPaginationChange').and.callThrough();
    spyOn(component.paginationChange, 'emit');
    component.pagination = {
      size: 10,
      page: 2,
      total: 15,
    };

    tick(101);
    expect(component.triggerPaginationChange).toHaveBeenCalled();
    expect(component.paginationChange.emit).not.toHaveBeenCalled();
  }));

  it('should emit page change event when pagination state are changed', fakeAsync(() => {
    let paginationChangeEvent;
    component.paginationChange.subscribe(e => paginationChangeEvent = e);
    component.totalData = 3;

    component.stateSubject.next({
      currentPage: 1,
      pageSize: 20,
    });
    tick(101);
    expect(paginationChangeEvent).toEqual({
      page: 1,
      size: 20,
      total: 3,
    });

    paginationChangeEvent = null;
    component.stateSubject.next({
      currentPage: 1,
      pageSize: 20,
    });
    tick(101);
    expect(paginationChangeEvent).toBeFalsy();

    component.stateSubject.next({
      currentPage: 2,
      pageSize: 20,
    });
    tick(101);
    expect(paginationChangeEvent).toEqual({
      page: 2,
      size: 20,
      total: 3,
    });
  }));

  it('should render page nodes when given pages', () => {
    component.pages = [1, 'omit'];
    fixture.detectChanges();
    const nodes = fixture.debugElement.query(By.css('.page-nodes'));
    expect(pageNodeAt(nodes, 0).classList).toContain('page-node');
    expect(pageNodeAt(nodes, 1).classList).toContain('page-omit');

    function pageNodeAt(_nodes, idx) {
      return _nodes.children[idx].children[0].nativeElement;
    }
  });
});
