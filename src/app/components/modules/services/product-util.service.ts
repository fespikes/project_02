import { Injectable } from '@angular/core';

@Injectable()
export class ProductUtilService {
  constructor() {

  }

  getModuleType(url): string {
    let array = url.split('/');
    let type = array[array.length - 2];
    return type;
  }

  refreshListState(list, module): any {
    let attrList = Object.keys(list);
    attrList.map(attr => {
      list[attr].map(item => {
        if(item.name === module) {
          item.selected = true;
        }else {
          item.selected = false;
        }
      });
    });
    return list;
  }
}
