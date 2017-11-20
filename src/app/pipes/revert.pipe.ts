import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'revert'
})
export class RevertPipe implements PipeTransform {

  transform(value: String, args?: any): String {
    return value.split('').reverse().join('');
  }

}
