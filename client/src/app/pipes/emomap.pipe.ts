import { Pipe, PipeTransform } from '@angular/core';
import { feelingStatesModel } from '../models/FeelingStates.model';

@Pipe({name: 'emomap'})
export class EmomapPipe implements PipeTransform {
  transform(value: string): string {
      console.log(value,feelingStatesModel[value]);
      return feelingStatesModel[value];
  }
}