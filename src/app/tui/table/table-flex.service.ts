import { Injectable } from '@angular/core';

@Injectable()
export class TableFlexService {

  constructor() { }

  setFlex(element: HTMLElement, flex: (string|number)[]) {
    if (!Array.isArray(flex)) {
      return;
    }
    const childNodes: NodeList = element.childNodes;
    let count = 0;
    for (let i = 0; i < childNodes.length; i++) {
      const cell = <HTMLElement> childNodes[i];
      if (cell.nodeType !== 1) {
        continue;
      }
      if (cell.classList.contains('tcc-table-select-column')) {
        continue;
      }
      let flexValue;
      try {
        flexValue = flex[count++].toString();
      } catch (err) {
        flexValue = '0';
      }
      cell.style.flex = flexValue;
    }
  }

}
