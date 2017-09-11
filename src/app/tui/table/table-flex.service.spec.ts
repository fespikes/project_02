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
