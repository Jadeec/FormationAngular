import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitCharacter',
})
export class LimitCharacterPipe implements PipeTransform {
  transform(value: string, arg: number = 450): string {
    if(value.length > arg){
      const text = value.slice(0, arg);
      return text + '...';
    } else {
      return value
    }
  }
}
