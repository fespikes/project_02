import { TestBed, inject } from '@angular/core/testing';

import { TableFlexService } from './table-flex.service';

describe('TableFlexService', () => {
  const element: HTMLElement = document.createElement('div');

  function checkFlex(el: HTMLElement, expectedValue: string) {
    expect(el.style.flex).toBe(expectedValue);
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableFlexService],
    });
  });

  it('should return valid table cell', inject([TableFlexService], (service: TableFlexService) => {
    element.classList.add('tcc-table-select-column');
    expect(service.isTableCell(element)).toBe(false);
  }));

  it('should register and unregister row', inject([TableFlexService], (service: TableFlexService) => {
    spyOn(service, 'setFlex');
    service.register(element);
    expect(service.setFlex).toHaveBeenCalled();
    expect(service.rows).toEqual([element]);

    service.unregister(element);
    expect(service.rows).toEqual([]);
  }));

  it('should reset flex when flex changes', inject([TableFlexService], (service: TableFlexService) => {
    service.register(element);
    spyOn(service, 'setFlex');
    expect(service.setFlex).not.toHaveBeenCalled();
    service.flexSubject.next([]);

    expect(service.setFlex).toHaveBeenCalled();
  }));

  describe('setFlex', () => {
    it('should set flex style of child element', inject([TableFlexService], (service: TableFlexService) => {
      element.innerHTML = `
        <div class="a"></div>
        <div class="b"></div>
      `;
      service.setFlex(element, [1, '2 1 0%']);
      checkFlex((<HTMLElement>element.querySelector('.a')), '1 1 0%');
      checkFlex((<HTMLElement>element.querySelector('.b')), '2 1 0%');
    }));

    it('should ignore .tcc-table-select-column child element', inject([TableFlexService], (service: TableFlexService) => {
      element.innerHTML = `
        <div class="tcc-table-select-column"></div>
        <div class="a"></div>
        <div class="b"></div>
      `;
      service.setFlex(element, [1, 2]);
      checkFlex((<HTMLElement>element.querySelector('.tcc-table-select-column')), '');
      checkFlex((<HTMLElement>element.querySelector('.a')), '1 1 0%');
      checkFlex((<HTMLElement>element.querySelector('.b')), '2 1 0%');
    }));

    it('should set flex style of extra child element to 0', inject([TableFlexService], (service: TableFlexService) => {
      element.innerHTML = `
        <div class="a"></div>
        <div class="b"></div>
        <div class="extra"></div>
      `;
      service.setFlex(element, [1, 2]);
      checkFlex((<HTMLElement>element.querySelector('.a')), '1 1 0%');
      checkFlex((<HTMLElement>element.querySelector('.b')), '2 1 0%');
      checkFlex((<HTMLElement>element.querySelector('.extra')), '0 1 0%');
    }));

    it('should ignore invalid flex', inject([TableFlexService], (service: TableFlexService) => {
      element.innerHTML = `
        <div class="a"></div>
        <div class="b"></div>
      `;
      service.setFlex(element, undefined);
      checkFlex((<HTMLElement>element.querySelector('.a')), '');
      checkFlex((<HTMLElement>element.querySelector('.b')), '');
    }));
  });
});
