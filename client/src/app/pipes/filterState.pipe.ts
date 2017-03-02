import { Pipe, PipeTransform } from '@angular/core';
import { Feeling } from '../../Feeling';

@Pipe({name: 'filterState'})
export class FilterStatePipe implements PipeTransform {
  transform(feelings: Array<Feeling>,filterState): Array<Feeling> {
      if (filterState) {
          return feelings
          .filter(feeling => feeling.state === filterState);
      }
      return feelings;
  }
}