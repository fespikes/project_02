import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tccFilter',
})
export class FilterPipe implements PipeTransform {
  // filter: string | {key1: value, key2: value}
  // 不支持 nest object
  transform(items: any[], filter: object | string | number) {
    if (filter !== null && typeof filter === 'object') {
        const filterKeys = Object.keys(filter);
        return items.filter(item =>
          filterKeys.reduce((pre, keyName) =>
            (pre && new RegExp(filter[keyName], 'gi').test(item[keyName])) || !!~['', null, undefined].indexOf(filter[keyName]), true));
    } else if (typeof filter === 'string' || typeof filter === 'number') {
      return items.filter(item => {
        if (item !== null && typeof item === 'object') {
          return Object.keys(item).some(key => new RegExp(filter.toString(), 'gi').test(JSON.stringify(item[key])));
        } else {
          return new RegExp(filter.toString(), 'gi').test(JSON.stringify(item));
        }
      });
    }
  }
}
