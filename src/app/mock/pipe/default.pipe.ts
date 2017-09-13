import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tccDefault',
})
export class DefaultPipeStub implements PipeTransform {
  transform(value) {
    return value;
  }
}
