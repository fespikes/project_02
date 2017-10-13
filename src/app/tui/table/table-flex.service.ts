import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/Rx';

@Injectable()
export class TableFlexService {
  rows: HTMLElement[] = [];
  flexSubject = new BehaviorSubject<Array<number| string>>(null);

  constructor() {
    this.flexSubject.asObservable()
    .distinctUntilChanged()
    .subscribe((flex) => {
      this.rows.forEach((row) => {
        this.setFlex(row, flex);
      });
    });
  }

  register(element: HTMLElement) {
    this.rows.push(element);
    const flex = this.flexSubject.getValue();
    this.setFlex(element, flex);
  }

  unregister(element: HTMLElement) {
    const idx = this.rows.indexOf(element);
    this.rows.splice(idx, 1);
  }

  setFlex(row: HTMLElement, flex: Array<number| string>) {
    if (!Array.isArray(flex)) {
      return;
    }
    const childNodes: NodeList = row.childNodes;
    let count = 0;
    for (let i = 0; i < childNodes.length; i++) {
      const cell = <HTMLElement> childNodes[i];
      if (this.isTableCell(cell)) {
        this.setFlexCell(cell, flex, count ++);
      }
    }
  }

  setFlexCell(cell: HTMLElement, flex: Array<number| string>, index: number) {
    let flexValue;
    try {
      flexValue = flex[index].toString();
    } catch (err) {
      flexValue = '0';
    }
    cell.style.flex = flexValue;
  }

  isTableCell(cell: HTMLElement) {
    if (cell.nodeType !== 1) {
      return false;
    }
    if (cell.classList.contains('tcc-table-select-column')) {
      return false;
    }
    return true;
  }

}
