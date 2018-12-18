import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tccDefault',
})
export class DefaultPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if ([null, undefined, ''].indexOf(value) > -1) {
      return '-';
    }
    return value;
  }

}
