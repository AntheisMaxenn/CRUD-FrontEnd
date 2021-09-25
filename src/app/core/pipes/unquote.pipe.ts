import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unquote'
})
export class UnquotePipe implements PipeTransform {

  transform(value: string): unknown {
    return value.replace(`"`, ``).replace(`"`, ``);
  }

}
